"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./CollectionsPage.css"

const CollectionsPage = () => {
  const [activeTab, setActiveTab] = useState("collections")
  const [collections, setCollections] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll simulate loading data
    setTimeout(() => {
      setCollections([
        {
          name: "New Arrivals",
          slug: "new-arrivals",
          image: "/images/collection-new-arrivals.jpg",
          description: "The latest styles fresh from our designers",
        },
        {
          name: "Bestsellers",
          slug: "bestsellers",
          image: "/images/collection-bestsellers.jpg",
          description: "Our most popular pieces loved by customers",
        },
        {
          name: "Summer Collection",
          slug: "summer",
          image: "/images/collection-summer.jpg",
          description: "Light, breezy styles for warm weather",
        },
        {
          name: "Workwear",
          slug: "workwear",
          image: "/images/collection-workwear.jpg",
          description: "Professional attire for the modern workplace",
        },
        {
          name: "Evening Wear",
          slug: "evening",
          image: "/images/collection-evening.jpg",
          description: "Elegant options for special occasions",
        },
        {
          name: "Casual Basics",
          slug: "casual",
          image: "/images/collection-casual.jpg",
          description: "Everyday essentials for your wardrobe",
        },
      ])

      setCategories([
        { name: "Dresses", slug: "dresses", count: 42 },
        { name: "Tops", slug: "tops", count: 56 },
        { name: "Bottoms", slug: "bottoms", count: 38 },
        { name: "Outerwear", slug: "outerwear", count: 24 },
        { name: "Activewear", slug: "activewear", count: 31 },
        { name: "Accessories", slug: "accessories", count: 47 },
      ])

      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="collections-page">
      <div className="page-header">
        <h1 className="page-title">Collections</h1>
        <p className="page-description">
          Browse our carefully curated collections designed for every occasion and style preference.
        </p>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "collections" ? "active" : ""}`}
          onClick={() => setActiveTab("collections")}
        >
          Featured Collections
        </button>
        <button
          className={`tab ${activeTab === "categories" ? "active" : ""}`}
          onClick={() => setActiveTab("categories")}
        >
          Shop by Category
        </button>
      </div>

      {loading ? (
        <div className="loading">Loading collections...</div>
      ) : (
        <>
          {activeTab === "collections" && (
            <div className="collections-grid">
              {collections.map((collection, index) => (
                <Link key={index} to={`/collections/${collection.slug}`} className="collection-card">
                  <div className="collection-image-container">
                    <img
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      className="collection-image"
                    />
                  </div>
                  <div className="collection-info">
                    <h2 className="collection-name">{collection.name}</h2>
                    <p className="collection-description">{collection.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {activeTab === "categories" && (
            <div className="categories-grid">
              {categories.map((category, index) => (
                <Link key={index} to={`/collections/${category.slug}`} className="category-card">
                  <div className="category-info">
                    <h2 className="category-name">{category.name}</h2>
                    <span className="category-count">{category.count} items</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}

      <div className="help-box">
        <h2 className="help-title">Looking for Something Specific?</h2>
        <p className="help-description">
          Our style consultants are here to help you find the perfect pieces for your wardrobe.
        </p>
        <div className="help-action">
          <Link to="/contact" className="help-link">
            Contact our styling team →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CollectionsPage
