import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// This would typically come from a database or API
const collections = {
  "new-arrivals": {
    title: "New Arrivals",
    description: "The latest styles fresh from our designers",
    products: [
      { id: 1, name: "Floral Summer Dress", price: "$89.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 2, name: "Classic White Blouse", price: "$49.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 3, name: "High-Waisted Jeans", price: "$79.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 4, name: "Oversized Cardigan", price: "$69.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 5, name: "Linen Blazer", price: "$99.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 6, name: "Pleated Midi Skirt", price: "$59.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 7, name: "Silk Camisole", price: "$45.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 8, name: "Wide-Leg Trousers", price: "$85.99", image: "/placeholder.svg?height=600&width=400" },
    ],
  },
  bestsellers: {
    title: "Bestsellers",
    description: "Our most popular pieces loved by customers",
    products: [
      { id: 9, name: "Little Black Dress", price: "$99.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 10, name: "Tailored Blazer", price: "$129.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 11, name: "Skinny Jeans", price: "$69.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 12, name: "Cashmere Sweater", price: "$149.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 13, name: "Leather Tote Bag", price: "$199.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 14, name: "Wrap Dress", price: "$89.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 15, name: "Statement Earrings", price: "$39.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 16, name: "Ankle Boots", price: "$159.99", image: "/placeholder.svg?height=600&width=400" },
    ],
  },
  dresses: {
    title: "Dresses",
    description: "Elegant dresses for every occasion",
    products: [
      { id: 17, name: "Maxi Floral Dress", price: "$99.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 18, name: "Cocktail Dress", price: "$129.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 19, name: "Wrap Midi Dress", price: "$79.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 20, name: "Shirt Dress", price: "$69.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 21, name: "Evening Gown", price: "$199.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 22, name: "Summer Sundress", price: "$59.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 23, name: "Knit Sweater Dress", price: "$89.99", image: "/placeholder.svg?height=600&width=400" },
      { id: 24, name: "Linen Shift Dress", price: "$75.99", image: "/placeholder.svg?height=600&width=400" },
    ],
  },
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = collections[params.slug as keyof typeof collections] || {
    title: "Collection",
    description: "Browse our collection",
    products: [],
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link
          href="/collections"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Collections
        </Link>
      </div>

      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{collection.title}</h1>
        <p className="text-muted-foreground">{collection.description}</p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted-foreground">{collection.products.length} products</div>
        <div className="flex items-center gap-4">
          <Select defaultValue="featured">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {collection.products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card className="overflow-hidden h-full transition-all hover:shadow-md">
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="font-medium">{product.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{product.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {collection.products.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-center text-muted-foreground">No products found in this collection.</p>
          <Button asChild className="mt-4">
            <Link href="/collections">Browse other collections</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
