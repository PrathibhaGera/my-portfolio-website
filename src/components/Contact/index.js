import Header from "../Header"
import './index.css'

import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <> 
    <Header />
    
    <div className="contact-section">
      <h1 className="contact-me-heading">Contact Me</h1>
      <p className="contact-description">
        Let's connect! Feel free to reach out for opportunities, collaboration, or just a friendly chat.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:geraprathibha@gmail.com">geraprathibha@gmail.com</a>
        </div>

        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:+918367307872">+91 1234567890</a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://linkedin.com/in/g-prathibha" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/PrathibhaGera" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </>
  );
};

export default Contact;
