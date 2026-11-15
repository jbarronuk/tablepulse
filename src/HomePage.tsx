import { useState } from 'react'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
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
