import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import '../bootstrap/css/bootstrap.min.css'
import { useUserAuth } from '../context/UserAuthContext'
import { googleProvider, Auth } from '../firebase'
// import {signInWithPopup} from 'firebase/app'


const Login = () => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { Login } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("")
    try {
      await Login(email, password);
      navigate("/home")
    } catch (error) {
      setError(error.message) 
    }

  }
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await Auth.signInWithPopup(googleProvider)
      setUser(await Auth.currentUser)
      navigate("/home")

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='container d-flex justify-content-center  mt-5'>
      <div>
        <div className="card p-5 d-grid">
          <div className='card-head'>
              <h1>Firebase Auth Login</h1>
              {error && <p className='alert alert-danger'>{error}</p>}
          </div>
          <form onSubmit={handleSubmit}>
            <div className='mt-3'>
              <label htmlFor="Email">Email</label><br />
              <input type="email" id='Email' className='w-100' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='mt-3'>
              <label htmlFor="password">Password</label><br />
              <input type="password" id='password' className='w-100' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-primary btn-block mt-3 w-100">Login</button>
            </div>
            
          </form>

          <hr />


          <div className='w-100'>
            <GoogleButton className='g-btn' type='dark' onClick={handleGoogleSignIn}/>
          </div>
          {/* <div class="d-grid">
            <button type="button" class="btn btn-primary btn-block" onClick={handleGoogleSignIn}>Login with Google</button>
          </div> */}
          <div className="card d-flex justify-content-center mt-2">
              <p className='lead p-3 mx-2'>Don't you have an account? <Link to='/signup'>Signup</Link></p>
          </div> 


        </div>
      </div>
    </div>
  )
}

export default Login