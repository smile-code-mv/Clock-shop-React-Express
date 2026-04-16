import logo from './logo-clock-white.svg';
import logo_orange from './logo-clock-orange.svg';
import React from 'react';
import './App.css';

const Header = () => {
  return (
    <nav>
      <img id="logo" src={logo} />
      <div id='right'>
        <img src={logo_orange} id='home' class='icons' href='/'/>
        {/* home ^ */}
        <img src={logo_orange} id='shop' class='icons'/>
        <img src={logo_orange} id='profile' class='icons' href='/profile'/>
        <img src={logo_orange} id='seach' class='icons'/>
        <img src={logo_orange} id='cart' class='icons'/>
      </div>
    </nav>
  );
}
const Main = () => {
  return(
    <main>

    </main>
  )
}
const Footer = () => {
  return(
    <footer>

    </footer>
  )
}

const App = () => {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;