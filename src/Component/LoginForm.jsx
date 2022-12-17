import React, { useState } from "react"
import { ChevronRightIcon } from "@chakra-ui/icons";
import {Box,Image,Text,Input, Button, InputGroup, InputLeftAddon, useToast, InputRightElement} from "@chakra-ui/react"
import Navbar from "../Pages/Navbar";
import footer from "../Pages/footer";
import Navlist from "./Navlist";

const initMsg = {
  status: false,
  notice: "",
};


export default function Login(){
  const [msg, setMsg] = useState(initMsg);
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('760714')
  const [otpRequestSend, setOtpRequestSend] = useState(false);
  const toast = useToast()
  const handleOtpSend = async () => {
    setOtpRequestSend(!otpRequestSend);
    if (parseInt(phoneNumber) > 6700000000 && parseInt(phoneNumber) < 10000000000)
    {
      var a = Math.floor(100000 + Math.random() * 900000)
      a = a.toString().substring(0, 6);
      a =  parseInt(a);
      setOtp(a);
      console.log('Invalid')
      { !otpRequestSend && toast({
        title: 'Verification Reminder',
        description: `"${otp} is your One-Time Password. Please do not share your OTP with anyone. Team Smart Store"`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })}
      setMsg({ status: false })
    } 
    else{
      console.log('Sucess')
      setMsg({...msg, status:true, notice: "Please enter valid Mobile Number!"})
    }
   
  }
  const handleNumberChange = ()=>{
    setOtpRequestSend(!otpRequestSend);
    setPhoneNumber("")
  }
  // const 
console.log(msg);

    return(
        <>
        <Navbar/>
        <Navlist />
        <br />
        <br />
        <Box w="90%" m="auto" display="flex">
         <Image  src= "https://www.jiomart.com/msassets/images/login-banner.jpg"/>
        <Box ml="200px" mt="100px">
        <Text  fontSize="27px" fontWeight="bold">Sign in</Text>
        <Text fontSize={18} color={'rgb(112,117,121)'}>Sign in to access your Orders, Offers and Wishlist.</Text>
        <br/>

        <InputGroup>
          <InputLeftAddon
            bg={"white"}
            fontWeight={"bold"}
            color="black"
            children="+91"
          />
          <Input
            type="tel"
            placeholder="Enter your mobile no"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {otpRequestSend && (
            <InputRightElement width="4.5rem">
              <Button bg='white' size="xs" color='crimson' onClick={handleNumberChange}>
                Change
              </Button>
            </InputRightElement>
          )}
           </InputGroup>

           {otpRequestSend ? (
          <Box>
            {msg.status ? (
              <Text fontSize="xs" color="crimson">
                {msg.notice}
              </Text>
            ) : null}
            
            </Box>) : <Box>
            <Input
              mt={'10px'}
              mb={"10px"}
              placeholder="Enter your OTP"
              // value={inputOtp}
              // onChange={handleInputOtp}
            />
            <Button
              fontSize={"13px"}
              color="#e23911"
              boder="0"
              bg="white"
              // onClick={resetOtp}
            >
              Resend OTP
            </Button>


            </Box>
           }



           <Box mt={'10'} pl={"65%"}>
              <Button
                fontSize={"30px"}
                width={"50px"}
                size="lg"
                borderRadius="50%"
                colorScheme="blue"
                onClick={handleOtpSend}
              >
                <ChevronRightIcon />
              </Button>
            </Box>
            
        </Box>
        
        </Box>
        <Text
        fontWeight={"normal"}
        mt={"10px"}
        fontSize={"sm"}
        textAlign={"center"}
      >
        By continuing you agree to our
        <Text as={"span"} color={"red"}>
          Terms of service
        </Text>{" "}
        <br /> and
        <Text as={"span"} color={"red"}>
          Privacy & Legal Policy.
        </Text>
      </Text>
      
        <br />
        <br />
        <footer/>
    </>
        )
}

