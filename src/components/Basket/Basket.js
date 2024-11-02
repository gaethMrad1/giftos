import { useContext, useRef } from "react";
import "./Basket.css";
import { BasketContext } from "../../context/BasketContext";

function Basket() {
  const aside = useRef();
  const icon = useRef();
  const {total, price, setTotal, setPrice} = useContext(BasketContext);

  const show = () => {
    aside.current.classList.toggle("show");
    if (aside.current.className === "show") {
        icon.current.className = "fa-solid fa-arrow-right";
    } else {
        icon.current.className = "fa-solid fa-arrow-left";
    }
  }

  const empty = () => {
    setTotal(0);
    setPrice(0);
  }

  return (
    <aside ref={aside}>
        <i ref={icon} onClick={show} className="fa-solid fa-arrow-left"></i>
        <div className="aside">
            <i className="fa-solid fa-basket-shopping"></i>
            <span className="total">Total: {total}</span>
            <span className="price">Price: {price}$</span>
            <button onClick={empty} className="btn">Empty</button>
        </div>
    </aside>
  )
}

export default Basket