import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'

const Home = () => {
  const {user, Logout} = useUserAuth();
  console.log(user);
  const handleLogout = async() => {
    try {
      await Logout()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className='container w-50'>
        <div className="p-4 card mt-5 text-center h3">Hello welcome<br />{user && user.email}</div> 
        <div className='d-grid gap-2'>
          <button className='btn btn-primary' onClick={handleLogout}>LogOut</button>
        </div>
      </div>
    </>
  )

}

export default Home