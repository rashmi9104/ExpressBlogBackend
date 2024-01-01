import {React, useState} from 'react'
import image from '../../Assets/blogImg.png'
import { TextField, Button, FormControlLabel } from '@mui/material'
import axios from 'axios';

const Login = () => {
  const [loginData, setLogindata] = useState({
    username:"",
    password:""
  })

  const submitHandler =async(e)=>{
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:8000/login', loginData);
      const {success, message} = response.data;
      // console.log("sucess", success);
      if(success){
        console.log("Login successfully");
      }
      else{
        console.log(message);
      }
    }
    catch(error){
      console.error("login error");
    }
    setLogindata({
      username: "",
      password: ""
    })
  }

  const valueHandler =(e)=>{
    const {name, value} = e.target;
    console.log(name,value);
    setLogindata((prev)=>({
      ...prev,
      [name]:value
    }
    ))

  }
  return (
    <div className=' w-4/12 mx-auto shadow-lg shadow-gray-600 my-10'>
        <form onSubmit={submitHandler} style={{padding: "4px"}} className='mx-auto flex flex-col justify-center items-center w-7/12 my-5'>
          <img className='w-44 mt-5' src={image}></img>
          <TextField onChange={valueHandler} name="username" value={loginData.username} required className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter username" variant="standard" />
          <TextField onChange={valueHandler} name="password" value={loginData.password} required className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter password" variant="standard" type="password" />
          <Button  variant="contained" style={{marginTop: '10px', backgroundColor: 'orange'}} className='w-full mt-5'type='submit' >Login</Button>
          <p className='text-center mt-5'>OR</p>
          <Button variant="text" style={{marginTop: '8px'}} className='w-full shadow-sm shadow-slate-500 ' >Create an account</Button>
        </form>
    </div>
  )
}

export default Login






















// import {React, useState} from 'react'
// import image from '../../Assets/blogImg.png'
// import { TextField, Button, FormControlLabel } from '@mui/material'
// import HeroSection from '../HeroSection/HeroSection'


// const signupInitialVal = {
//   username: '',
//   name: '',
//   password: ''
// }

// const Login = () => {
  

//   const [account, toggleAccount] = useState('login');
//   const [signup, setSignup] = useState(signupInitialVal);

//   const toggleHandler = ()=>{
//     account === '/register'? toggleAccount('/login'):toggleAccount('/register')
//   }

//   const signupValue = (e) =>{
//     setSignup({...signup,[e.target.name]:e.target.value});
//   }

//   const submitHandler = ()=>{
//     if()
//   }
    
//   return (
//     <div className=' w-4/12 mx-auto shadow-lg shadow-gray-600 my-10'>
//       {
//         account === '/login'?
//         <form onSubmit={submitHandler} style={{padding: "4px"}} className='mx-auto flex flex-col justify-center items-center w-7/12 my-5'>
//           <img className='w-44 mt-5' src={image}></img>
//           <TextField required className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter username" variant="standard" onChange={}/>
//           <TextField required className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter password" variant="standard" />
//           <Button  variant="contained" style={{marginTop: '10px', backgroundColor: 'orange'}} className='w-full mt-5'>Login</Button>
//           <p className='text-center mt-5'>OR</p>
//           <Button className='w-full shadow-sm shadow-slate-500 ' style={{marginTop: '8px'}} variant="text" onClick={toggleHandler} >Create an account</Button>
//         </form>
//         :
//         <form style={{padding: "4px"}} className='mx-auto flex flex-col justify-center items-center w-7/12'>
//           <img className='w-44 mt-5' src={image}></img>
//           <TextField required onChange={signupValue} name='username'  className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter username" variant="standard" />
//           <TextField required onChange={signupValue} name='name' className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter name" variant="standard" />
//           <TextField required onChange={signupValue} name='password' className='w-full' style={{marginTop: '8px'}} id="standard-basic" label="Enter password" variant="standard" type='password' />
//           <Button variant="contained" style={{marginTop: '10px', backgroundColor: 'orange'}} className='w-full mt-5'>Signup</Button>
//           <p className='text-center mt-5'>OR</p>
//           <Button className='w-full shadow-sm shadow-slate-500' style={{marginTop: '8px'}} variant="text" onClick={toggleHandler}>Already have an account</Button>
//         </form>
        

//       }
//     </div>
//   )
// }

// export default Login