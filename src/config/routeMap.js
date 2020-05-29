import Loadable from 'react-loadable'
import Loading from '@views/Loading'
const Dashboard = Loadable({ loader: () => import('@/views/dashboard'), loading: Loading })

export default [
    { path: '/dashboard', component: Dashboard, roles: ['admin', 'editor', 'guest'] },
]