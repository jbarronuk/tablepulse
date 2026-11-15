import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import HomePage from './HomePage'
import UsersPage from './UsersPage'

function App() {  
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
