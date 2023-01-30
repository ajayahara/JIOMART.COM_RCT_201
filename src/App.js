import "./App.css";

import Home from "./Component/Home";
import Nav from './Pages/Navbar';
import Navbar from './Pages/IndivisualPage'
import AllRoutes from './Routes/AllRoutes';
import Footer from './Component/FooterPuneet'
function App() {
  return (
    <div className="App">
      <Nav />
      <AllRoutes />
      <Footer />
    </div>
  );
}


export default App;
