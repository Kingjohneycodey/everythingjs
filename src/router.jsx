import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'

// pages
import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

export default routes