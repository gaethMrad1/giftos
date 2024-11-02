import Card from "./Card";
import "./WhyShop.css";

function WhyShop() {
  const data = [
    {iconClass: "fa-solid fa-truck", title: "Fast Delivery", desc: "variations of passages of Lorem Ipsum available"},
    {iconClass: "fa-solid fa-franc-sign", title: "Free Shiping", desc: "variations of passages of Lorem Ipsum available"},
    {iconClass: "fa-solid fa-star", title: "Best Quality", desc: "variations of passages of Lorem Ipsum available"}
  ]

  return (
    <div className="why-shop">
        <h2 className="title">Why Shop With Us</h2>
        <div className="cards">
            {data.map((ele) => {
                return <Card iconClass={ele.iconClass} title={ele.title} desc={ele.desc}/>
            })}
        </div>
    </div>
  )
}

export default WhyShop