import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">About Mayra</h1>
        <p className="mt-4 text-lg text-muted-foreground">Empowering women through timeless fashion since 2014</p>
      </div>

      <div className="grid gap-12 md:gap-16">
        {/* Our Story */}
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Welcome to MAYRA A CLOTHING STORE– your go-to destination for Indo-Western, Kurti Sets, Bedsheet, Blanket, Comforter, Shawl-Stole, Towels, Gifting Item.

              </p>
              <p>
                We started with a simple idea: to create a place where people can find affordable, high-quality, stylish, sustainable products they love. Since opening our doors in 2019, we’ve been committed to offering our customers an enjoyable shopping experience, personal service, and items you won’t find just anywhere.
              </p>
              <p>
                Whether you're shopping online or visiting us in-store, we’re here to help you find just what you’re looking for. Every product we stock is chosen with care – because we believe our customers deserve nothing less.
              </p>
              <p>
                Thank you for your support. We’re more than just a shop – we’re part of the community, and we’re excited to grow with you.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Elegance founder in the design studio"
              width={800}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-muted/30 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Quality",
                description: "We use only the finest materials and craftsmanship in every piece we create.",
              },
              {
                title: "Inclusivity",
                description: "We design for women of all ages, sizes, and backgrounds.",
              },
              {
                title: "Sustainability",
                description: "We're committed to ethical production and reducing our environmental impact.",
              },
              {
                title: "Empowerment",
                description: "We believe fashion should make you feel confident and comfortable.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-4">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sangeeta Chordiya",
                role: "Angel Investor",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Pravesh Chordiya",
                role: "Founder & Sales Director",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Vinni Chordiya",
                role: "Founder & Creative Director",
                image: "/placeholder.svg?height=400&width=400",
              },
           
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 overflow-hidden rounded-full mx-auto w-40 h-40">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sustainability */}
        <section className="grid gap-8 md:grid-cols-2 md:items-center px-4 md:px-8 py-12">
          <div className="relative w-full h-64 md:h-[400px] rounded-lg overflow-hidden">
      <Image
        src="/photos_mayra/community.png"
        alt="Sustainable fabric production"
        fill
        className="object-cover"   />
         </div>
          <div>
            <h2 className="text-2xl font-bold">Our Commitment to Sustainability</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                At Mayra, we believe that beautiful fashion shouldn't come at the expense of our planet. We're
                committed to sustainable practices throughout the production process, from sourcing materials to
                manufacturing and shipping.
              </p>
              <p>
                We work with suppliers who share our values, prioritizing organic and recycled materials whenever
                possible. Our production facilities adhere to strict ethical standards, ensuring fair wages and safe
                working conditions for all employees.
              </p>
              <p>
                We're constantly innovating to reduce our environmental footprint, implementing water-saving techniques,
                reducing waste, and using eco-friendly packaging. While we're proud of our progress, we recognize that
                sustainability is a journey, and we're committed to continuous improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="bg-pink-50 p-10 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Mayra Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Be part of our journey and stay updated on new collections, style tips, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/collections">Shop Our Collections</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
