import { useEffect, useState } from "react";
import "../components/ViewProductPage/ViewProduct.css";
import { useParams } from "react-router-dom";
import AddProductButton from "../components/AddProductButton/AddProductButton";

function ViewProduct() {
  const [product, setProduct] = useState({});
  const {productId} = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.in/api/products/${productId}`)
    .then(response => response.json())
    .then(data => setProduct(data.product))
    .catch((error) => { throw new Error(error) })
  }, [productId])

  return (
    <div className="view-product">
        <div className="container">
            <h2 className="title">Product{productId}: {product.title}</h2>
            <div className="product">
                <img src={product.image} alt={product.title}/>
                <span className="price d-block">Price: <span>{product.price}$</span></span>
                <p className="description">Description: {product.description}</p>
                <span className="brand d-block">Brand: {product.brand}</span>
                <span className="model d-block">Model: {product.model}</span>
                <span className="color d-block">Color: {product.color}</span>
                <AddProductButton price={product.price}/>
            </div>
        </div>
    </div>
  )
}

export default ViewProduct