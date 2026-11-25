import React, { useState } from 'react'
import { useSession } from './hooks/useSession'
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()
  const { signIn } = useSession()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
      e.preventDefault()
      const error = await signIn(email, password)
      if (error) {
        console.log(error)
        //setError(error)
      } else {
        navigate("/home", { replace: true })
      }
  }
  return (
    <> 
      <section>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          <button type="submit">Sign In</button>
          { error }
        </form>
      </section>
    </>
  )
}

export default LoginPage
