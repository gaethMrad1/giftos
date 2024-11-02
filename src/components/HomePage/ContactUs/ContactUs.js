import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us">
        <h2 className="title">CONTACT US</h2>
        <form>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="tel" placeholder="Phone"/>
            <input className="message" type="text" placeholder="Message"/>
            <button type="submit" className="btn">SEND</button>
        </form>
    </div>
  )
}

export default ContactUs