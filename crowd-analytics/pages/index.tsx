import { useState, useEffect } from 'react'
// import type { NextPage } from 'next'
import { useRouter } from 'next/router'
// import styles from '../styles/Home.module.css'

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    window.localStorage.setItem("logged_in", JSON.stringify(false))
    let isLoggedIn = window.localStorage.getItem('logged_in')?.toString()
    isLoggedIn = JSON.parse(isLoggedIn)
    if (isLoggedIn)
      router.push('/dashboard')
    else
      router.push('/auth/login')
  }, [])
}

export default Home
