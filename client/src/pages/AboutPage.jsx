import { Link } from "react-router-dom"
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1 className="page-title">About Elegance</h1>
        <p className="page-subtitle">Empowering women through timeless fashion since 2010</p>
      </div>

      <div className="about-sections">
        {/* Our Story */}
        <section className="about-section">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">Our Story</h2>
              <div className="about-text">
                <p>
                  Elegance was founded in 2010 with a simple mission: to create beautiful, high-quality clothing that
                  makes women feel confident and empowered. What began as a small boutique in New York has grown into an
                  international brand loved by women of all ages.
                </p>
                <p>
                  Our founder, Elizabeth Chen, started Elegance after years in the fashion industry, where she noticed a
                  gap in the market for clothing that was both stylish and accessible. She envisioned a brand that would
                  cater to women of all ages, sizes, and backgrounds, offering timeless pieces that could be treasured
                  for years.
                </p>
                <p>
                  Today, Elegance continues to be guided by Elizabeth's original vision, creating collections that blend
                  classic elegance with contemporary trends, ensuring that every woman can find pieces that make her
                  feel beautiful and confident.
                </p>
              </div>
            </div>
            <div className="about-image">
              <img src="/images/about-founder.jpg" alt="Elegance founder in the design studio" className="about-img" />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="about-section values-section">
          <h2 className="section-title centered">Our Values</h2>
          <div className="values-grid">
            {[
              {
                title: "Quality",
                description: "We use only the finest materials and craftsmanship in every piece we create.",
              },
              {
                title: "Inclusivity",
                description: "We design for women of all ages, sizes, and backgrounds.",
              },
              {
                title: "Sustainability",
                description: "We're committed to ethical production and reducing our environmental impact.",
              },
              {
                title: "Empowerment",
                description: "We believe fashion should make you feel confident and comfortable.",
              },
            ].map((value, index) => (
              <div key={index} className="value-card">
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="about-section">
          <h2 className="section-title centered">Meet Our Team</h2>
          <div className="team-grid">
            {[
              {
                name: "Elizabeth Chen",
                role: "Founder & Creative Director",
                image: "/images/team-1.jpg",
              },
              {
                name: "Sarah Johnson",
                role: "Head of Design",
                image: "/images/team-2.jpg",
              },
              {
                name: "Maria Rodriguez",
                role: "Production Manager",
                image: "/images/team-3.jpg",
              },
              {
                name: "Aisha Patel",
                role: "Marketing Director",
                image: "/images/team-4.jpg",
              },
              {
                name: "Olivia Kim",
                role: "Customer Experience Lead",
                image: "/images/team-5.jpg",
              },
              {
                name: "Emma Thompson",
                role: "Sustainability Coordinator",
                image: "/images/team-6.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-img" />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sustainability */}
        <section className="about-section">
          <div className="about-grid">
            <div className="about-image">
              <img src="/images/sustainability.jpg" alt="Sustainable fabric production" className="about-img" />
            </div>
            <div className="about-content">
              <h2 className="section-title">Our Commitment to Sustainability</h2>
              <div className="about-text">
                <p>
                  At Elegance, we believe that beautiful fashion shouldn't come at the expense of our planet. We're
                  committed to sustainable practices throughout our production process, from sourcing materials to
                  manufacturing and shipping.
                </p>
                <p>
                  We work with suppliers who share our values, prioritizing organic and recycled materials whenever
                  possible. Our production facilities adhere to strict ethical standards, ensuring fair wages and safe
                  working conditions for all employees.
                </p>
                <p>
                  We're constantly innovating to reduce our environmental footprint, implementing water-saving
                  techniques, reducing waste, and using eco-friendly packaging. While we're proud of our progress, we
                  recognize that sustainability is a journey, and we're committed to continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="about-section join-section">
          <div className="join-content">
            <h2 className="section-title">Join the Elegance Community</h2>
            <p className="join-description">
              Be part of our journey and stay updated on new collections, style tips, and exclusive offers.
            </p>
            <div className="join-buttons">
              <Link to="/collections" className="button primary">
                Shop Our Collections
              </Link>
              <Link to="/contact" className="button outline">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage
