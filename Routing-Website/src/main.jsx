import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/contact.jsx'
import User from './components/User.jsx'
import Github, { githubInfoLoader } from './components/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
 
    
 <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>} />
    <Route path='user/:userId' element={<User/>}/>
    <Route
      loader= {githubInfoLoader}
      path='github'
      element={<Github/>}/>
 </Route> 
 
 
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router}/>
  </React.StrictMode>, 
)


