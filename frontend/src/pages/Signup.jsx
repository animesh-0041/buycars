import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {

const [data,setData]=useState({
    email:"",
    password:"",
    confirmPassword:""
})
const handeChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
const handelSubmit=(e)=>{
    e.preventDefault();
    if(data.confirmPassword!=data.password){
        alert("Password not match!")
        return
    }
    else{
        axios.post("http://localhost:8080/api/signup",{email:data.email,password:data.password})
        .then((res)=>{
            console.log(res.data);
            alert(res.data)
            window.location='/login'
        }).catch((err)=>{
            console.log(err);
        })
    }
}


  return (
    <Box>
    <Box w={['90%','90%','40%']} m={'80px auto'} shadow={'md'} p={'30px'} borderRadius={'10px'} >
        <Heading size={'lg'} textAlign={'center'}>Signup Now</Heading>
        <Box>
            <form onSubmit={handelSubmit}>
                <FormControl>
                    <FormLabel>Email:</FormLabel>
                    <Input placeholder='Enter your email' name='email' onChange={handeChange} required/>
                </FormControl>
                <FormControl>
                    <FormLabel>Password:</FormLabel>
                    <Input placeholder='Enter your password' type='password' name='password' onChange={handeChange} required/>
                </FormControl>
                <FormControl>
                    <FormLabel>Confirm Password:</FormLabel>
                    <Input placeholder='Re-enter your password' type='password' name='confirmPassword' onChange={handeChange} required/>
                </FormControl>
                <Box textAlign={'center'} mt={'10px'}>
                <Button type='submit' colorScheme={'green'}>submit</Button>
                </Box>
            </form>
        </Box>
    </Box>
   </Box>
  )
}

export default Signup
