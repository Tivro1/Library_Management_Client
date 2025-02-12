


import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"; // Importing icons for social media
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Footer Links */}
        <div className="footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#services" className="footer-link">Services</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/kera.reo" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://github.com/Tivro1" className="social-icon">
              <FaGithub />
            </a>
           
            <a href="https://www.linkedin.com/in/sourav-das-tivro-hn/" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
