import './App.css';
import Home from './Component/Home';
import IndivisualPage from './Pages/IndivisualPage';


import Nav from './Pages/Navbar';
import Navbar from './Pages/IndivisualPage'
import AllRoutes from './Routes/AllRoutes';
import Footer from './Pages/footer';
localStorage.getItem("otp",JSON.stringify())
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home/> */}
      <AllRoutes />
      {/* <Footer/> */}
      {/* <IndivisualPage /> */}
      {/* <Navbar /> */}
    </div>
  );
}

export default App;

