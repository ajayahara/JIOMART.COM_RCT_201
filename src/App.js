
import './App.css';
import Home from './Component/Home';
import Footer from './Pages/footer';

import Nav from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
