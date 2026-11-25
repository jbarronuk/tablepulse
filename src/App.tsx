import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from './HomePage'
import LoginPage from "./LoginPage"
import ProtectedRoute from "./ProtectedRoute"
import { tables } from "./tables"
import TablePage from "./TablePage"
import Nav from "./Nav"

function App() {  
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh' }}>
        <Nav />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            {tables.map(t => (
              <Route
                key={t.path}
                path={t.path}
                element={<TablePage key={t.table} table={t.table} label={t.label} />}
              />
            ))}
          </Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
