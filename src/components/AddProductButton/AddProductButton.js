import { useContext } from "react";
import "./AddProductButton.css";
import { BasketContext } from "../../context/BasketContext";

function AddProductButton({price}) {
  const {setTotal, setPrice} = useContext(BasketContext);

  const add = () => {
    setTotal(prev => +prev + 1)
    setPrice(prev => +prev + +price)
  }

  return (
    <button onClick={add} className="btn add">Add Product</button>
  )
}

export default AddProductButton