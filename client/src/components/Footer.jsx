import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter } from "lucide-react"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">ELEGANCE</h3>
            <p className="footer-text">
              Timeless fashion for the modern woman. Quality clothing designed to make you feel confident and beautiful.
            </p>
            <div className="social-links">
              <button className="social-button">
                <Facebook className="social-icon" />
                <span className="sr-only">Facebook</span>
              </button>
              <button className="social-button">
                <Instagram className="social-icon" />
                <span className="sr-only">Instagram</span>
              </button>
              <button className="social-button">
                <Twitter className="social-icon" />
                <span className="sr-only">Twitter</span>
              </button>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle">Shop</h3>
            <ul className="footer-links">
              <li>
                <Link to="/collections/new-arrivals" className="footer-link">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/collections/bestsellers" className="footer-link">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link to="/collections/dresses" className="footer-link">
                  Dresses
                </Link>
              </li>
              <li>
                <Link to="/collections/tops" className="footer-link">
                  Tops
                </Link>
              </li>
              <li>
                <Link to="/collections/bottoms" className="footer-link">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link to="/collections/accessories" className="footer-link">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle">Company</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="footer-link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="footer-link">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle">Newsletter</h3>
            <p className="footer-text">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
