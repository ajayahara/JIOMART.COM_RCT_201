import './App.css';

import Home from './Component/Home';



import Nav from './Pages/Navbar';
import Navbar from './Pages/IndivisualPage'
import AllRoutes from './Routes/AllRoutes';
import Footer from './Pages/footer';
import Login from './Pages/login';
import { Address } from './Pages/Cart/Address';
import {CartLoginItems} from "./Pages/Cart/CartLoginItems"
function App() {
  return (
    <div className="App">
      {/* <Nav />
      <AllRoutes />
      <Footer /> */}
      {/* <Address/> */}
      <CartLoginItems/>
    </div>
  );
}

export default App;

