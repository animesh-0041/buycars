import { Box, Button, FormControl, FormLabel, Heading, Img, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,Select,useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cars = () => {
  const { isOpen:addIsOpen, onOpen:addOnOpen, onClose:addOnClose } = useDisclosure();
  const [allCars,setAllcars]=useState([])
  const [showcar,setShowCar]=useState([])
  const [preCar,setPreCar]=useState({})
  const [inventory,setInventory]=useState({
    kmOdometer:"",
    majorScratch:"",
    NumberOfAccident:"",
    NumberofpreviousBuyers:"",
    ragistrationPlace:"",
  })

  const handleChange=(e)=>{
    setInventory({...inventory,[e.target.name]:e.target.value})

  }
  const handlecars=(e)=>{
    axios.get(`https://attryb-uw7d.onrender.com/car?model=${e.target.value}`)
    .then((res)=>{
      setPreCar(res.data)
    }).catch((er)=>{
      console.log(er);
    })
  }
const handeSubmit=(e)=>{
let obj={...inventory,...preCar}
    axios.post("https://attryb-uw7d.onrender.com/inventory",obj,{
      headers: {
        "Authorization": localStorage.getItem("buycToken")
    }
    })
    .then((res)=>{
      console.log(res.data);
      alert(res.data)
      addOnClose()
    })
    .catch((er)=>{
      console.log(er);
    })
}


 useEffect(()=>{

  axios.get("https://attryb-uw7d.onrender.com/inventory").then((res)=>{

    setShowCar(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
 
   


  axios.get("https://attryb-uw7d.onrender.com/car").then((res)=>{
    setAllcars(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
 },[])
   
 
  return (
   <Box>
    <Box textAlign={'right'} m={'20px 20px 0 0'}>
    <Button size={'sm'} letterSpacing={'5px'} colorScheme={'green'} onClick={(e)=>addOnOpen()}>ADD CARS</Button>
    </Box>
    
<Box display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} gap={'10px'} >
  {
    showcar.map((el,i)=>{
      return <Box shadow={'md'} p={'15px'} borderRadius={'15px'} key={i}>
        <Img src='https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=75'/>
        <Heading size={'md'}>{el.modelName}</Heading>
        <Heading size={'md'}>{el.priceNew}</Heading>
      </Box>
    })
  }
</Box>





    {/* car add modal */}
    <Modal isOpen={addIsOpen} onClose={addOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Your Car</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Select Car</FormLabel>
             <Select onChange={handlecars}>
              {
                  allCars.map((el,i)=>{
                    return <option key={i} value={el.modelName}>{el.modelName}</option>
                  })
              }
             </Select>
            </FormControl>
           <FormControl>
            <FormLabel>KMs on Odometer</FormLabel>
            <Input placeholder='KMs on Odometer' onChange={handleChange} name='kmOdometer'/>
           </FormControl>
           <FormControl>
            <FormLabel>Major Scratches</FormLabel>
            <Input placeholder='Major Scratches'  onChange={handleChange} name='majorScratch'/>
           </FormControl>
           <FormControl>
            <FormLabel>Number of accidents reported</FormLabel>
            <Input placeholder='Number of accidents reported' type='number' onChange={handleChange} name='NumberOfAccident'/>
           </FormControl>
            
           <FormControl>
            <FormLabel>Number of previous buyers</FormLabel>
            <Input placeholder='Number of previous buyers' type='number' onChange={handleChange} name='NumberofpreviousBuyers'/>
           </FormControl>
           <FormControl>
            <FormLabel>Registration Place</FormLabel>
            <Input placeholder='Registration Place' type='text' onChange={handleChange} name='ragistrationPlace'/>
           </FormControl>
           <FormControl>
            <FormLabel>Upload image</FormLabel>
            <Input type='file' />
           </FormControl>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={'gray'} size={'sm'} mr={3} onClick={addOnClose}>
              Close
            </Button>
            <Button colorScheme='green' size={'sm'} onClick={handeSubmit}>ADD</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
   </Box>
  )
}

export default Cars
