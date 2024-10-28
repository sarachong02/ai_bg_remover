import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Credit from './pages/Credit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import { SignInButton, SignOutButton } from '@clerk/clerk-react'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/result' element={<Result />}/>
        <Route path='/buy' element={<Credit />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App