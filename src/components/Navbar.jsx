import React, { useContext } from 'react'
// import {signOut} from "firebase/auth"
// import { auth } from '../firebase'
// import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  // const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">WEQ Chat</span>
      <div className="user">
        <img src="https://lh4.googleusercontent.com/-vkbgVhyq9Aw/AAAAAAAAAAI/AAAAAAAAAOw/3XLh_-xIIL4/photo.jpg?sz=64" alt="" />
        <span></span>
        <button >logout</button>
      </div>
    </div>
  )
}

export default Navbar