import React, { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Text,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  useToast,
  InputRightElement,
} from "@chakra-ui/react";
import Navbar from "../Pages/Navbar";
import Navlist from "./Navlist";
import { useNavigate } from "react-router";

const initMsg = {
  status: false,
  notice: "",
};

export default function Login() {
  const [msg, setMsg] = useState(initMsg);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputOtp, setInputOtp] = useState("");
  const [otp, setOtp] = useState("767696");
  const [otpRequestSend, setOtpRequestSend] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const handleOtpSend = async () => {
    if (
      parseInt(phoneNumber) > 6700000000 &&
      parseInt(phoneNumber) < 10000000000
    ) {
      var a = Math.floor(100000 + Math.random() * 900000);
      a = a.toString().substring(0, 6);
      a = parseInt(a);
      setOtp(a);

      {
        !otpRequestSend &&
          toast({
            title: "Verification Reminder",
            description: `"${a} is your One-Time Password. Please do not share your OTP with anyone. Team Smart Store"`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
      }
      setMsg({ status: false });
      setOtpRequestSend(!otpRequestSend);
    } else {
      setMsg({
        ...msg,
        status: true,
        notice: "Please enter valid Mobile Number!",
      });
    }
  };

  const handleNumberChange = () => {
    setPhoneNumber("");
    setOtpRequestSend(!otpRequestSend);
  };
  const resetOtp = () => {
    var a = Math.floor(100000 + Math.random() * 900000);
    a = a.toString().substring(0, 6);
    a = parseInt(a);
    setOtp(a);
    toast({
      title: "Verification Reminder",
      description: `"${a} is your One-Time Password. Please do not share your OTP with anyone. Team Smart Store"`,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
    setInputOtp("");
  };

  const handleVerify = () => {
    if (inputOtp === "") {
      setMsg({ status: true, notice: "Please enter your OTP!" });
    } else if (inputOtp == otp) {
      localStorage.setItem("phone", phoneNumber);
      // console.log("Sucess");
      navigate("/register");
    } else {
      setMsg({ status: true, notice: "Invalid OTP!" });
    }
  };

  return (
    <>
      {/* <Navbar/> */}
      {/* <Navlist /> */}
      {/* <Box ml="90%" mt="10px">
        <Button  colorScheme="blue">
          Admin Login
        </Button>
      </Box> */}
      <br />
      <br />
      <Box w="90%" m="auto" display="flex">
        <Image src="https://www.jiomart.com/msassets/images/login-banner.jpg" />
        <Box ml="200px" mt="100px">
          <Text fontSize="27px" fontWeight="bold">
            Sign in
          </Text>
          <Text fontSize={18} color={"rgb(112,117,121)"}>
            Sign in to access your Orders, Offers and Wishlist.
          </Text>
          <br />

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
                <Button
                  bg="white"
                  size="xs"
                  color="crimson"
                  onClick={handleNumberChange}
                >
                  Change
                </Button>
              </InputRightElement>
            )}
          </InputGroup>

          {!otpRequestSend ? (
            <Box>
              {msg.status ? (
                <Text fontSize="xs" color="crimson">
                  {msg.notice}
                </Text>
              ) : null}
            </Box>
          ) : (
            <Box>
              <InputGroup>
                <Input
                  mt={"10px"}
                  mb={"10px"}
                  placeholder="Enter your OTP"
                  value={inputOtp}
                  onChange={(e) => setInputOtp(e.target.value)}
                />

                <InputRightElement width="4.5rem" mt={3}>
                  <Button
                    bg="white"
                    size="xs"
                    color="crimson"
                    onClick={() => handleVerify(otp, inputOtp)}
                  >
                    Verify
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button
                fontSize={"13px"}
                color="#e23911"
                boder="0"
                bg="white"
                onClick={resetOtp}
              >
                Resend OTP
              </Button>
              {msg.status ? (
                <Text fontSize="xs" color="crimson">
                  {msg.notice}
                </Text>
              ) : null}
            </Box>
          )}

          <Box mt={"10"} pl={"65%"}>
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
    </>
  );
}
