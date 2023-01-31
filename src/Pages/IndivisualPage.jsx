import React, { useEffect, useState } from "react";
import "./indivisualPage.css";
import { BsFillBagPlusFill } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Show, Hide, Center, useToast } from "@chakra-ui/react";
import { AddToCart } from "../redux/Cart/action";
import { useDispatch } from "react-redux";

const CurrentIndivisualData = (payload) => {
  return axios.put(
    "https://kiwi-discovered-pyjama.glitch.me/indivisualPageData",
    payload
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 564 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 563, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const getData = () => {
  return axios.get(
    "https://kiwi-discovered-pyjama.glitch.me/indivisualPageData"
  );
};

const getCarouselData = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/carousel_idvPage");
};

// const AddToCart = (payload) => {
//   return axios.post("https://kiwi-discovered-pyjama.glitch.me/cart", payload);
// };

const IndivisualPage = () => {
  const [description, setDescription] = useState(false);
  const [data, setData] = useState({});
  const [imgList, setImgList] = useState([]);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleCurrentData = (item) => {

    CurrentIndivisualData(item).then((res) =>

      handleGetdata()
    );
  };

  const handleGetdata = () => {
    getData().then((res) => {
      setData(res.data);
    });
    getCarouselData().then((res) => setImgList(res.data));
  };

  const PostToCart = (item) => {
    dispatch(AddToCart(item));
    toast({
      title: "Verification Reminder",
      description: `"Item Added To Cart Successfully."`,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  useEffect(() => {
    handleGetdata();
  }, []);

  return (
    <div className="indivisualPage">
      <div className="topSection">
        <div className="left-img">
          <div className="left-carousel">
            <img
              style={{ width: "90%" }}
              src={data.image || data.imgSrc}
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src={data.image || data.imgSrc}
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src={data.image || data.imgSrc}
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src={data.image || data.imgSrc}
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src={data.image || data.imgSrc}
              alt="demo1"
            />
          </div>
          <div className="right-main">
            <img
              style={{ width: "90%" }}
              src={data.image || data.imgSrc}
              alt={data.title || data.name}
            />
          </div>
        </div>

        <div className="right-data">
          <Hide below="sm">
            <h3 className="product__name space_top_bottom ">
              {data.title || data.name}
            </h3>
          </Hide>
          <Show below="sm">{data.title || data.name}</Show>

          <h4 className="product__name-light space_top_bottom">FINISH</h4>

          <span className="crossedLine space_top_bottom">₹ 1599.00</span>

          <b className="space_Between">Price : ₹ {data.price} </b>
          <p className="space_top_bottom">
            <span>
              You Save: ₹ <b className="green__text space_Between">833.00</b>
            </span>
            <span>Inclusive of all taxes</span>
          </p>
          <p className="space_top_bottom">
            <b>Sold by</b>{" "}
            <b className="blue_text">O-KARMICA WELLNESS PRIVATE LIMITED</b>
          </p>
          <p className="space_top_bottom">
            Inaugural Offer <b>Free Shipping</b>
          </p>
          <button
            onClick={() => {
              PostToCart(data);
            }}
            className="space_top_bottom btn cart-btn"
          >
            <span>Add to Cart</span>
            <BsFillBagPlusFill style={{ width: "40px" }} />
          </button>
          <div className="social__links space_top_bottom">
            <a href="https://twitter.com/i/flow/login" target="_blank">
              <CiTwitter style={{ width: "40px" }} />
            </a>
            <a href="https://www.whatsapp.com/" target="_blank">
              <BsWhatsapp style={{ width: "40px" }} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <AiOutlineFacebook style={{ width: "40px" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="mid__section space_top_bottom space_Between">
        <h3 className="space_top_bottom">
          <b>Description</b>{" "}
          <a
            className="btn"
            onClick={() => setDescription(!description)}
            style={{ marginRight: "1re3" }}
          >
            {description ? "Show Less" : "Show More"}
          </a>
        </h3>
        <div className="visible">
          <h4>{data.title}</h4>
          <p>
            It has excellent emulsifying properties that give the fabric a
            brighter look. The particular safe bio enzymes based detergent
            formula delivers absolute cleansing for whites and your coloured
            clothes.
          </p>
        </div>
        {description && (
          <div className="invisible">
            <p className="smallSpace">
              It has added fabrics conditioners that soften the fabric and leave
              your clothes with a light fragrance. Its advanced nanotechnology
              helps faster stain removal in machines, and it penetrates clothes
              fibres much faster and removes tough stains in the washing machine
              itself. Removes tough soiling and accumulated yellowish layer on
              the clothes to prevent fast ageing.
            </p>
            <p className="smallSpace">
              <b>Stain Removal: </b>Zimmer Aufraumen power Laundry Liquid
              Detergent’s advanced nanotechnology helps faster stain removal in
              machines; it penetrates clothes fibres much faster and removes
              tough stains in the machine itself.
            </p>
            <p className="smallSpace">
              <b>Colour Care: </b> Although its fast action removes tough stains
              in machines but retains the original colour of the fabric.
            </p>
            <p className="smallSpace">
              <b>Fresh Fragrance: </b>the mild natural fragrance boosters
              ensures that your clothes look not only fresh but also smell fresh
              rather smell of chemical.
            </p>
            <p className="smallSpace">
              <b>The softness of Clothes: </b>added fabric conditioner protects
              the fibre of clothes and ensures softness of the clothes is
              maintained along with cleaning
            </p>
            <p className="smallSpace">
              <b>Saves Water: </b>Our High performing, the low foaming formula
              helps use lesser water per a load of laundry, thereby saving at
              least 50*365 = 18250 litres of water per year.
            </p>
          </div>
        )}
      </div>
      <h3>
        <b>You May Also Like</b>
      </h3>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        className="visible"
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {imgList &&
          imgList?.map((item) => {
            return (
              <div key={item.id} className="smallSpace idvCarousel">
                <img
                  className="smallSpace"
                  src={item.imgSrc}
                  alt="img"
                  onClick={() => {
                    handleCurrentData(item);
                  }}
                />
                <p className="smallSpace">
                  <b>{item.title}</b>
                </p>
                <p className="smallSpace">
                  <b>₹ {item.price}</b>
                </p>
                <p className="smallSpace">
                  M.R.P :<span className="crossedLine">{item.mrp}</span>
                </p>
                <button className="btn cart-btn">
                  <span>Add To Cart</span>
                  <BsFillBagPlusFill />
                </button>
              </div>
            );
          })}
      </Carousel>
      ;
    </div>
  );
};

export default IndivisualPage;
