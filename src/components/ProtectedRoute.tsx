import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useSession } from '../hooks/useSession'

const ProtectedRoute = () => {
    const { session, loading } = useSession()
    const location = useLocation()

    if (loading) return null

    if (!session) {
        return <Navigate to="/login" replace state={{from: location.pathname}} />
    }

    return <Outlet />
}

export default ProtectedRoute