 import {useEffect,useState} from "react";
 const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    fetch("/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
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
};
 export default Products;