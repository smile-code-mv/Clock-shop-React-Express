//npm
import logo from './icons/logo_clock_white.svg';
import homeIcon from './icons/home.svg'
import productsIcon from './icons/bag.svg'
import cartIcon from './icons/cart.svg'
import seachIcon from './icons/seach.svg'
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Profile from "./components/Profile"
import './App.css';

let userIcon = "profile.svg";
const profileIcon = require(`./icons/${userIcon}`);

const Header = () => {
  const [selected, setSelected] = useState("home");

  let isOpen = false;

  const toggleSeach = () => {
    const input = document.getElementById('seachInput')

    if (!input) return;

    if (!isOpen) {
      input.className = 'grow';
      isOpen = true
    } else {
      input.className = '';
      isOpen = false
    }
  };
  return (
    <header>
      <img id="logo" src={logo} />
      <div id='centreHeader'>
        <NavLink to="/" className='navLink navButton'>
          <img src={homeIcon} className="icons" alt="home" />
        </NavLink>
        <NavLink to="/products" className='navLink navButton'>
          <img src={productsIcon} className="icons" alt="products" />
        </NavLink>
        <NavLink to={"/cart"} className='navLink navButton'>
          <img src={cartIcon} className="icons" alt="cart" />
        </NavLink>
        <button onClick={toggleSeach} className='navButton' id='seachButton'>
          <img src={seachIcon} className="icons" alt="seach" />
        </button>
      </div>
      <input type='seach' id='seachInput' className='navLink navButton'></input>
      <NavLink to="/profile" id='profileHeader' className='navLink navButton'>
        <img src={profileIcon} id='profileIcon' className="icons" alt="profile" />
      </NavLink>
    </header>
  );
}

const Footer = () => {
  return (
    <footer></footer>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;