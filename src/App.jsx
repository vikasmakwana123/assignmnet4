import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/Contact'

import Ambulance from './pages/Ambulance'
import Login from './pages/Login'

function App() {
  return (
<>
<Navbar/>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ambulance" element={<Ambulance />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<div>404 Not Found</div>} />

</Routes>
<Footer/>


</>
  )
}

export default App
