import { useEffect, useState } from "react";
import "./LatestProducts.css";
import { Link } from "react-router-dom";
import AddProductButton from "../../AddProductButton/AddProductButton";

function LatestProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
    .then(response => response.json())
    .then(data => setProducts(data.products))
    .catch((error) => { throw new Error(error) })
  }, [])

  return (
    <div className="latest-products">
        <h2 className="title">Latest Products</h2>
        <div className="products">
        {products.map((product, index) => {
            return +product.id <= 8 && (
              <div key={index} className="product">
                <img src={product.image} alt={product.title}/>
                <div className="info">
                  <span>Brand: {product.brand}</span>
                  <span>Price: <span>{product.price}$</span></span>
                </div>
                <AddProductButton price={product.price}/>
                <Link to={`/product/${product.id}`} className="btn view">View Product</Link>
              </div>
            ) 
          })}
        </div>
        <Link to="/all-products" className="btn">View All Products</Link>
    </div>
  )
}

export default LatestProducts