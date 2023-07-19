import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} p={'0 20px'} h={'50px'} bg={'#673AB7'} color={'white'} alignItems={'center'} >
        <Box >
            <Heading size={'lg'}>BUYC</Heading>
        </Box>
        <Box display={ 'flex'} w={'20%'} justifyContent={'space-around'}>
            <Link to={'/'}>Login</Link>
            <Link to={'/cars'}>Cars</Link>
        </Box>
    </Box>
  )
}

export default Navbar
