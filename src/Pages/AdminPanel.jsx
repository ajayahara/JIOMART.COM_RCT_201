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
          <Input ref={image} type="url" placeholder="Enter Image URL here..." />
          <SimpleGrid columns={[1, 1, 2, 2]}>
            <Button onClick={addToServer} color={"white"} bg={"#008ecc"}>
              {" "}
              ADD
            </Button>
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
                key={index}
              >
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
