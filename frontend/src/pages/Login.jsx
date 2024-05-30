import React, { useState } from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
const Login = () => {
    const [UserName,setUserName]=useState('');
    const [UserEmail,setUserEmail]=useState('');
    const[UserPassword,setUserPassword]=useState('');
    const navigate =useNavigate();

    const handleLogin=()=>{
        const data ={
            UserName,
            UserEmail,
            UserPassword,
        };

        axios
            .post('http://localhost:8000/login',data)
            .then(()=>{
                console.log('succrssuflu');
                navigate('/');
                
            })
            .catch((error)=>{
                console.log(error);
            })


    }
    return (
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <h1>Login</h1>
        <div >
            <label className='text-xl mr-4 text-gray-500'>Name</label>
            <input 
                type='text'
                value={UserName}
                onChange={(e)=>setUserName(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2  w-full '

            />
        </div>

        <div>
            <label className='text-xl mr-4 text-gray-500'>Email</label>
            <input 
                type='email'
                value={UserEmail}
                onChange={(e)=>setUserEmail(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2  w-full '

            />
        </div>
        <div>
            <label className='text-xl mr-4 text-gray-500'>Password</label>
            <input 
                type='email'
                value={UserPassword}
                onChange={(e)=>setUserPassword(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2  w-full '

            />
        </div>

        <button className='p-2 bg-sky-300 m-8' onClick={handleLogin}>
          Save
        </button>
    </div>
  )
}

export default Login