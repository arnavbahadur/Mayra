"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CollectionsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const collections = [
    {
      name: "New Arrivals",
      href: "/collections/new-arrivals",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.24.jpeg?height=600&width=400",
      description: "The latest styles fresh from our designers",
    },
    {
       name: "Bestsellers",
      href: "/collections/bestsellers",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.29.jpeg",
       description: "Our most popular pieces loved by customers",
    },
    {
      name: "Summer Collection",
      href: "/collections/summer",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.31.jpeg",
      description: "Light, breezy styles for warm weather",
    },
    {
      name: "Workwear",
      href: "/collections/workwear",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.33.jpeg",
      description: "Professional attire for the modern workplace",
    },
    {
      name: "Evening Wear",
      href: "/collections/evening",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.34.jpeg",
      description: "Elegant options for special occasions",
    },
    {
      name: "Casual Basics",
      href: "/collections/casual",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.37.jpeg",
      description: "Everyday essentials for your wardrobe",
    },
     {
      name: "New Arrivals",
      href: "/collections/new-arrivals",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.38.jpeg",
      description: "The latest styles fresh from our designers",
    },
    {
       name: "Bestsellers",
      href: "/collections/bestsellers",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.39 (1).jpeg",
       description: "Our most popular pieces loved by customers",
    },
    {
      name: "Summer Collection",
      href: "/collections/summer",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.39.jpeg",
      description: "Light, breezy styles for warm weather",
    },
    {
      name: "Workwear",
      href: "/collections/workwear",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.40 (1).jpeg",
      description: "Professional attire for the modern workplace",
    },
    {
      name: "Evening Wear",
      href: "/collections/evening",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.40.jpeg",
      description: "Elegant options for special occasions",
    },
    {
      name: "Casual Basics",
      href: "/collections/casual",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.41 (1).jpeg",
      description: "Everyday essentials for your wardrobe",
    },
     {
      name: "New Arrivals",
      href: "/collections/new-arrivals",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.41.jpeg",
      description: "The latest styles fresh from our designers",
    },
    {
       name: "Bestsellers",
      href: "/collections/bestsellers",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.42 (1).jpeg",
       description: "Our most popular pieces loved by customers",
    },
    {
      name: "Summer Collection",
      href: "/collections/summer",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.42.jpeg",
      description: "Light, breezy styles for warm weather",
    },
    {
      name: "Workwear",
      href: "/collections/workwear",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.43 (1).jpeg",
      description: "Professional attire for the modern workplace",
    },
    {
      name: "Evening Wear",
      href: "/collections/evening",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.43 (2).jpeg",
      description: "Elegant options for special occasions",
    },
    {
      name: "Casual Basics",
      href: "/collections/casual",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.43.jpeg",
      description: "Everyday essentials for your wardrobe",
    },
    {
      name: "Casual Basics",
      href: "/collections/casual",
      image: "/photos_mayra/WhatsApp Image 2025-07-13 at 08.28.44.jpeg",
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

//   return (
//     <div className="container py-10">
//       <div className="mb-8 space-y-2">
//         <h1 className="text-3xl font-bold tracking-tight">Collections</h1>
//         <p className="text-muted-foreground">
//           Browse our carefully curated collections designed for every occasion and style preference.
//         </p>
//       </div>

//       <Tabs defaultValue="collections" className="mb-10">
//         <TabsList className="mb-6">
//           <TabsTrigger value="collections">Featured Collections</TabsTrigger>
//           <TabsTrigger value="categories">Shop by Category</TabsTrigger>
//         </TabsList>
//         <TabsContent value="collections">
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {/* {collections.map((collection) => (
//               <Link key={collection.name} href={collection.href}>
//                 <Card className="overflow-hidden h-full transition-all hover:shadow-md">
//                   <div className="aspect-[3/2] overflow-hidden">
//                     <Image
//                       src={collection.image || "/placeholder.svg"}
//                        alt={"collection.name"}
//                        // remove "" from collection.name to get name
//                       width={400}
//                       height={300}
//                       className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                   </div>
//                   {/* <CardContent className="p-4">
//                     <h2 className="text-xl font-semibold">{collection.name}</h2>
//                     <p className="mt-2 text-sm text-muted-foreground">{collection.description}</p>
//                   </CardContent> 
//                   remove this to get name and description
//                 </Card>
//               </Link>
//             ))} */}
//             {collections.map((collection) => (
//   <a
//     key={collection.name}
//     href={collection.image}
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Card className="overflow-hidden h-full transition-all hover:shadow-md cursor-pointer">
//       <div className="aspect-[3/2] overflow-hidden">
//         <Image
//           src={collection.image || "/placeholder.svg"}
//           alt={collection.name}
//           width={400}
//           height={300}
//           className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//         />
//       </div>
//     </Card>
//   </a>
// ))}

//           </div>
//         </TabsContent>
//         <TabsContent value="categories">
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {categories.map((category) => (
//               <Link key={category.name} href={category.href}>
//                 <Card className="overflow-hidden transition-all hover:shadow-md">
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between">
//                       <h2 className="text-xl font-semibold">{category.name}</h2>
//                       <span className="rounded-full bg-muted px-2.5 py-0.5 text-sm text-muted-foreground">
//                         {category.count} items
//                       </span>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </TabsContent>
//       </Tabs>

//       <div className="rounded-lg bg-muted/30 p-6 md:p-10">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-2xl font-bold">Looking for Something Specific?</h2>
//           <p className="mt-2 text-muted-foreground">
//             Our style consultants are here to help you find the perfect pieces for your wardrobe.
//           </p>
//           <div className="mt-6">
//             <Link href="/contact" className="text-pink-600 hover:text-pink-700 font-medium">
//               Contact our styling team →
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )

  return (
    <div className="container py-10">
      <Tabs defaultValue="collections" className="mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="collections">Featured Collections</TabsTrigger>
        </TabsList>

        <TabsContent value="collections">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <div
                key={collection.name}
                onClick={() => setSelectedImage(collection.image)}
                className="cursor-pointer"
              >
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
                </Card>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative max-w-3xl w-full p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-400"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Preview"
              width={800}
              height={600}
              className="mx-auto max-h-[80vh] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
