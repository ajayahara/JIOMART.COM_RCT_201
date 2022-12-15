import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SidebarData  from './SidebarData';
import SidebarData2  from './SidebarData2';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Box} from '@chakra-ui/react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Box className='navbar'>
            <Box className='sideup'>
               
          <Box  className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
            </Box>
          </Box>
        </Box>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <div className='navbar-toggle'>
            <div className='menu-bars2'>
            <div id="closeicon">
             
           <div id="inline">
            <p id="contact-icon"><AccountCircleOutlinedIcon/></p>
            <p id="contact-text"> Hello,  Sign in
            </p>
            <p id="contact-cross"> <AiIcons.AiOutlineClose />
            </p>
               
                </div>
            </div>
            </div>
                <div className='sidebuttons'>
               <button className='sidebuttonss'>Accounts</button>
               <button className='sidebuttonss'>Orders</button>
               </div> 
            </div>
            
            <div>
             {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  
                    {item.icon}
                    <span>{item.title}</span>
                 
                </li>
              ); 
              })}
              <br />
              <hr />
              {SidebarData2.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  
                    {item.icon}
                    <span>{item.title}</span>
                 
                </li>
              ); 
              })}
               <br />
              <hr />
              <div id="side-cont">
              <h3>CONTACT US</h3>
              <p>WhatsApp us : 70003 70003</p>
              <p>Call Us : 1800 890 1222</p>
              <p>8:00 AM to 8:00 PM, 365 days</p>
              <p>Please note that you are accessing the BETA Version of www.jiomart.com</p>
              <p>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on cs@jiomart.com</p>
              
              <h3>DOWNLOAD APP</h3>
              <div id="dwnld-img">
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              </div>
              </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

