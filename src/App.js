import './App.css';
<<<<<<< HEAD
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
=======
import Login from './Pages/login';
function App() {
  return (
    <div className="App">
      <Login />
>>>>>>> ce307e228988c4c58ff3826e6fc1196355796119
    </div>
  );
}

export default App;

