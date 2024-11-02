import BoxContainingTitleAndParagraph from "./BoxContainingTitleAndParagraph";
import "./Footer.css";

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
            <div className="info">
                <BoxContainingTitleAndParagraph title="ABOUT US"/>
                <div className="email">
                    <h5>Newsletter</h5>
                    <form>
                        <input type="email" placeholder="Enter Your Email"/>
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>
                <BoxContainingTitleAndParagraph title="NEED HELP"/>
                <div className="contact">
                    <h5>CONTACT US</h5>
                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Gb road 123 london Uk</span>
                    </div>
                    <div>
                        <i className="fa-solid fa-phone"></i>
                        <span>+01 12345678901</span>
                    </div>
                    <div>
                        <i className="fa-solid fa-envelope"></i>
                        <span>demo@gmail.com</span>
                    </div>
                </div>
            </div>
            <p className="copy-right">© 2024 All Rights Reserved By Free React Templates</p>
        </div>
    </footer>
  )
}

export default Footer