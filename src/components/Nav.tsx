import { Link, useNavigate } from "react-router-dom"
import { useSession } from "../hooks/useSession"
import { tables } from "../config/tables"

function Nav() {

    const { session, loading, signOut } = useSession()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await signOut()
        navigate('/login', { replace: true })
    }
    return (
        <nav>
          <span key="Home"><Link to="/">Home</Link></span>
          {tables.map(t => (
            <span key={t.path}> | <Link to={t.path}>{t.label}</Link></span>
          ))}
          {!loading && (
            session
                ? <><span key="Logout"> | <button className="link-button" onClick={handleLogout}>Logout</button></span></>
                : <><span key="Login"> | <Link to="/login">Login</Link></span></>
          )}
          
        </nav>
    )
}
export default Nav