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
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]

export default routes
