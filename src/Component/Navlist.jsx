import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Styles.css";

const Navlist = () => {
  return (
    <div className="navlist">
      <ul>
        <li>
          Groceries
          <ChevronDownIcon />
          <Link >
            <ul className='dropdown'>
              <li>Fruits & Vegetables</li>
              <li>Dairy & Bakery</li>
              <li>Staples</li>
              <li>Snacks & Branded foods</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Beauty</li>
            </ul>
          </Link>
        </li>
        <li>
          <Link >
            Premium Fruits
            <ChevronDownIcon />
            <ul className="dropdown">
              <li>Apples & Peers</li>
              <li>Avocado, Peach, Plum</li>
              <li>Banana,Melons & Coconut</li>
              <li>Dates</li>
              <li>Citrus, Mangoes & Graps</li>
              <li>Cherries, Berries</li>
              <li>Exotic Fruits</li>
              <li>Seasonal & Minor Fruits</li>
            </ul>
          </Link>
        </li>
        <li>
          <Link >
            Home & Kitchen
            <ChevronDownIcon />
            <ul className="dropdown">
              <li>Kitchenware</li>
              <li>Dining</li>
              <li>Electricals</li>
              <li>Furniture</li>
              <li>Home Appliances</li>
              <li>Toys & Games</li>
              <li>Disposable</li>
              <li>Stationary</li>
              <li>Garden</li>
              <li>Pooja Needs</li>
            </ul>
          </Link>
        </li>
        <li>
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
        <li>
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
        <li>
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
        <li>
          Jewellery
          <ChevronDownIcon />
          <ul className="dropdown">
            <li>Fine Jwellery </li>
            <li>Jwellery</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default Navlist;
