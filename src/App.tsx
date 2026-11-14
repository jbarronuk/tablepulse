import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
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

      <section id="spacer"></section>
      <section>
        <h1>TODO</h1>
        <p>Get something on github</p>
        <p>grab the user count from supabase</p>
        <p>add a vite env or similar to store the tables we're grabbing from</p>
        <p>Add password page - store a fixed password somewhere</p>
        <p>add graph showing days users joined (created)</p>
      </section>
    </>
  )
}

export default App
