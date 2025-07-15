"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
import "./Header.css"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
  { name: "Size Guide", href: "/size-guide" },
]

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-container">
        <div className="mobile-menu-button">
          <button className="icon-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="icon" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        <div className="logo-nav-container">
          <Link to="/" className="logo">
            ELEGANCE
          </Link>
          <nav className="desktop-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="header-actions">
          {isSearchOpen ? (
            <div className="search-container">
              <input type="search" placeholder="Search..." className="search-input" autoFocus />
              <button className="icon-button" onClick={() => setIsSearchOpen(false)}>
                <X className="icon" />
                <span className="sr-only">Close search</span>
              </button>
            </div>
          ) : (
            <button className="icon-button" onClick={() => setIsSearchOpen(true)}>
              <Search className="icon" />
              <span className="sr-only">Search</span>
            </button>
          )}
          <button className="icon-button">
            <User className="icon" />
            <span className="sr-only">Account</span>
          </button>
          <button className="icon-button">
            <ShoppingBag className="icon" />
            <span className="sr-only">Cart</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <button className="icon-button" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="icon" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav className="mobile-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`mobile-nav-link ${location.pathname === item.href ? "active" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
