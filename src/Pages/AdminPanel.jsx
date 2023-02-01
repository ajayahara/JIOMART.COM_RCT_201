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
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const getData = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/imagesslider");
};

const getBeverageData = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/baverage");
};

const getELectronics = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/electronics");
};

const getFruitsAndVegetables = () => {
  return axios.get(
    "https://kiwi-discovered-pyjama.glitch.me/fruitsAndVegetables"
  );
};

const postBeverage = (payload) => {
  return axios.post(
    "https://kiwi-discovered-pyjama.glitch.me/baverage",
    payload
  );
};

const PostELectronics = (payload) => {
  return axios.post(
    "https://kiwi-discovered-pyjama.glitch.me/electronics",
    payload
  );
};
const postFruitsAndVegetables = (payload) => {
  return axios.post(
    "https://kiwi-discovered-pyjama.glitch.me/fruitsAndVegetables",
    payload
  );
};

const Adminpanel = () => {
  const image = useRef();
  const price = useRef();
  const toast = useToast();
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const statuses = ["success", "error"];
  const [list, setList] = useState([]);

  const handleget = () => {
    if (type === "fruitsAndVegetables") {
      getFruitsAndVegetables().then((res) => {
        setList(res.data);
      });
    } else if (type === "electronics") {
      getELectronics().then((res) => {
        setList(res.data);
      });
    } else if (type === "beverages") {
      getBeverageData().then((res) => {
        setList(res.data);
      });
    } else {
      getData().then((res) => setList(res.data));
    }
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

  // console.log(list);
  const addToServer = async() => {
    if (type === "fruitsAndVegetables") {
      try{
        const payload = {
          image:image.current.value,
          name,
          productPrice,
        };
        postFruitsAndVegetables(payload).then((res) => {
          handleget();
        });
      }catch(err){
        console.log(err);
      }
    } else if (type === "electronics") {
      try{
        const payload = {
          image:image.current.value,
          name,
          productPrice,
        };
        PostELectronics(payload).then((res) => {
          handleget();
        });
      }catch(err){
        console.log(err);
      }
    } else if (type === "beverages") {
      try{
        const payload = {
          image:image.current.value,
          name,
          productPrice,
        };
        postBeverage(payload).then((res) => {
          handleget();
        });
      }catch(err){
        console.log(err);
      }
    } else {
      try{
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
      }catch(err){
        console.log(err);
      }
    }
  };

  useEffect(() => {
    handleget();
  }, [type]);
  return (
    <Flex p="1rem" justifyContent="space-between">
      <Box
        className="categories__"
        h="100vh"
        w="15%"
        borderRight="2px solid grey"
      >
        <Box
          style={{ borderBottom: "1px solid grey", padding: "10px 25px" }}
          _hover={{
            backgroundColor: "rgb(14, 187, 255)",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setType("")}
        >
          Crousel
        </Box>
        <Box
          style={{ borderBottom: "1px solid grey", padding: "10px 25px" }}
          _hover={{
            backgroundColor: "rgb(14, 187, 255)",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setType("fruitsAndVegetables")}
        >
          Fruits And Vegetables
        </Box>
        <Box
          style={{ borderBottom: "1px solid grey", padding: "10px 25px" }}
          _hover={{
            backgroundColor: "rgb(14, 187, 255)",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setType("electronics")}
        >
          ELectronics
        </Box>
        <Box
          style={{ borderBottom: "1px solid grey", padding: "10px 25px" }}
          _hover={{
            backgroundColor: "rgb(14, 187, 255)",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setType("beverages")}
        >
          Beverages
        </Box>
      </Box>
      <Box className="input__">
        <Center>
          <SimpleGrid columns={1} gap={"10px"} w={"500px"} mt={"40px"}>
            {type === "" ? (
              <Box>
                {" "}
                <Input
                  ref={image}
                  type="url"
                  placeholder="Enter Image URL here..."
                />
                <SimpleGrid columns={[1, 1, 2, 2]}>
                  <Button onClick={addToServer} color={"white"} bg={"#008ecc"}>
                    {" "}
                    ADD
                  </Button>
                </SimpleGrid>
              </Box>
            ) : (
              <Box>
                <Input
                  ref={image}
                  type="url"
                  placeholder="Enter Image URL here..."
                />
                <Input
                  type="number"
                  onChange={(e) => setProductPrice(e.target.value)}
                  placeholder="Enter Price"
                />
                <Input
                  type="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                />
                <SimpleGrid columns={[1, 1, 2, 2]}>
                  <Button onClick={addToServer} color={"white"} bg={"#008ecc"}>
                    {" "}
                    ADD
                  </Button>
                </SimpleGrid>
              </Box>
            )}
          </SimpleGrid>
        </Center>
      </Box>
      <Box className="display__">
        <Heading as="h3" textAlign="center" fontSize="large" mb="1.5rem">
          Data Count : {list.length}
        </Heading>
        <Box
          style={{
            width: "300px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
            gap: "2rem",
          }}
        >
          {list &&
            list.map((item, index) => (
              <Box key={index}>
                <Image width="80px" src={item.img || item.image} />
                {item.name && <Text>{item.name}</Text>}
                {item.price && <Text>₹ {item.price}</Text>}

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

      <Box mt="2.5rem"></Box>
    </Flex>
  );
};
export default Adminpanel;
