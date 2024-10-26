import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Help from './Pages/Help'
import Notfound from './Components/Notfound/Notfound'
import Footer from './Components/Footer/Footer'

function App() {
  const myroute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<><Navbar/><Home/></>}/>
        <Route path='/about' element={<><Navbar/><About/></>}/>
        <Route path='/blog' element={<><Navbar/><Blog/></>}/>
        <Route path='/help' element={<><Navbar/><Help/></>}/>
        <Route path='*' element={<><Navbar/><Notfound/></>}/>
      </Route>
    )
  )
  return (
    <>
     <RouterProvider router={myroute}/>
     <Footer/>
    </>
  )
}
export default App
