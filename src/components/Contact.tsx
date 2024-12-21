import { Link } from "@react-email/link";
import "../assets/styles/Contact.scss";

function Contact() {
  
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Email me at:</p>
          <Link  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfprrQqXTtfsphKzGSjTBTMkhRBhtmQnVdbCzdwCqZZpfwhjFlHKXjWXDbTjQPJrDQHTdB">
            sammytabally@gmail.com
          </Link>
          

        </div>
      </div>
    </div>
  );
}

export default Contact;
