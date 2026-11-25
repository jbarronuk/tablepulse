import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import HomePage from './HomePage'
import UsersPage from './UsersPage'
import SitesPage from "./SitesPage"
import LoginPage from "./LoginPage"
import ProtectedRoute from "./ProtectedRoute"

function App() {  
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh' }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/users">Users</Link> | <Link to="/sites">Sites</Link> | <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/sites" element={<SitesPage />} />
          </Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
