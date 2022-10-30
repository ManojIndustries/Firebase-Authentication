import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../bootstrap/css/bootstrap.min.css'
import { useUserAuth } from '../context/UserAuthContext'

const Signup = () => {
  const [email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { Signup } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    // alert("i am manoj")
    setError("")
    try {
      await Signup(email, password);
      navigate("/")
    } catch (error) {
      setError(error.message) 
    }

  }

  return(
    <div className='container d-flex justify-content-center  mt-5'>
      <div className="card p-5 d-grid">
         <div className='card-head'>
              <h1>Firebase Auth Signup</h1>
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
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block mt-3 w-100">Signup</button>
            </div>
            
          </form>
          
      <div className="card d-flex justify-content-center mt-2">
          <p className='lead p-3 mx-2'>Don't you have an account? <Link to='/'>Login</Link></p>
      </div> 
      </div>
    </div>
  )
  }
export default Signup