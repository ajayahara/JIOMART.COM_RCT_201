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

const deleteBeverage = (id) => {
  return axios.delete(
    `https://kiwi-discovered-pyjama.glitch.me/baverage/${id}`
  );
};
const deleteFruitsAndVegetables = (id) => {
  return axios.delete(
    `https://kiwi-discovered-pyjama.glitch.me/fruitsAndVegetables/${id}`
  );
};
const deleteElectronics = (id) => {
  return axios.delete(
    `https://kiwi-discovered-pyjama.glitch.me/electronics/${id}`
  );
};

const updateBeverage = (id, payload) => {
  return axios({
    method:"patch",
    url:`https://kiwi-discovered-pyjama.glitch.me/baverage/${id}`,
    data:JSON.stringify(payload),
    headers:{
      'Content-type':"application/json"
    }
  })
};
const updateFruitsAndVegetables = (id, payload) => {
  return axios.patch(
    `https://kiwi-discovered-pyjama.glitch.me/fruitsAndVegetables/${id}`,
    { payload }
  );
};
const updateElectronics = (id, payload) => {
  return axios({
    method:"patch",
    url:`https://kiwi-discovered-pyjama.glitch.me/electronics/${id}`,
    data:JSON.stringify(payload),
    headers:{
      'Content-type':"application/json"
    }
  })
};

const Adminpanel = () => {
  const image = useRef();
  const price = useRef();
  const toast = useToast();
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [idCheck, setIdCheck] = useState(null);
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
    if (type === "fruitsAndVegetables") {
      try {
        deleteFruitsAndVegetables(id).then((res) => {
          handleget();
        });
      } catch (err) {
        console.log(err);
      }
    } else if (type === "electronics") {
      try {
        deleteElectronics(id).then((res) => {
          handleget();
        });
      } catch (err) {
        console.log(err);
      }
    } else if (type === "beverages") {
      try {
        deleteBeverage(id).then((res) => {
          handleget();
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        axios
          .post(`https://kiwi-discovered-pyjama.glitch.me/imagesslider/${id}`)
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
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log(list);
  const addToServer = async () => {
    if (type === "fruitsAndVegetables") {
      try {
        const payload = {
          image: image.current.value,
          name,
          price:productPrice,
        };
        postFruitsAndVegetables(payload).then((res) => {
          toast({
            title: `Sucessfully Added`,
            status: statuses[0],
            isClosable: true,
          });
          handleget();
          
        });
      } catch (err) {
        console.log(err);
      }
    } else if (type === "electronics") {
      try {
        const payload = {
          image: image.current.value,
          name,
          price: productPrice,
        };
        PostELectronics(payload).then((res) => {
          toast({
            title: `Sucessfully Added`,
            status: statuses[0],
            isClosable: true,
          });
          handleget();
        });
      } catch (err) {
        console.log(err);
      }
    } else if (type === "beverages") {
      try {
        const payload = {
          image: image.current.value,
          name,
          price:productPrice,
        };
        postBeverage(payload).then((res) => {
          toast({
            title: `Sucessfully Added`,
            status: statuses[0],
            isClosable: true,
          });
          handleget();
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let product = {
          img: image.current.value,
        };
        axios
          .post(
            "https://kiwi-discovered-pyjama.glitch.me/imagesslider",
            product
          )
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
      } catch (err) {
        toast({
          title: `Error Occured while Adding`,
          status: statuses[1],
          isClosable: true,
        });
        console.log(err);
      }
    }

    setName("");
    setProductPrice(0);
    image.current.value = "";
  };

  const handleUpdate = (id) => {
    if (type === "fruitsAndVegetables") {
      try {
        const payload = {
          image: image.current.value,
          name,
          price:productPrice,
        };
        updateFruitsAndVegetables(id, payload).then((res) => {
          toast({
            title: `Data Successfully updated`,
            status: statuses[0],
            isClosable: true,
          });
          handleget();
        });
      } catch (err) {
        console.log(err);
      }
    } else if (type === "electronics") {
      try {
        const payload = {
          image: image.current.value,
          name,
          price:productPrice,
        };
        updateElectronics(id, payload).then((res) => {
          toast({
            title: `Data Successfully updated`,
            status: statuses[0],
            isClosable: true,
          });
          handleget();
        });
      } catch (err) {
        console.log(err);
      }
    } else if (type === "beverages") {
      try {
        const payload = {
          image: image.current.value,
          name,
          price:productPrice,
        };
        updateBeverage(id, payload).then((res) => {
          toast({
            title: `Data Successfully updated`,
            status: statuses[0],
            isClosable: true,
          });
          handleget();
        });
      } catch (err) {
        console.log(err);
      }
    }
    setName("");
    setProductPrice(0);
    image.current.value = "";
    setIdCheck(null);
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
            <Heading>Input</Heading>
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
                  value={productPrice}
                />
                <Input
                  type="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  value={name}
                />
                <SimpleGrid columns={[1, 1, 2, 2]}>
                  <Button onClick={addToServer} color={"white"} bg={"#008ecc"}>
                    {" "}
                    ADD
                  </Button>
                </SimpleGrid>
                
              </Box>
            )}
            {idCheck && (
              <Box>
                <Heading> Update Data</Heading>
                <Input
                  ref={image}
                  type="url"
                  placeholder="Enter Image URL here..."
                />
                <Input
                  type="number"
                  onChange={(e) => setProductPrice(e.target.value)}
                  placeholder="Enter Price"
                  value={productPrice}
                />
                <Input
                  type="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  value={name}
                />
                <Button
                  onClick={() => {
                    handleUpdate(idCheck);
                  }}
                >
                  Update
                </Button>
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
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "2rem",
            padding: "2rem",
            borderLeft: "1px solid grey",
            justifyContent: "center",
            alignItems: "center",
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
                <Button onClick={() => setIdCheck(item.id)}>Update</Button>
              </Box>
            ))}
        </Box>
      </Box>

      <Box mt="2.5rem"></Box>
    </Flex>
  );
};
export default Adminpanel;
