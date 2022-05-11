import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [loggedIn, setLogin] = useState(false)

  useEffect(() => {
    // let isLoggedIn = JSON.parse(window.localStorage.getItem('logged_in') || '')
    // if (isLoggedIn) setLogin(true)
    // else setLogin(false)
  }, [])

  if (loggedIn)
    return (
      <div className={styles.container}>
        This is when you don&apos;t log in
      </div>
    )
  
  
  return (
    <div className={styles.container}>
      Something goes here
    </div>
  )
}

export default Home
