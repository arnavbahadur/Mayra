import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img src="/public/photos_mayra/pexels-dhanno-19292779.jpg" alt="Elegant woman in fashionable clothing" className="hero-img" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Discover Your Unique Style</h1>
            <p className="hero-description">
              Timeless elegance meets modern trends. Clothing designed for every woman, every occasion.
            </p>
          </div>
          <div className="hero-buttons">
            <Link to="/collections" className="button primary">
              Shop Now
            </Link>
            <Link to="/collections/new-arrivals" className="button outline">
              New Arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {[
            { name: "Dresses", image: "/images/category-dresses.jpg", href: "/collections/dresses" },
            { name: "Tops", image: "/images/category-tops.jpg", href: "/collections/tops" },
            { name: "Bottoms", image: "/images/category-bottoms.jpg", href: "/collections/bottoms" },
            { name: "Accessories", image: "/images/category-accessories.jpg", href: "/collections/accessories" },
          ].map((category, index) => (
            <Link key={index} to={category.href} className="category-card">
              <div className="category-image-container">
                <img src={category.image || "/placeholder.svg"} alt={category.name} className="category-image" />
              </div>
              <div className="category-overlay">
                <h3 className="category-name">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals">
        <div className="section-header">
          <h2 className="section-title">New Arrivals</h2>
          <Link to="/collections/new-arrivals" className="view-all">
            View All <ArrowRight className="arrow-icon" />
          </Link>
        </div>
        <div className="products-grid">
          {[
            { name: "Floral Summer Dress", price: "$89.99", image: "/images/product-1.jpg" },
            { name: "Classic White Blouse", price: "$49.99", image: "/images/product-2.jpg" },
            { name: "High-Waisted Jeans", price: "$79.99", image: "/images/product-3.jpg" },
            { name: "Oversized Cardigan", price: "$69.99", image: "/images/product-4.jpg" },
          ].map((product, index) => (
            <Link key={index} to={`/product/${index + 1}`} className="product-card">
              <div className="product-image-container">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {[
            {
              quote:
                "The quality of the clothing is exceptional. I've been a loyal customer for years and have never been disappointed.",
              author: "Sarah J., 42",
            },
            {
              quote:
                "I love how inclusive the sizing is. As a curvy woman, it's refreshing to find stylish clothes that fit perfectly.",
              author: "Michelle T., 35",
            },
            {
              quote:
                "The designs are timeless yet modern. I can wear these pieces for years and still look fashionable.",
              author: "Emma L., 28",
            },
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Join Our Community</h2>
          <p className="newsletter-description">
            Subscribe to our newsletter for exclusive offers, style tips, and first access to new collections.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
