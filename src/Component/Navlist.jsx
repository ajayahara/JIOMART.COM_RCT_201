import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Navlist = () => {
  const navigate = useNavigate();
  return (
    <Box className="navlist" >
      <ul>
        <li style={{zIndex:1000}}>
          Groceries
          <ChevronDownIcon />
          <ul className="dropdown">
            <li onClick={() => navigate("/fruitsAndVegetables")}>
              Fruits & Vegetables
            </li>
            <li>Dairy & Bakery</li>
            <li>Staples</li>
            <li>Snacks & Branded foods</li>
            <li onClick={() => navigate("/beverages")}>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li onClick={() => navigate("/electronicProducts")}> Beauty</li>
          </ul>
        </li>
        <li style={{zIndex:1000}}>
          Premium Fruits
          <ChevronDownIcon />
          <ul className="dropdown">
            <li >
              Apples & Peers
            </li>
            <li>Avocado, Peach, Plum</li>
            <li>Banana,Melons & Coconut</li>
            <li>Dates</li>
            <li>Citrus, Mangoes & Graps</li>
            <li>Cherries, Berries</li>
            <li>Exotic Fruits</li>
            <li>Seasonal & Minor Fruits</li>
          </ul>
        </li>
        <li style={{zIndex:1000}}>
          Home & Kitchen
          <ChevronDownIcon />
          <ul className="dropdown">
            <li >Kitchenware</li>
            <li>Dining</li>
            <li onClick={() => navigate("/electronicProducts")}>Electricals</li>
            <li>Furniture</li>
            <li>Home Appliances</li>
            <li>Toys & Games</li>
            <li>Disposable</li>
            <li>Stationary</li>
            <li>Garden</li>
            <li>Pooja Needs</li>
          </ul>
        </li>
        <li style={{zIndex:1000}}>
          <Link>
            Fashion
            <ChevronDownIcon />
            <ul className="dropdown">
              <li>Mens</li>
              <li>Womens</li>
              <li>Boys</li>
              <li>Girls</li>
              <li>Junior Boys</li>
              <li>Infant</li>
            </ul>
          </Link>
        </li>
        <li style={{zIndex:1000}}>
          <Link>
            Electronics
            <ChevronDownIcon />
            <ul className="dropdown">
              <li>Mobiles & Tablets</li>
              <li>TV & speakers</li>
              <li>Home Appliance</li>
              <li>Camera</li>
              <li>Kitchen Appliance</li>
              <li>Smart Devices</li>
              <li>Phones</li>
              <li>Office Products</li>
              <li>Electronic Musical Instruments</li>
            </ul>
          </Link>
        </li>
        <li style={{zIndex:1000}}>
          <Link>
            Beauty
            <ChevronDownIcon />
            <ul className="dropdown">
              <li>Make Up</li>
              <li>Skincare</li>
              <li>Personal Care</li>
              <li>Fragrances</li>
              <li>Mom & Baby</li>
              <li>Mens Grooming</li>
              <li>Wellness</li>
            </ul>
          </Link>
        </li>
        <li style={{zIndex:1000}}>
          Jewellery
          <ChevronDownIcon />
          <ul className="dropdown">
            <li>Fine Jwellery </li>
            <li>Jwellery</li>
          </ul>
        </li>
      </ul>
    </Box>
  );
};
export default Navlist;
