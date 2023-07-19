import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,Select,useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cars = () => {
  const { isOpen:addIsOpen, onOpen:addOnOpen, onClose:addOnClose } = useDisclosure();
  const [allCars,setAllcars]=useState([])
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
    axios.get(`http://localhost:8080/car?model=${e.target.value}`)
    .then((res)=>{
      setPreCar(res.data)
    }).catch((er)=>{
      console.log(er);
    })
  }
const handeSubmit=(e)=>{
let obj={...inventory,...preCar}
console.log(obj);
}


 useEffect(()=>{
  axios.get("http://localhost:8080/car").then((res)=>{
    setAllcars(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
 })
   
 
  return (
   <Box>
    <Box textAlign={'right'} m={'20px 20px 0 0'}>
    <Button size={'sm'} letterSpacing={'5px'} colorScheme={'green'} onClick={(e)=>addOnOpen()}>ADD CARS</Button>
    </Box>
    

<h1>fgfdgfhg</h1>





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
                    return <option key={i}>{el.modelName}</option>
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
