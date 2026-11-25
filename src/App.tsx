import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from "./pages/LoginPage"
import ProtectedRoute from "./components/ProtectedRoute"
import { tables } from "./config/tables"
import TablePage from "./pages/TablePage"
import Nav from "./components/Nav"

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
