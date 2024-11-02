import Landing from "../components/HomePage/Landing/Landing";
import "../components/HomePage/HomePage.css";
import LatestProducts from "../components/HomePage/Products/LatestProducts";
import WhyShop from "../components/HomePage/WhyShop/WhyShop";
import ContactUs from "../components/HomePage/ContactUs/ContactUs";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Landing />
        <LatestProducts />
        <WhyShop />
        <ContactUs />
      </div>
    </div>
  )
}

export default Home