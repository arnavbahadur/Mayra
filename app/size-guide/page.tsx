import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SizeGuidePage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Size Guide</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find your perfect fit with our comprehensive sizing information
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <Tabs defaultValue="women" className="mb-8">
          <TabsList className="w-full justify-start overflow-auto">
            <TabsTrigger value="women">Women's Clothing</TabsTrigger>
            <TabsTrigger value="measurements">How to Measure</TabsTrigger>
            <TabsTrigger value="conversion">International Conversion</TabsTrigger>
          </TabsList>

          <TabsContent value="women" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Women's Clothing Size Chart</CardTitle>
                <CardDescription>
                  All measurements are in inches. For the best fit, we recommend taking your measurements and comparing
                  them to the chart below.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-medium">Size</th>
                        <th className="py-3 px-4 text-left font-medium">US Size</th>
                        <th className="py-3 px-4 text-left font-medium">Bust</th>
                        <th className="py-3 px-4 text-left font-medium">Waist</th>
                        <th className="py-3 px-4 text-left font-medium">Hips</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">XS</td>
                        <td className="py-3 px-4">0-2</td>
                        <td className="py-3 px-4">31-33</td>
                        <td className="py-3 px-4">24-26</td>
                        <td className="py-3 px-4">34-36</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">S</td>
                        <td className="py-3 px-4">4-6</td>
                        <td className="py-3 px-4">33-35</td>
                        <td className="py-3 px-4">26-28</td>
                        <td className="py-3 px-4">36-38</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">M</td>
                        <td className="py-3 px-4">8-10</td>
                        <td className="py-3 px-4">35-37</td>
                        <td className="py-3 px-4">28-30</td>
                        <td className="py-3 px-4">38-40</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">L</td>
                        <td className="py-3 px-4">12-14</td>
                        <td className="py-3 px-4">37-40</td>
                        <td className="py-3 px-4">30-33</td>
                        <td className="py-3 px-4">40-43</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">XL</td>
                        <td className="py-3 px-4">16-18</td>
                        <td className="py-3 px-4">40-43</td>
                        <td className="py-3 px-4">33-36</td>
                        <td className="py-3 px-4">43-46</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">XXL</td>
                        <td className="py-3 px-4">20-22</td>
                        <td className="py-3 px-4">43-46</td>
                        <td className="py-3 px-4">36-40</td>
                        <td className="py-3 px-4">46-49</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Dress Size Chart</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="py-3 px-4 text-left font-medium">Size</th>
                          <th className="py-3 px-4 text-left font-medium">US Size</th>
                          <th className="py-3 px-4 text-left font-medium">Bust</th>
                          <th className="py-3 px-4 text-left font-medium">Waist</th>
                          <th className="py-3 px-4 text-left font-medium">Hips</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">XS</td>
                          <td className="py-3 px-4">0-2</td>
                          <td className="py-3 px-4">31-33</td>
                          <td className="py-3 px-4">24-26</td>
                          <td className="py-3 px-4">34-36</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">S</td>
                          <td className="py-3 px-4">4-6</td>
                          <td className="py-3 px-4">33-35</td>
                          <td className="py-3 px-4">26-28</td>
                          <td className="py-3 px-4">36-38</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">M</td>
                          <td className="py-3 px-4">8-10</td>
                          <td className="py-3 px-4">35-37</td>
                          <td className="py-3 px-4">28-30</td>
                          <td className="py-3 px-4">38-40</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">L</td>
                          <td className="py-3 px-4">12-14</td>
                          <td className="py-3 px-4">37-40</td>
                          <td className="py-3 px-4">30-33</td>
                          <td className="py-3 px-4">40-43</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">XL</td>
                          <td className="py-3 px-4">16-18</td>
                          <td className="py-3 px-4">40-43</td>
                          <td className="py-3 px-4">33-36</td>
                          <td className="py-3 px-4">43-46</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Bottoms Size Chart</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="py-3 px-4 text-left font-medium">Size</th>
                          <th className="py-3 px-4 text-left font-medium">US Size</th>
                          <th className="py-3 px-4 text-left font-medium">Waist</th>
                          <th className="py-3 px-4 text-left font-medium">Hips</th>
                          <th className="py-3 px-4 text-left font-medium">Inseam (Regular)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">XS</td>
                          <td className="py-3 px-4">0-2</td>
                          <td className="py-3 px-4">24-26</td>
                          <td className="py-3 px-4">34-36</td>
                          <td className="py-3 px-4">30</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">S</td>
                          <td className="py-3 px-4">4-6</td>
                          <td className="py-3 px-4">26-28</td>
                          <td className="py-3 px-4">36-38</td>
                          <td className="py-3 px-4">30</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">M</td>
                          <td className="py-3 px-4">8-10</td>
                          <td className="py-3 px-4">28-30</td>
                          <td className="py-3 px-4">38-40</td>
                          <td className="py-3 px-4">30</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">L</td>
                          <td className="py-3 px-4">12-14</td>
                          <td className="py-3 px-4">30-33</td>
                          <td className="py-3 px-4">40-43</td>
                          <td className="py-3 px-4">30</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">XL</td>
                          <td className="py-3 px-4">16-18</td>
                          <td className="py-3 px-4">33-36</td>
                          <td className="py-3 px-4">43-46</td>
                          <td className="py-3 px-4">30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="measurements" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>How to Measure Yourself</CardTitle>
                <CardDescription>
                  Follow these simple steps to get accurate measurements for finding your perfect size.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <Image
                      src="/placeholder.svg?height=600&width=400"
                      alt="How to measure yourself"
                      width={400}
                      height={600}
                      className="rounded-lg mx-auto"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Bust</h3>
                      <p className="text-muted-foreground">
                        Measure around the fullest part of your bust, keeping the measuring tape parallel to the floor.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Waist</h3>
                      <p className="text-muted-foreground">
                        Measure around your natural waistline, which is the narrowest part of your waist, typically
                        above your belly button.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Hips</h3>
                      <p className="text-muted-foreground">
                        Measure around the fullest part of your hips, usually about 8 inches below your waistline.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Inseam</h3>
                      <p className="text-muted-foreground">
                        Measure from the crotch to the bottom of the ankle along the inside of the leg.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Tips for Accurate Measurements</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Use a soft measuring tape for best results.</li>
                    <li>
                      Wear lightweight clothing or measure over your underwear for the most accurate measurements.
                    </li>
                    <li>Stand straight with your feet together when taking measurements.</li>
                    <li>Keep the measuring tape snug but not tight against your body.</li>
                    <li>If possible, have someone else take your measurements for you.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conversion" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>International Size Conversion</CardTitle>
                <CardDescription>
                  Use this chart to convert between US sizes and international sizing standards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-medium">US</th>
                        <th className="py-3 px-4 text-left font-medium">UK</th>
                        <th className="py-3 px-4 text-left font-medium">EU</th>
                        <th className="py-3 px-4 text-left font-medium">AUS</th>
                        <th className="py-3 px-4 text-left font-medium">IT</th>
                        <th className="py-3 px-4 text-left font-medium">FR</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">0</td>
                        <td className="py-3 px-4">4</td>
                        <td className="py-3 px-4">32</td>
                        <td className="py-3 px-4">4</td>
                        <td className="py-3 px-4">36</td>
                        <td className="py-3 px-4">34</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">2</td>
                        <td className="py-3 px-4">6</td>
                        <td className="py-3 px-4">34</td>
                        <td className="py-3 px-4">6</td>
                        <td className="py-3 px-4">38</td>
                        <td className="py-3 px-4">36</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">4</td>
                        <td className="py-3 px-4">8</td>
                        <td className="py-3 px-4">36</td>
                        <td className="py-3 px-4">8</td>
                        <td className="py-3 px-4">40</td>
                        <td className="py-3 px-4">38</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">6</td>
                        <td className="py-3 px-4">10</td>
                        <td className="py-3 px-4">38</td>
                        <td className="py-3 px-4">10</td>
                        <td className="py-3 px-4">42</td>
                        <td className="py-3 px-4">40</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">8</td>
                        <td className="py-3 px-4">12</td>
                        <td className="py-3 px-4">40</td>
                        <td className="py-3 px-4">12</td>
                        <td className="py-3 px-4">44</td>
                        <td className="py-3 px-4">42</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">10</td>
                        <td className="py-3 px-4">14</td>
                        <td className="py-3 px-4">42</td>
                        <td className="py-3 px-4">14</td>
                        <td className="py-3 px-4">46</td>
                        <td className="py-3 px-4">44</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">12</td>
                        <td className="py-3 px-4">16</td>
                        <td className="py-3 px-4">44</td>
                        <td className="py-3 px-4">16</td>
                        <td className="py-3 px-4">48</td>
                        <td className="py-3 px-4">46</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">14</td>
                        <td className="py-3 px-4">18</td>
                        <td className="py-3 px-4">46</td>
                        <td className="py-3 px-4">18</td>
                        <td className="py-3 px-4">50</td>
                        <td className="py-3 px-4">48</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">16</td>
                        <td className="py-3 px-4">20</td>
                        <td className="py-3 px-4">48</td>
                        <td className="py-3 px-4">20</td>
                        <td className="py-3 px-4">52</td>
                        <td className="py-3 px-4">50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Note on International Sizing</h3>
                  <p className="text-muted-foreground">
                    International sizing can vary between brands and countries. This chart provides general guidelines,
                    but we recommend using your measurements and our size charts for the most accurate fit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-10 rounded-lg bg-pink-50 p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Need Help Finding Your Size?</h2>
          <p className="text-muted-foreground mb-4">
            Our customer service team is here to help you find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/faqs">View FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
