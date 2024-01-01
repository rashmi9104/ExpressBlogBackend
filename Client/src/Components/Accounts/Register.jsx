import {React, useState} from 'react'
import image from '../../Assets/blogImg.png'
import { TextField, Button, FormControlLabel } from '@mui/material'
import axios from 'axios';

const Register = () => {
  const signupValue=()=>{
    
  }
  return (
    <form style={{padding: "4px"}} className='mx-auto flex flex-col justify-center items-center w-7/12'>
      <img className='w-44 mt-5' src={image}></img>
      <TextField required onChange={signupValue} name='username' value={username} className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter username" variant="standard" />
      <TextField required onChange={signupValue} name='name' value={name} className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter name" variant="standard" />
      <TextField required onChange={signupValue} name='password' value={password} className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter password" variant="standard" type='password' />
      <TextField required onChange={signupValue} name='Repassword' value={Repassword} className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Re-enter password" variant="standard" type='password' />
      <Button variant="contained" style={{marginTop: '10px', backgroundColor: 'orange'}} className='w-full mt-5'>Signup</Button>
      <p className='text-center mt-5'>OR</p>
      <Button className='w-full shadow-sm shadow-slate-500' style={{marginTop: '8px'}} variant="text" onClick={toggleHandler}>Already have an account</Button>
  </form>
  )
}

export default Register
