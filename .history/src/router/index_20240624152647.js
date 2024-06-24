import { Navigate } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <Navigate to="/main"></Navigate>,
  },
  {
    path: '/main',
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
