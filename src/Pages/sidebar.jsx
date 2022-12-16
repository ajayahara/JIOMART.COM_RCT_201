import React from 'react'
import * as AiIcons from 'react-icons/ai';
import { Box,Flex,Image} from '@chakra-ui/react';
import './Navbar.css';

import SidebarData  from './SidebarData';
import SidebarData2  from './SidebarData2';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import app from "../Resources/app.png"
import play from "../Resources/play.png"
const Sidebar = ({sidebar,showSidebar}) => {
    
  return (
    <div>
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
              <h3 style={{fontWeight:800}}>CONTACT US</h3>
              <p>WhatsApp us : 70003 70003</p>
              <p>Call Us : 1800 890 1222</p>
              <p>8:00 AM to 8:00 PM, 365 days</p>
              <p>Please note that you are accessing the BETA Version of www.jiomart.com</p>
              <p>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on cs@jiomart.com</p>
              
              <h3 style={{fontWeight:800}}>DOWNLOAD APP</h3>
              <Flex w={"300px"}>
                <Image  w={"130px"} mt={"-40px"}src={play}/>
                <Image  w={"130px"} mt={"-40px"}src={app}/>
            </Flex>
              </div>
              </div>
             
          </ul>
          
        </nav>
    </div>
  )
}

export default Sidebar