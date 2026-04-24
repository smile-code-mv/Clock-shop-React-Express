//npm
import logo from './icons/logo_clock_white.svg';
import logo_orange from './icons/logo-clock-orange.svg';
import homeIcon from './icons/home.svg'
import productsIcon from './icons/bag.svg'
import cartIcon from './icons/cart.svg'
import seachIcon from './icons/seach.svg'
import profileIcon from './icons/profile.svg'
import useState from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Products from "./components/Products"
import Home from "./components/Home"
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
          <img src={homeIcon} className="icons" alt="home" />
        </NavLink>
        <NavLink to="/products" className='navButton'>
          <img src={productsIcon} className="icons" alt="products" />
        </NavLink>
        <NavLink className='navButton'>
          <img src={cartIcon} className="icons" alt="cart" />
        </NavLink>
        <button onClick={toggleSeach} className='navButton' id='seachButton'>
          <img src={seachIcon} className="icons" alt="seach" />
        </button>
      </div>
      <input type='seach' id='seachInput' className='navButton'></input>
      <NavLink to="/profile" id='profileHeader' className='navButton'>
        <img src={profileIcon} id='profileIcon' className="icons" alt="profile" />
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