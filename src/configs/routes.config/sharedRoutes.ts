import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: `/`,
        component: lazy(() => import('@/views/Home')),
        authority: []
    },
    // Add any other routes that should be accessible to both authorized and unauthorized users
]

export default sharedRoutes 