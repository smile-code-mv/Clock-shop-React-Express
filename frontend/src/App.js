//npm
import logo from './logo-clock-white.svg';
import logo_orange from './logo-clock-orange.svg';
import seachImg from './seach.svg'
import homeImg from './home.svg'
import useState from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Products from "./Products"
import Home from "./Home"
import './App.css';

const Header = () => {
  let isOpen = false;

  const toggleSeach = () => {
    const input = document.getElementById('seachInput')

    if (!input) return;

    if (!isOpen) {
      input.className = 'grow';
      isOpen = true
    } else {
      input.className = 'shrink';
      isOpen = false
    }
  };
  return (
    <header>
      <img id="logo" src={logo} />
      <div id='centreHeader'>
        <NavLink to="/" className='navButton'>
          <img src={homeImg} className="icons" alt="home" />
        </NavLink>
        <NavLink to="/products" className='navButton'>
          <img src={logo_orange} className="icons" alt="products" />
        </NavLink>
        <NavLink className='navButton'>
          <img src={logo_orange} className="icons" alt="cart" />
        </NavLink>
        <button onClick={toggleSeach} className='navButton' id='seachButton'>
          <img src={seachImg} className="icons" alt="seach" />
        </button>
      </div>
      <input type='seach' id='seachInput' className='navButton'></input>
      <NavLink to="/profile" id='rightHeader' className='navButton'>
        <img src={logo_orange} className="icons" alt="profile" />
      </NavLink>
    </header>
  );
}
const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
    </Routes>
  )
}
const Footer = () => {
  return (
    <footer>

    </footer>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;