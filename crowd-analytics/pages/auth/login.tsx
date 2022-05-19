import useForm from '../../components/helpers/useForm'
import type { NextPage } from 'next'
import ContentWrapper from '../../components/Layouts/ContentWrapper'
import Button from '../../components/Buttons/Buttons'
import Input from '../../components/Forms/Input'
import style from '../../styles/Login.module.sass'
import Image from 'next/image'
import { FormEvent } from 'react'
import Link from 'next/link'

const LogIn: NextPage = () => {
  const [formData, updateFormData] = useForm({ username: '', password: '' })

  const onSubmit = (e: FormEvent) => {
    // Submit formdata here
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className={`container ${style.container}`}>
      <ContentWrapper className={style.content_wrapper}>
        <div className={`${style.inner_content}`}>

          <div className={`${style.image_wrapper}`}>
            <Image src="/images/logo.svg" alt="logo" width={230} height={107} />
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
            <Input label='Username' value='' _key="username" onChange={updateFormData} />
            <Input label='Password' value='' type="password" _key="password" onChange={updateFormData} />

            <Button type="submit" className='full-width'>Login</Button>
          </form>
          <Link href={'/auth/signup'}>Don&apos;t have an account? Click here</Link>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default LogIn
