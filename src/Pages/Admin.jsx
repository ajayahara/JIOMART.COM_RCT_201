
import { Input,Button, Center, SimpleGrid, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRef } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
const Admin = () => {
const username=useRef()
const userpass=useRef()
const [admindata,setAdmin]=useState({})
const navigate=useNavigate()
const toast = useToast()
const statuses ="error"
function handleAuth(){
 if(username.current.value===admindata.username && userpass.current.value ===admindata.password ){
    navigate(`/adminPanel`)
 }
 else{
    toast({
        title: ` Invalid username or password`,
        status: statuses,
        isClosable: true,
      })
 }
}
useEffect(()=>{
    axios.get("https://kiwi-discovered-pyjama.glitch.me/admin")
    .then((res)=>setAdmin(res.data))
},[])
  return (
    <div>
        <Center>
        <SimpleGrid columns={1} gap={"10px"}w={"500px"} mt={"40px"}>
        <Input ref={username} type="text" placeholder='Email'/>
        <Input  ref={userpass}type="password" placeholder='Password'/>
        <Button onClick={handleAuth} color={"white"}bg={"#008ecc"}> CONTINUE</Button>
        </SimpleGrid>
        </Center>
    </div>
  )
}
export default Admin