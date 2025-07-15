import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-pink-50">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Elegant woman in fashionable clothing"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20" />
        <div className="container relative flex h-full flex-col items-start justify-center space-y-6">
          <div className="max-w-xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Discover Your Unique Style</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Timeless elegance meets modern trends. Clothing designed for every woman, every occasion.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/collections">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/collections/new-arrivals">New Arrivals</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container py-16">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { name: "Dresses", image: "/placeholder.svg?height=600&width=400", href: "/collections/dresses" },
            { name: "Tops", image: "/placeholder.svg?height=600&width=400", href: "/collections/tops" },
            { name: "Bottoms", image: "/placeholder.svg?height=600&width=400", href: "/collections/bottoms" },
            { name: "Accessories", image: "/placeholder.svg?height=600&width=400", href: "/collections/accessories" },
          ].map((category) => (
            <Link key={category.name} href={category.href} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={400}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent p-4">
                <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">New Arrivals</h2>
            <Link
              href="/collections/new-arrivals"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Floral Summer Dress", price: "$89.99", image: "/placeholder.svg?height=600&width=400" },
              { name: "Classic White Blouse", price: "$49.99", image: "/placeholder.svg?height=600&width=400" },
              { name: "High-Waisted Jeans", price: "$79.99", image: "/placeholder.svg?height=600&width=400" },
              { name: "Oversized Cardigan", price: "$69.99", image: "/placeholder.svg?height=600&width=400" },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-sm">
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
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">What Our Customers Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
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
            <Card key={index} className="bg-muted/30">
              <CardContent className="p-6">
                <p className="mb-4 italic text-muted-foreground">"{testimonial.quote}"</p>
                <p className="font-medium">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-pink-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Join Our Community</h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe to our newsletter for exclusive offers, style tips, and first access to new collections.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
              <Input type="email" placeholder="Enter your email" className="sm:w-72 bg-background" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
