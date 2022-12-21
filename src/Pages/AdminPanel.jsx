import {
  Center,
  Input,
  SimpleGrid,
  Button,
  useToast,
  Box,
  Heading,
  Text,
  Image,
  grid,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const getData = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/imagesslider");
};

const Adminpanel = () => {
  const id = useRef();
  const title = useRef();
  const image = useRef();
  const price = useRef();
  const toast = useToast();
  const statuses = ["success", "error"];
  const [list, setList] = useState([]);

  const handleget = () => {
    getData().then((res) => setList(res.data));
  };

  const deleteFromServer = (id) => {
    axios
      .delete(`https://kiwi-discovered-pyjama.glitch.me/imagesslider/${id}`)
      .then(() => {
        toast({
          title: `Sucessfully Deleted`,
          status: statuses[0],
          isClosable: true,
        });
        handleget();
      })
      .catch(() => {
        toast({
          title: `Error Occured while Deleting`,
          status: statuses[1],
          isClosable: true,
        });
      });
  };
  const addToServer = () => {
    let product = {
      img: image.current.value,
      //   title: title.current.value,
      //   price: price.current.value,
    };
    axios
      .post("https://kiwi-discovered-pyjama.glitch.me/imagesslider", product)
      .then(() => {
        toast({
          title: `Sucessfully Added`,
          status: statuses[0],
          isClosable: true,
        });
        handleget();
      })
      .catch(() => {
        toast({
          title: `Error Occured while Adding`,
          status: statuses[1],
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    handleget();
  }, []);
  return (
    <Box p="1rem">
      <Center>
        <SimpleGrid columns={1} gap={"10px"} w={"500px"} mt={"40px"}>
          {/* <Input ref={id} type="text" placeholder="Enter Product ID here...." /> */}
          {/* <Input
            ref={title}
            type="text"
            placeholder="Enter Product Name here...."
          /> */}
          <Input ref={image} type="url" placeholder="Enter Image URL here..." />
          {/* <Input ref={price} type="number" placeholder="Enter Price here..." /> */}
          <SimpleGrid columns={[1, 1, 2, 2]}>
            <Button onClick={addToServer} color={"white"} bg={"#008ecc"}>
              {" "}
              ADD
            </Button>
            {/* <Button
              onClick={() => deleteFromServer(id.current.value)}
              color={"white"}
              bg={"red"}
            >
              {" "}
              DELETE
            </Button> */}
          </SimpleGrid>
        </SimpleGrid>
      </Center>
      <Box mt="2.5rem">
        <Heading as="h3" textAlign="center" fontSize="large" mb="1.5rem">
          Data Count : {list.length}
        </Heading>
        <Box
          style={{
            width: "300px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "2rem",
          }}
        >
          {list &&
            list.map((item, index) => (
              <Box
                //   w="100px"
                //   margin="auto"
                //   display="grid"
                //   border="1px solid black"
                key={index}
              >
                {/* deleteFromServer(item.id) */}
                <Image width="100%" src={item.img} />
                <Button
                  onClick={() => deleteFromServer(item.id)}
                  color={"white"}
                  bg={"red"}
                >
                  {" "}
                  DELETE
                </Button>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Adminpanel;
// Collapse
