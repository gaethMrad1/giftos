import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
        <div className="info">
            <h1>Welcome To Our<br/>Gift Shop</h1>
            <p>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
            <Link to="contact-us">CONTACT US</Link>
        </div>
        <img src="./images/slider-img.png" alt=""/>
    </div>
  )
}

export default Landing