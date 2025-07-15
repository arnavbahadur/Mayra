"use client"

import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import "./CollectionDetailPage.css"

// This would typically come from an API
const collectionsData = {
  "new-arrivals": {
    title: "New Arrivals",
    description: "The latest styles fresh from our designers",
    products: [
      { id: 1, name: "Floral Summer Dress", price: "$89.99", image: "/images/product-1.jpg" },
      { id: 2, name: "Classic White Blouse", price: "$49.99", image: "/images/product-2.jpg" },
      { id: 3, name: "High-Waisted Jeans", price: "$79.99", image: "/images/product-3.jpg" },
      { id: 4, name: "Oversized Cardigan", price: "$69.99", image: "/images/product-4.jpg" },
      { id: 5, name: "Linen Blazer", price: "$99.99", image: "/images/product-5.jpg" },
      { id: 6, name: "Pleated Midi Skirt", price: "$59.99", image: "/images/product-6.jpg" },
      { id: 7, name: "Silk Camisole", price: "$45.99", image: "/images/product-7.jpg" },
      { id: 8, name: "Wide-Leg Trousers", price: "$85.99", image: "/images/product-8.jpg" },
    ],
  },
  bestsellers: {
    title: "Bestsellers",
    description: "Our most popular pieces loved by customers",
    products: [
      { id: 9, name: "Little Black Dress", price: "$99.99", image: "/images/product-9.jpg" },
      { id: 10, name: "Tailored Blazer", price: "$129.99", image: "/images/product-10.jpg" },
      { id: 11, name: "Skinny Jeans", price: "$69.99", image: "/images/product-11.jpg" },
      { id: 12, name: "Cashmere Sweater", price: "$149.99", image: "/images/product-12.jpg" },
      { id: 13, name: "Leather Tote Bag", price: "$199.99", image: "/images/product-13.jpg" },
      { id: 14, name: "Wrap Dress", price: "$89.99", image: "/images/product-14.jpg" },
      { id: 15, name: "Statement Earrings", price: "$39.99", image: "/images/product-15.jpg" },
      { id: 16, name: "Ankle Boots", price: "$159.99", image: "/images/product-16.jpg" },
    ],
  },
  dresses: {
    title: "Dresses",
    description: "Elegant dresses for every occasion",
    products: [
      { id: 17, name: "Maxi Floral Dress", price: "$99.99", image: "/images/product-17.jpg" },
      { id: 18, name: "Cocktail Dress", price: "$129.99", image: "/images/product-18.jpg" },
      { id: 19, name: "Wrap Midi Dress", price: "$79.99", image: "/images/product-19.jpg" },
      { id: 20, name: "Shirt Dress", price: "$69.99", image: "/images/product-20.jpg" },
      { id: 21, name: "Evening Gown", price: "$199.99", image: "/images/product-21.jpg" },
      { id: 22, name: "Summer Sundress", price: "$59.99", image: "/images/product-22.jpg" },
      { id: 23, name: "Knit Sweater Dress", price: "$89.99", image: "/images/product-23.jpg" },
      { id: 24, name: "Linen Shift Dress", price: "$75.99", image: "/images/product-24.jpg" },
    ],
  },
}

const CollectionDetailPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [collection, setCollection] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("featured")

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll simulate loading data
    setTimeout(() => {
      const collectionData = collectionsData[slug] || {
        title: "Collection",
        description: "Browse our collection",
        products: [],
      }
      setCollection(collectionData)
      setLoading(false)
    }, 500)
  }, [slug])

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
    // In a real app, you would sort the products here
  }

  if (loading) {
    return <div className="loading">Loading collection...</div>
  }

  return (
    <div className="collection-detail-page">
      <div className="back-link">
        <Link to="/collections" className="back-button">
          <ArrowLeft className="back-icon" />
          Back to Collections
        </Link>
      </div>

      <div className="page-header">
        <h1 className="page-title">{collection.title}</h1>
        <p className="page-description">{collection.description}</p>
      </div>

      <div className="collection-controls">
        <div className="product-count">{collection.products.length} products</div>
        <div className="sort-control">
          <select className="sort-select" value={sortBy} onChange={handleSortChange}>
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {collection.products.length > 0 ? (
        <div className="products-grid">
          {collection.products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card">
              <div className="product-image-container">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-collection">
          <p className="empty-message">No products found in this collection.</p>
          <button className="button primary" onClick={() => navigate("/collections")}>
            Browse other collections
          </button>
        </div>
      )}
    </div>
  )
}

export default CollectionDetailPage
