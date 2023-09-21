import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'

function App() {
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/verify/:id',
    element: <ResultPage/>
  }
])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
