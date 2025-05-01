import authRoute from '@/configs/routes.config/authRoute'
import { sharedRoutes } from '@/configs/routes.config'
import { useLocation } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import type { CommonProps } from '@/@types/common'

const PreLoginLayout = ({ children }: CommonProps) => {
    const location = useLocation()
    const { pathname } = location

    const isAuthPath = authRoute.some((route) => route.path === pathname)
    const isHomePage = pathname === '/' || sharedRoutes.some(route => route.path === '/')

    return (
        <div className={`flex flex-auto flex-col ${isHomePage ? '' : 'h-[100vh]'}`}>
            {isAuthPath ? <AuthLayout>{children}</AuthLayout> : children}
        </div>
    )
}

export default PreLoginLayout
