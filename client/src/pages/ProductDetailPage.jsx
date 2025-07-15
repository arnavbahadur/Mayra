"use client"

import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, Heart, ShoppingBag, Star } from "lucide-react"
import "./ProductDetailPage.css"

// This would typically come from an API
const productsData = [
  {
    id: "1",
    name: "Floral Summer Dress",
    price: "$89.99",
    description:
      "A beautiful floral summer dress perfect for warm days. Made from lightweight, breathable fabric with a flattering silhouette.",
    details: ["100% cotton", "Machine washable", "Adjustable straps", "Side pockets", "Midi length"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pink", "Blue", "White"],
    images: [
      "/images/product-1.jpg",
      "/images/product-1-alt-1.jpg",
      "/images/product-1-alt-2.jpg",
      "/images/product-1-alt-3.jpg",
    ],
    related: [
      { id: "2", name: "Classic White Blouse", price: "$49.99", image: "/images/product-2.jpg" },
      { id: "3", name: "High-Waisted Jeans", price: "$79.99", image: "/images/product-3.jpg" },
      { id: "4", name: "Oversized Cardigan", price: "$69.99", image: "/images/product-4.jpg" },
    ],
  },
]

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [mainImage, setMainImage] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("details")

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll simulate loading data
    setTimeout(() => {
      const productData = productsData.find((p) => p.id === id) || productsData[0]
      setProduct(productData)
      setMainImage(productData.images[0])
      setSelectedColor(productData.colors[0])
      setSelectedSize(productData.sizes[2]) // Default to Medium
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) {
    return <div className="loading">Loading product...</div>
  }

  return (
    <div className="product-detail-page">
      <div className="back-link">
        <Link to="/collections" className="back-button">
          <ArrowLeft className="back-icon" />
          Back to Shopping
        </Link>
      </div>

      <div className="product-detail-grid">
        <div className="product-images">
          <div className="main-image-container">
            <img src={mainImage || "/placeholder.svg"} alt={product.name} className="main-image" />
          </div>
          <div className="thumbnail-grid">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail-container ${mainImage === image ? "active" : ""}`}
                onClick={() => setMainImage(image)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  className="thumbnail-image"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`star-icon ${i < 4 ? "filled" : ""}`} />
              ))}
            </div>
            <span className="rating-text">4.0 (24 reviews)</span>
          </div>
          <p className="product-price">{product.price}</p>

          <p className="product-description">{product.description}</p>

          <div className="product-options">
            <div className="option-group">
              <h3 className="option-title">Color</h3>
              <div className="color-options">
                {product.colors.map((color) => (
                  <label key={color} className={`color-option ${selectedColor === color ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                      className="sr-only"
                    />
                    {color}
                  </label>
                ))}
              </div>
            </div>

            <div className="option-group">
              <h3 className="option-title">Size</h3>
              <div className="size-options">
                {product.sizes.map((size) => (
                  <label key={size} className={`size-option ${selectedSize === size ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={() => setSelectedSize(size)}
                      className="sr-only"
                    />
                    {size}
                  </label>
                ))}
              </div>
              <Link to="/size-guide" className="size-guide-link">
                Size Guide
              </Link>
            </div>

            <div className="option-group">
              <h3 className="option-title">Quantity</h3>
              <select
                className="quantity-select"
                value={quantity}
                onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="product-actions">
            <button className="button primary">
              <ShoppingBag className="button-icon" />
              Add to Cart
            </button>
            <button className="button outline">
              <Heart className="button-icon" />
              Add to Wishlist
            </button>
          </div>

          <div className="product-tabs">
            <div className="tabs">
              <button
                className={`tab ${activeTab === "details" ? "active" : ""}`}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
              <button
                className={`tab ${activeTab === "shipping" ? "active" : ""}`}
                onClick={() => setActiveTab("shipping")}
              >
                Shipping & Returns
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "details" && (
                <ul className="product-details-list">
                  {product.details.map((detail, index) => (
                    <li key={index} className="product-detail-item">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "shipping" && (
                <div className="shipping-info">
                  <p>Free standard shipping on orders over $100</p>
                  <p>Express shipping available for an additional fee</p>
                  <p>Free returns within 30 days of purchase</p>
                  <p>
                    See our{" "}
                    <Link to="/faqs" className="text-link">
                      FAQs
                    </Link>{" "}
                    for more information
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="related-products">
        <h2 className="section-title">You May Also Like</h2>
        <div className="products-grid">
          {product.related.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="product-card">
              <div className="product-image-container">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
