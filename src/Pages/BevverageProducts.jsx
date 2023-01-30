import React, { useEffect} from "react";
import "./products.css";
import axios from "axios";
import { BsFillBagPlusFill } from "react-icons/bs";
import {  Center, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import Load from "../Resources/Seen.gif"
import { useSelector, useDispatch } from "react-redux";

import { AddToCart } from "../redux/Cart/action";

import {
  getBeverageError,
  getBeverageRequest,
  getBeverageSuccess,
} from "../redux/beverage/action";
const CurrentIndivisualData = (payload) => {
  return axios.put(
    "https://kiwi-discovered-pyjama.glitch.me/indivisualPageData",
    payload
  );
};

const getData = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/baverage");
};

const sortDataByAsc = () => {
  return axios.get(
    "https://kiwi-discovered-pyjama.glitch.me/baverage?_sort=price&_order=asc"
  );
};

const sortDataByDesc = () => {
  return axios.get(
    "https://kiwi-discovered-pyjama.glitch.me/baverage?_sort=price&_order=desc"
  );
};

const filterByCategory = (param) => {
  return axios.get(
    `https://kiwi-discovered-pyjama.glitch.me/baverage?category=${param}`
  );
};

const BeverageProducts = () => {
 
  const list = useSelector((store) => store.BeverageReducer.list);
  const isLoading = useSelector((store) => store.BeverageReducer.isLoading);
  const filterData = useSelector((store) => store.BeverageReducer.filterData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleGetData = () => {
    dispatch(getBeverageRequest());
    getData()
      .then((res) => {
        dispatch(getBeverageSuccess(res.data));
      })
      .catch((err) => dispatch(getBeverageError()));
  };

  const handleSortByAsc = () => {
    dispatch(getBeverageRequest());
    sortDataByAsc().then((res) => {
      dispatch(getBeverageSuccess(res.data));
    });
  };

  const handlesortByDesc = () => {
    dispatch(getBeverageRequest());
    sortDataByDesc().then((res) => {
      dispatch(getBeverageSuccess(res.data));
    });
  };

  const handleFilterData = (item) => {
    dispatch(getBeverageRequest());
    filterByCategory(item).then((res) =>
      dispatch(getBeverageSuccess(res.data))
    );
  };

  const resetFilters = () => {
    handleGetData();
  };

  const PostToCart = (item) => {
      dispatch(AddToCart(item))
      toast({
        title: "Verification Reminder",
        description: `"Item Added To Cart Successfully."`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
  };

  const handleCurrentData = (item) => {
    CurrentIndivisualData(item).then((res) =>
      navigate("/indivisualPage")
    );
  };
  useEffect(() => {
    handleGetData();
  }, []);
  console.log(list)
  if (isLoading) return <Center m="150px"> <img width={"350px"} src={Load} ></img></Center>;
  return (
    <div className="productPage">
      <div className="options">
        <h3>Sort Data By: </h3>
        <button
          className="btn"
          style={{ textAlign: "center" }}
          onClick={() => {
            handleSortByAsc();
          }}
        >
          Ascending
        </button>
        <button
          className="btn"
          style={{ textAlign: "center" }}
          onClick={() => {
            handlesortByDesc();
          }}
        >
          Descending
        </button>
        <h3>Filter Data by category :</h3>
        {filterData.map((item, index) => (
          <button
            className="btn"
            key={index}
            onClick={() => handleFilterData(item)}
          >
            {item}
          </button>
        ))}
        <h3>Reset :</h3>
      
        <button
          className="btn"
          style={{ textAlign: "center" }}
          onClick={() => {
            resetFilters();
          }}
        >
          Reset Filters
        </button>
      </div>
      <div className="products">
        {list &&
          list?.map((item, index) => {
            return (
              <div key={index} className="singleProduct">
                <img
                  src={item.image}
                  alt={item.name}
                  onClick={() => {
                    handleCurrentData(item);
                  }}
                />
                <h3>{item.name}</h3>
                <p>M.R.P : ₹ {item.price}</p>
                <button
                  className="btn cart-btn pos"
                  onClick={() => {
                    PostToCart(item);
                  }}
                >
                  <span>Add to cart</span> <BsFillBagPlusFill />
                </button>
              </div>
            );
          })}
      </div>
      <div></div>
    </div>
  );
};

export default BeverageProducts;
