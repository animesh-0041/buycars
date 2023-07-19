import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [data,setData]=useState({
        email:"",
        password:""
    })
    const handelChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handelSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/api/login",data)
        .then((res)=>{
         
            if(res.data.msg=="Login Succesfull"){
                localStorage.setItem("buycToken",res.data.token)
                alert("Login Successfull")
                window.location='/cars'
            }
            else{
                alert(res.data.msg)
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
   <Box>
    <Box w={['90%','90%','40%']} m={'80px auto'} shadow={'md'} p={'30px'} borderRadius={'10px'} >
        <Heading size={'lg'} textAlign={'center'}>Login Now</Heading>
        <Box>
            <form onSubmit={handelSubmit}>
                <FormControl>
                    <FormLabel>Email:</FormLabel>
                    <Input placeholder='Enter your email' name='email' onChange={handelChange} required/>
                </FormControl>
                <FormControl>
                    <FormLabel>Password:</FormLabel>
                    <Input placeholder='Enter your password' type='password' name='password' onChange={handelChange} required/>
                </FormControl>
                <Box textAlign={'center'} mt={'10px'}>
                <Button type='submit' colorScheme={'green'}>Login</Button>
                </Box>
            </form>
            <Box textAlign={'center'} fontWeight={'bold'} textDecoration={'underline'}>

            <Link to={'/signup'}>Create your account</Link>
            </Box>
        </Box>
    </Box>
   </Box>
  )
}

export default Login
