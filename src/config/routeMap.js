import Loadable from 'react-loadable'
import Loading from '@/components/Loading'
const Dashboard = Loadable({ loader: () => import('@/views/dashboard'), loading: Loading })
const EditPassowrd = Loadable({ loader: () => import('@/views/editPassword'), loading: Loading })
const Error404 = Loadable({ loader: () => import('@/views/error/404'), loading: Loading });

export default [
    { path: '/dashboard', component: Dashboard, roles: ['admin', 'editor', 'guest'] },
    { path: '/editPassowrd', component: EditPassowrd, roles: ['admin', 'editor', 'guest'] },
    { path: "/error/404", component: Error404 },
]