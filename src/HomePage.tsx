import React, { useState } from 'react'
import { useSession } from './hooks/useSession'

function HomePage() {
  const [count, setCount] = useState(0)
  const { signIn } = useSession()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e: React.FormEvent) {
      e.preventDefault()
      const error = await signIn('', '')
      if (error) {
        console.log(error)
      } else {
        console.log("Logged in!")
      }
  }
  return (
    <> 
      <section id="center">
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          <button type="submit">Sign In</button>
        </form>
        <button
          type="button"
          onClick={async () => {signIn('', '')}}
        >Login</button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <section>
        <h1>TODO</h1>
        <p>Get something on github</p>
        <p>grab the user count from supabase</p>
        <p>add a vite env or similar to store the tables we're grabbing from</p>
        <p>Add password page - store a fixed password - Cloudflare Access or Supabase Auth</p>
        <p>add graph showing days users joined (created)</p>
      </section>
    </>
  )
}

export default HomePage
