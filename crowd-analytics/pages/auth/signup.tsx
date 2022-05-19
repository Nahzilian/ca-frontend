import type { NextPage } from 'next'
import useForm from '../../components/helpers/useForm'
import ContentWrapper from '../../components/Layouts/ContentWrapper'
import Button from '../../components/Buttons/Buttons'
import Input from '../../components/Forms/Input'
import style from '../../styles/Login.module.sass'
import Image from 'next/image'
import { FormEvent, useState } from 'react'

interface Checker {
  state: "init" | "c_f" | "c_t"
  description: string
}

const SignUp: NextPage = () => {
  const checker: Array<Checker> = [
    { state: "init", description: '8-10 characters' },
    { state: "init", description: 'Contains special characters: @%#$&!' },
    { state: "init", description: 'At least 1 upper letter and a number' },
  ]

  const [formData, updateFormData, getValueOfForm] = useForm({ username: '', password: '', passCheck: '' })
  const [checkerState, setCheckerState] = useState(checker)
  const [validUsername, setValidUsername] = useState(false)
  const [validatePass, setValidPassword] = useState(false)

  const usernameValidator = () => {
    // validate
    let username: string = getValueOfForm('username')
    setValidUsername(username !== "testname123")
  }

  const onSubmit = (e: FormEvent) => {
    // Submit formdata here
    e.preventDefault()
    console.log(formData)
  }

  const convertStyleChecker = (curState: string) => {
    if (curState == "init") return ''
    if (curState == "c_f") return style.checked__red
    if (curState == "c_t") return style.checked__green
  }

  const updateCheckerState = (idx: number, state: "init" | "c_f" | "c_t") => {
    let _states = [...checkerState]
    _states[idx].state = state
    setCheckerState(_states)
  }

  const checkPassword = (key: string, val: string) => {
    let hasSpecialChars = /[!@#$%&.]/.test(val)
    let hasNumber = /\d/.test(val)
    let hasUpper = /[A-Z]+/.test(val)
    updateCheckerState(0, val.length >= 8 ? "c_t" : "c_f")
    updateCheckerState(1, hasSpecialChars ? "c_t" : "c_f")
    updateCheckerState(2, hasUpper && hasNumber ? "c_t" : "c_f")
    updateFormData(key, val)
  }

  const retypePassword = (key: string, val: string) => {
    let password: string = getValueOfForm('password')
    if (val === password) setValidPassword(false)
    updateFormData(key, val)
  }

  return (
    <div className={`container ${style.container}`}>
      <ContentWrapper className={style.content_wrapper}>
        <div className={`${style.inner_content}`}>

          <div className={`${style.image_wrapper}`}>
            <Image src="/images/logo.svg" alt="logo" width={230} height={107} />
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
            <Input invalid={validUsername} label='Username' value='' _key="username" onChange={updateFormData}  required onBlur={usernameValidator}/>
            <Input label='Password' value='' type="password" _key="password" onChange={checkPassword} required />
            <Input invalid={validatePass} label='Re-enter Password' value='' type="password" _key="passCheck" onChange={retypePassword} required />

            <div className={`${style.requirements}`}>
              <h4>Password requirements</h4>
              <ul>
                {checkerState.map((c, idx) => <li key={idx} className={convertStyleChecker(c.state)}>{c.description}</li>)}
              </ul>
            </div>

            <Button type="submit" className='full-width'>Next</Button>
          </form>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default SignUp
