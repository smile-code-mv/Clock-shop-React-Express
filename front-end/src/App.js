//npm
import logo from './logo-clock-white.svg';
import logo_orange from './logo-clock-orange.svg';
import seach from './seach.svg'
import useState from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Products from "./Products"
import Home from "./Home"
import './App.css';

const Header = () => {
  let isOpen = false;

  const toggleSeach = () => {
    const input = document.getElementById('seachInput');
    const centre = document.getElementById('centreHeader');

    if (!input || !centre) return;

    if (!isOpen) {
      centre.className = 'moveIn';
      input.className = 'grow';
      isOpen = true;
    } else {
      centre.className = 'moveOut';
      input.className = 'shrink';
      isOpen = false;
    }
  };
  return (
    <nav>
      <img id="logo" src={logo} />
      <div id='centreHeader'>
        <NavLink to="/" className='navButton'>
          <img src={logo_orange} className="icons" alt="home" />
        </NavLink>
        <NavLink to="/products" className='navButton'>
          <img src={logo_orange} className="icons" alt="products" />
        </NavLink>
        <NavLink className='navButton'>
          <img src={logo_orange} className="icons" alt="cart" />
        </NavLink>
        <button onClick={toggleSeach} className='navButton' id='seachButton'>
          <img src={seach} className="icons" alt="seach" />
        </button>
      </div>
      <input type='seach' id='seachInput'></input>
      <NavLink to="/profile" id='rightHeader' className='navButton'>
        <img src={logo_orange} className="icons" alt="profile" />
      </NavLink>
    </nav>
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