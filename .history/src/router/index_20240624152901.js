import { Navigate } from 'react-router-dom'

//组件
const Home = React.lazy(() => import('@/view/home/Home'))
const Search = React.lazy(() => import('@/view/search/Search'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '*',
    element: <div>页面不存在...</div>,
  },
]

export default routes
