import { Navigate, Outlet, useLocation } from 'react-router-dom'
import appConfig from '@/configs/app.config'
import { useAuth } from '@/auth'
import { sharedRoutes } from '@/configs/routes.config'

const { authenticatedEntryPath } = appConfig

const PublicRoute = () => {
    const { authenticated } = useAuth()
    const location = useLocation()
    
    // Check if current path is in shared routes
    const isSharedRoute = sharedRoutes.some(route => route.path === location.pathname)
    
    // If the user is authenticated and the route is not a shared route, redirect to authenticated entry path
    if (authenticated && !isSharedRoute) {
        return <Navigate to={authenticatedEntryPath} />
    }
    
    // Otherwise, render the route
    return <Outlet />
}

export default PublicRoute
