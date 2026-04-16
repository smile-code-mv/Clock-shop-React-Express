//npm
import logo from './logo-clock-white.svg';
import logo_orange from './logo-clock-orange.svg';
import { useEffect, useState } from "react";
import './App.css';

const Header = () => {
  return (
    <nav>
      <img id="logo" src={logo} />
      <div id='right'>
        <img src={logo_orange} id='home' class='icons' href='/' />
        {/* home ^ */}
        <button className="icons">
          <img src={logo_orange} alt="home" />
        </button>
        <button className="icons">
          <img src={logo_orange} alt="profile" />
        </button>
        <button className="icons">
          <img src={logo_orange} alt="seach" />
        </button>
        <button className="icons">
          <img src={logo_orange} alt="cart" />
        </button>
      </div>
    </nav>
  );
}
const Main = () => {
  return (
    <main>
      <h2>Produkty</h2>

      {products.map(p => (
        <div key={p.id}>
          {p.name} - {p.price} zł
        </div>
      ))}
    </main>
  )
}
const Footer = () => {
  return (
    <footer>
      
    </footer>
  )
}

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;