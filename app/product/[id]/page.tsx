import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, ShoppingBag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a database or API
const products = [
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
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    related: [
      { id: "2", name: "Classic White Blouse", price: "$49.99", image: "/placeholder.svg?height=600&width=400" },
      { id: "3", name: "High-Waisted Jeans", price: "$79.99", image: "/placeholder.svg?height=600&width=400" },
      { id: "4", name: "Oversized Cardigan", price: "$69.99", image: "/placeholder.svg?height=600&width=400" },
    ],
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id) || products[0]

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link
          href="/collections"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shopping
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-md border cursor-pointer">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < 4 ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">4.0 (24 reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-semibold">{product.price}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium">Color</h3>
              <RadioGroup defaultValue={product.colors[0]} className="flex gap-2">
                {product.colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <RadioGroupItem id={`color-${color.toLowerCase()}`} value={color} />
                    <Label htmlFor={`color-${color.toLowerCase()}`}>{color}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Size</h3>
              <RadioGroup defaultValue={product.sizes[2]} className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center">
                    <Label
                      htmlFor={`size-${size.toLowerCase()}`}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border [&:has(:checked)]:border-primary [&:has(:checked)]:bg-primary/10"
                    >
                      <RadioGroupItem id={`size-${size.toLowerCase()}`} value={size} className="sr-only" />
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <Link
                href="/size-guide"
                className="mt-2 inline-block text-sm text-muted-foreground hover:text-foreground"
              >
                Size Guide
              </Link>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Quantity</h3>
              <Select defaultValue="1">
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="Qty" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <SelectItem key={qty} value={qty.toString()}>
                      {qty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button size="lg" className="flex-1">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-5 w-5" />
              Add to Wishlist
            </Button>
          </div>

          <Tabs defaultValue="details">
            <TabsList className="w-full">
              <TabsTrigger value="details" className="flex-1">
                Details
              </TabsTrigger>
              <TabsTrigger value="shipping" className="flex-1">
                Shipping & Returns
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4 pt-4">
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="space-y-4 pt-4">
              <div className="space-y-2 text-muted-foreground">
                <p>Free standard shipping on orders over $100</p>
                <p>Express shipping available for an additional fee</p>
                <p>Free returns within 30 days of purchase</p>
                <p>
                  See our{" "}
                  <Link href="/faqs" className="text-foreground underline">
                    FAQs
                  </Link>{" "}
                  for more information
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">You May Also Like</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {product.related.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={400}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.price}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
