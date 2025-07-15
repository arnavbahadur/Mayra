import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CollectionsPage() {
  const collections = [
    {
      name: "New Arrivals",
      href: "/collections/new-arrivals",
      image: "/placeholder.svg?height=600&width=400",
      description: "The latest styles fresh from our designers",
    },
    {
      name: "Bestsellers",
      href: "/collections/bestsellers",
      image: "/placeholder.svg?height=600&width=400",
      description: "Our most popular pieces loved by customers",
    },
    {
      name: "Summer Collection",
      href: "/collections/summer",
      image: "/placeholder.svg?height=600&width=400",
      description: "Light, breezy styles for warm weather",
    },
    {
      name: "Workwear",
      href: "/collections/workwear",
      image: "/placeholder.svg?height=600&width=400",
      description: "Professional attire for the modern workplace",
    },
    {
      name: "Evening Wear",
      href: "/collections/evening",
      image: "/placeholder.svg?height=600&width=400",
      description: "Elegant options for special occasions",
    },
    {
      name: "Casual Basics",
      href: "/collections/casual",
      image: "/placeholder.svg?height=600&width=400",
      description: "Everyday essentials for your wardrobe",
    },
  ]

  const categories = [
    { name: "Dresses", href: "/collections/dresses", count: 42 },
    { name: "Tops", href: "/collections/tops", count: 56 },
    { name: "Bottoms", href: "/collections/bottoms", count: 38 },
    { name: "Outerwear", href: "/collections/outerwear", count: 24 },
    { name: "Activewear", href: "/collections/activewear", count: 31 },
    { name: "Accessories", href: "/collections/accessories", count: 47 },
  ]

  return (
    <div className="container py-10">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Collections</h1>
        <p className="text-muted-foreground">
          Browse our carefully curated collections designed for every occasion and style preference.
        </p>
      </div>

      <Tabs defaultValue="collections" className="mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="collections">Featured Collections</TabsTrigger>
          <TabsTrigger value="categories">Shop by Category</TabsTrigger>
        </TabsList>
        <TabsContent value="collections">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <Link key={collection.name} href={collection.href}>
                <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h2 className="text-xl font-semibold">{collection.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{collection.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="categories">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.name} href={category.href}>
                <Card className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold">{category.name}</h2>
                      <span className="rounded-full bg-muted px-2.5 py-0.5 text-sm text-muted-foreground">
                        {category.count} items
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="rounded-lg bg-muted/30 p-6 md:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold">Looking for Something Specific?</h2>
          <p className="mt-2 text-muted-foreground">
            Our style consultants are here to help you find the perfect pieces for your wardrobe.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="text-pink-600 hover:text-pink-700 font-medium">
              Contact our styling team →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
