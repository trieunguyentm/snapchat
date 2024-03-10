import Image from "next/image"
import Link from "next/link"
import React from "react"
import LoginCard from "./LoginCard"

const LoginPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">
        Log in to SnapChat App
      </h1>
      <LoginCard />
    </>
  )
}

export default LoginPage
