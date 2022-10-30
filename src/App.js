import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/signup'
import './bootstrap/css/bootstrap.min.css'
import { UserAuthContextProvider } from './context/UserAuthContext'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'



export const App = () => {
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className="col">
        <UserAuthContextProvider>
          <Routes>
            <Route path='/home' element={ <ProtectedRoute><Home /></ProtectedRoute> } />
            <Route path='/' element={ <Login/> } />
            <Route path='/signup' element={ <Signup/> } />
          </Routes>
        </UserAuthContextProvider>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
