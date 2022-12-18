import React, { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {Box,Image,Text,Input, Button, InputGroup, InputRightElement, Flex, Spacer, Checkbox} from "@chakra-ui/react"
import Navbar from "../Pages/Navbar";
import Navlist from "./Navlist";
import { Navigate } from "react-router";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";

const initMsg = {
    firstName: {
      status: false,
      notice: "Please enter your First Name",
    },
    lastName: {
      status: false,
      notice: "Please enter your Last Name",
    },
    email: {
      status: false,
      notice: "Please enter your Email",
    },
    password1: {
      status: false,
      notice: "Please enter your Password",
    },
    password2: {
      status: false,
      notice: "Password does not match",
    },
  };
  
  const initform = {
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  };


const RegisterForm = () => {
    const [form, setform] = useState(initform);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState(initMsg);
    const { firstName, lastName, email, password1, password2 } = form;

    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(name, value);
        setform({ ...form, [name]: value });
      };

      const handleClick = () => setShow(!show);

      const handleForm =async  (e) => {
        // e.prevantDefault();
        setMsg(initMsg);
        if (firstName === "") {
          setMsg({ ...msg, firstName: { ...msg.firstName, status: true } });
        }else if (lastName === "") {
          setMsg({ ...msg, lastName: { ...msg.lastName, status: true } });
        } else if (email === "") {
          setMsg({ ...msg, email: { ...msg.email, status: true } });
        } 
        else if (password1 === "") {
          setMsg({ ...msg, password1: { ...msg.password1, status: true } });
        } else if (password2 === "" || password1 !== password2) {
          setMsg({ ...msg, password2: { ...msg.password2, status: true } });
        } 
        
        localStorage.setItem("Details", form);
        Navigate('/')
    }
    
    let value=localStorage.getItem("phone");
    return(
        <>
        <Navbar/>
        <Navlist />
        <br />
        <br />
        <Box w="90%" m="auto" display="flex">
         <Image m={50} h={600} src= "https://www.jiomart.com/msassets/images/login-banner.jpg"/>
        <Box ml="200px" mt="100px">
        <Text  fontSize="27px" fontWeight="bold">Sign up</Text>
        <Text fontSize={18} color={'rgb(112,117,121)'}>Please enter your details.</Text>
        <br/>
        <form>
        <Input 
          mb={"0px"}
          placeholder="Your First Name"
          name="firstName"
          onChange={handleChange}
          value={firstName}
        />
         {msg.firstName.status && (
          <Text fontSize="xs" color="crimson">
            {msg.firstName.notice}
          </Text>
        )}
        <Input
          mt={"30px"}
          placeholder="Your Last Name"
          name="lastName"
          onChange={handleChange}
          value={lastName}
        />
        {msg.lastName.status && (
          <Text fontSize="xs" color="crimson">
            {msg.lastName.notice}
          </Text>
        )}
        <Input
          mt={"30px"}
          placeholder="Your Email Id"
          name="email"
          onChange={handleChange}
          value={email}
        />
        {msg.email.status && (
          <Text   fontSize="xs" color="crimson">
            {msg.email.notice}
          </Text>
        )}
        <InputGroup mt={'30px'} size="md">
          <Input
            mb={"30px"}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            name="password1"
            onChange={handleChange}
            value={password1}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
          
        </InputGroup>
        {msg.password1.status && (
            <Text mt={'-30px'} pb='25px' fontSize="xs" color="crimson">
              {msg.password1.notice}
            </Text>
          )}

        <InputGroup  size="md">
          <Input
            
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            name="password2"
            onChange={handleChange}
            value={password2}
          />
          <InputRightElement width="4.5rem">
            <Button  h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text mb={"30px"} fontSize="13px" color="##e3c6b0">
          Use 8 or more characters with a mix of letters & numbers <br />
          {msg.password2.status && (
            <Text fontSize="xs" color="crimson">
              {msg.password2.notice}
            </Text>
          )}
        </Text>
        
        <Flex mb={"1rem"} justifyContent={"center"} alignItems={"center"}>
          <Box p={"10px"} fontSize={"32px"} color={"#48df62"}>
            <FaWhatsappSquare />
          </Box>
          <Box>
            {" "}
            <Text fontSize={"sm"} as={"b"}>
              Enable order updates and important information on <br /> Whatsapp
            </Text>{" "}
          </Box>
          <Spacer />
          <Box>
            <Checkbox defaultChecked></Checkbox>
          </Box>
        </Flex>
        <hr />
        <Flex mb={"1rem"} justifyContent={"center"} alignItems={"center"}>
        <Text
          mb={"10px"}
          fontSize="20px"
          fontWeight="semibold"
          color="black"
          pb="6px"
          mt="20px"
        >
          Already Verified 
        </Text>
        <Spacer />
        <Box p={"10px"} fontSize={"32px"} color={"#48df62"}>
        <BsFillPatchCheckFill/>
          </Box>
          </Flex>
        
        <Text as={"span"} mb={"10px"} fontSize="14px" color="##e3c6b0">
          This Phone Number is already Verified <Text as={"b"}>+91-{value}</Text>{" "} 
        </Text>
       
        <Button
        ml={10}
          fontSize={"13px"}
          color="#e23911"
          boder="0"
          bg="white"
          onClick={() => {
            // navigate("/account/login");
          }}
        >
          Change
        </Button>
         <Button
          w={"100%"}
          mb={"90px"}
          mt="30px"
          colorScheme="blue"
          onClick={handleForm}
        >
          Create Account
        </Button>
        </form>
</Box>
</Box>
        
    </>
        )
}




export default RegisterForm