import {Link }  from 'react-router-dom'
import {ChevronDownIcon} from '@chakra-ui/icons';
import  Styles  from "./Styles.module.css";

const Navlist =()=>{
    return (
        <div className={Styles.navlist}>
            <ul>
                <li>
                    Groceries
                    <ChevronDownIcon/>
                <Link to={`/products/fruitsNvegies`}>
                    <ul className={Styles.dropdown}>
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
                <Link to={`/products/fruitsNvegies`}>
                    Premium Fruits
                    <ChevronDownIcon/>
                    <ul className={Styles.dropdown}>
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
                <Link to={`/products/kitchenware`}>
                    Home & Kitchen
                    <ChevronDownIcon/>
                    <ul className={Styles.dropdown}>
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
                <Link to={`/products/mens`}>
                    Fashion
                    <ChevronDownIcon/>
                    <ul className={Styles.dropdown}>
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
                <Link to={`/products/Electronics`}>
                    Electronics
                    <ChevronDownIcon/>
                    <ul className={Styles.dropdown}>
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
                <Link to={`/products/makeup`}>

                    Beauty
                    <ChevronDownIcon/>
                    <ul className={Styles.dropdown}>
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
                    <ChevronDownIcon/>
                    <ul className={Styles.dropdown}>
                        <li>Fine Jwellery </li>
                        <li>Jwellery</li>
                    </ul>
                </li>
            </ul>
            
        </div>
    )
}
export default Navlist