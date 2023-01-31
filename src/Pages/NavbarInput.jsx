import React from "react"
import {Input} from "@chakra-ui/react"
const {useState, useEffect} = React;

const placeholderText = ["Medicine", "Shampoo", "Health Drink"];

const Test = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = () => {
      setIndex(prevIndex => {
        if(prevIndex === placeholderText.length - 1){
          return 0;
        } 
        return prevIndex + 1;
      })
    };
    setInterval(timer, 2000);

    return () => { clearInterval(timer); }
  }, []);


  
  
  return (
    <Input  style={{textIndent:"25px"}}type='Search' placeholder={`Search For ${placeholderText[index]}`}  w={"600px"} position={"relative"} pr={"160px"}/>
  )
}
export default Test
