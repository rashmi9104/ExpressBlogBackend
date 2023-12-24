import {React, useState} from 'react'
import image from '../../Assets/blogImg.png'
import { TextField, Button } from '@mui/material'

const signupInitialVal = {
  username: '',
  name: '',
  password: ''
}

const Login = () => {
  

  const [account, toggleAccount] = useState('login');
  const [signup, setSignup] = useState(signupInitialVal);

  const toggleHandler = ()=>{
    account === 'signup'? toggleAccount('login'):toggleAccount('signup')
  }

  const signupValue = (e) =>{
    setSignup({...signup,[e.target.name]:e.target.value});
  }
    
  return (
    <div className=' w-4/12 mx-auto shadow-lg shadow-gray-600 my-10'>
      {
        account === 'login'?
        <div style={{padding: "4px"}} className='mx-auto flex flex-col justify-center items-center w-7/12 my-5'>
          <img className='w-44 mt-5' src={image}></img>
          <TextField className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter username" variant="standard" />
          <TextField className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter password" variant="standard" />
          <Button  variant="contained" style={{marginTop: '10px', backgroundColor: 'orange'}} className='w-full mt-5'>Login</Button>
          <p className='text-center mt-5'>OR</p>
          <Button className='w-full shadow-sm shadow-slate-500 ' style={{marginTop: '8px'}} variant="text" onClick={toggleHandler} >Create an account</Button>
        </div>
        :
        <div style={{padding: "4px"}} className='mx-auto flex flex-col justify-center items-center w-7/12'>
          <img className='w-44 mt-5' src={image}></img>
          <TextField onChange={signupValue} name='username'  className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter username" variant="standard" />
          <TextField onChange={signupValue} name='name' className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter name" variant="standard" />
          <TextField onChange={signupValue} name='password' className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter password" variant="standard" type='password' />
          <Button variant="contained" style={{marginTop: '10px', backgroundColor: 'orange'}} className='w-full mt-5'>Signup</Button>
          <p className='text-center mt-5'>OR</p>
          <Button className='w-full shadow-sm shadow-slate-500' style={{marginTop: '8px'}} variant="text" onClick={toggleHandler}>Already have an account</Button>
        </div>
        

      }
    </div>
  )
}

export default Login