import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
    

  return (
    <div>
        <h1>Thank you for register</h1>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Home