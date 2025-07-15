"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Search } from "lucide-react"
import "./FAQsPage.css"

const faqs = {
  orders: [
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by logging into your account and visiting the 'Order History' section. Alternatively, you can use the tracking number provided in your shipping confirmation email.",
    },
    {
      question: "How long will it take to receive my order?",
      answer:
        "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available at checkout for faster delivery. International shipping times vary by location.",
    },
    {
      question: "Can I modify or cancel my order?",
      answer:
        "Orders can be modified or canceled within 1 hour of placement. Please contact our customer service team immediately if you need to make changes to your order.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping rates and delivery times are calculated at checkout based on your location.",
    },
    {
      question: "Is there a minimum order value?",
      answer:
        "There is no minimum order value. However, orders over $100 qualify for free standard shipping within the US.",
    },
  ],
  returns: [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unworn items in their original condition with tags attached. Sale items are final sale and cannot be returned.",
    },
    {
      question: "How do I initiate a return?",
      answer:
        "To initiate a return, log into your account and select the order containing the item(s) you wish to return. Follow the prompts to generate a return label and instructions.",
    },
    {
      question: "Do you offer exchanges?",
      answer:
        "Yes, we offer exchanges for different sizes or colors of the same item. You can request an exchange through the return process in your account.",
    },
    {
      question: "How long does it take to process a return?",
      answer:
        "Once we receive your return, it typically takes 3-5 business days to process. Refunds are issued to the original payment method and may take an additional 2-5 business days to appear in your account.",
    },
    {
      question: "Who pays for return shipping?",
      answer:
        "Customers are responsible for return shipping costs unless the item received was defective or incorrect. In those cases, we will provide a prepaid return label.",
    },
  ],
  products: [
    {
      question: "How do I find my size?",
      answer:
        "We provide detailed size guides for all our products. You can find the size guide link on each product page. For more assistance, please refer to our comprehensive Size Guide page.",
    },
    {
      question: "Are your products true to size?",
      answer:
        "Our products generally run true to size. However, we recommend checking the specific size guide for each item as sizing can vary slightly between different styles and collections.",
    },
    {
      question: "What materials do you use?",
      answer:
        "We use a variety of high-quality materials including cotton, linen, silk, and sustainable fabrics. The specific materials for each item are listed in the product description.",
    },
    {
      question: "How should I care for my items?",
      answer:
        "Care instructions are provided on the product page and on the care label of each item. Generally, we recommend washing in cold water and hanging to dry to preserve the quality and longevity of your garments.",
    },
    {
      question: "Do you offer plus sizes?",
      answer:
        "Yes, we are committed to inclusive sizing. Most of our collections are available in sizes XS through 3XL. We're continuously expanding our size range to be more inclusive.",
    },
  ],
  account: [
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking on the 'Account' icon in the top right corner of our website and selecting 'Create Account'. You'll need to provide your email address and create a password.",
    },
    {
      question: "I forgot my password. How do I reset it?",
      answer:
        "Click on the 'Account' icon and select 'Sign In'. Then click on 'Forgot Password' and follow the instructions sent to your email to reset your password.",
    },
    {
      question: "Can I shop without creating an account?",
      answer:
        "Yes, we offer guest checkout for your convenience. However, creating an account allows you to track orders, save favorites, and enjoy a faster checkout experience for future purchases.",
    },
    {
      question: "How do I update my account information?",
      answer:
        "Log into your account and navigate to the 'Account Settings' or 'Profile' section. From there, you can update your personal information, shipping addresses, and payment methods.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we take data security very seriously. We use industry-standard encryption and security measures to protect your personal information. You can review our Privacy Policy for more details.",
    },
  ],
  other: [
    {
      question: "Do you have physical stores?",
      answer:
        "Yes, we have flagship stores in New York, Los Angeles, and Chicago. You can find the addresses and opening hours on our Contact page.",
    },
    {
      question: "Do you offer gift cards?",
      answer:
        "Yes, we offer digital gift cards in various denominations. They can be purchased online and sent directly to the recipient's email. Gift cards never expire and can be used for any purchase on our website or in our physical stores.",
    },
    {
      question: "Are you a sustainable brand?",
      answer:
        "Sustainability is one of our core values. We're committed to ethical production practices, use eco-friendly materials where possible, and are continuously working to reduce our environmental footprint. You can learn more about our sustainability initiatives on our About page.",
    },
    {
      question: "Do you offer styling advice?",
      answer:
        "Yes, we offer complimentary styling advice through our virtual styling service. You can book a session with one of our stylists who will help you find pieces that suit your style, body type, and preferences.",
    },
    {
      question: "How can I stay updated on new collections and promotions?",
      answer:
        "The best way to stay updated is to subscribe to our newsletter. You'll receive updates on new arrivals, exclusive offers, and early access to sales. You can also follow us on social media for daily inspiration and updates.",
    },
    {
      question: "Do you offer discounts for students or teachers?",
      answer:
        "Yes, we offer a 10% discount for students and teachers with valid ID. Please contact our customer service team for more information on how to verify your status and receive your discount code.",
    },
  ],
}

const FAQsPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [expandedFAQs, setExpandedFAQs] = useState({})

  // Filter FAQs based on search query and active tab
  const filteredFaqs = Object.entries(faqs).flatMap(([category, items]) => {
    if (activeTab !== "all" && activeTab !== category) return []

    return items
      .filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .map((item, index) => ({ ...item, id: `${category}-${index}`, category }))
  })

  const toggleFAQ = (id) => {
    setExpandedFAQs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="faqs-page">
      <div className="page-header">
        <h1 className="page-title">Frequently Asked Questions</h1>
        <p className="page-subtitle">
          Find answers to common questions about our products, orders, shipping, and more.
        </p>
      </div>

      <div className="faqs-container">
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search for answers..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="tabs">
          <button className={`tab ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
            All
          </button>
          <button className={`tab ${activeTab === "orders" ? "active" : ""}`} onClick={() => setActiveTab("orders")}>
            Orders & Shipping
          </button>
          <button className={`tab ${activeTab === "returns" ? "active" : ""}`} onClick={() => setActiveTab("returns")}>
            Returns & Exchanges
          </button>
          <button
            className={`tab ${activeTab === "products" ? "active" : ""}`}
            onClick={() => setActiveTab("products")}
          >
            Products & Sizing
          </button>
          <button className={`tab ${activeTab === "account" ? "active" : ""}`} onClick={() => setActiveTab("account")}>
            Account & Payment
          </button>
          <button className={`tab ${activeTab === "other" ? "active" : ""}`} onClick={() => setActiveTab("other")}>
            Other
          </button>
        </div>

        {filteredFaqs.length > 0 ? (
          <div className="faq-list">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button
                  className={`faq-question ${expandedFAQs[faq.id] ? "expanded" : ""}`}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  {faq.question}
                  <span className="faq-icon">{expandedFAQs[faq.id] ? "−" : "+"}</span>
                </button>
                {expandedFAQs[faq.id] && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p className="no-results-text">No FAQs found matching your search criteria.</p>
            <button
              className="clear-search"
              onClick={() => {
                setSearchQuery("")
                setActiveTab("all")
              }}
            >
              Clear Search
            </button>
          </div>
        )}

        <div className="contact-box">
          <h2 className="contact-title">Still have questions?</h2>
          <p className="contact-text">
            If you couldn't find the answer you were looking for, please don't hesitate to contact us.
          </p>
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FAQsPage
