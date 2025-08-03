import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Award, BookOpen, MessageCircle, Settings } from "lucide-react"

export default function PagesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-emerald-800 mb-6">All Pages</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore all the pages and resources available on EduSpark. Find everything you need for your learning
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pages Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Main Pages</h2>
            <p className="text-xl text-gray-600">Navigate through our main sections</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/">
              <Card className="border-2 border-gray-100 hover:border-lime-400 transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-200 transition-colors">
                    <BookOpen className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-800 text-center">Home</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Discover our platform, featured courses, and get started with your learning journey
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about">
              <Card className="border-2 border-gray-100 hover:border-lime-400 transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-200 transition-colors">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-800 text-center">About Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">Learn about our mission, values, team, and the story behind EduSpark</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services">
              <Card className="border-2 border-gray-100 hover:border-lime-400 transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-200 transition-colors">
                    <Settings className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-800 text-center">Services</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">Explore our comprehensive educational services and support offerings</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/courses">
              <Card className="border-2 border-gray-100 hover:border-lime-400 transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-200 transition-colors">
                    <Award className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-800 text-center">Courses</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Browse our extensive catalog of courses across various subjects and skill levels
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog">
              <Card className="border-2 border-gray-100 hover:border-lime-400 transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-200 transition-colors">
                    <FileText className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-800 text-center">Blog</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Read the latest insights, tips, and trends in education and technology
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/register">
              <Card className="border-2 border-gray-100 hover:border-lime-400 transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-200 transition-colors">
                    <MessageCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-800 text-center">Register</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Create your account and start your personalized learning journey today
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-600">More helpful pages and resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Help Center",
                description: "Find answers to common questions",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1661638440197-e0022d9636cb-9CVHSCQdtKKTEZqNEZtl0qrbqQb2zF.avif",
              },
              {
                title: "Community",
                description: "Connect with fellow learners",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1661490860162-c12f6422d0d5-CRE3FQ3fGbjnXClO6EEX5oiEfUjaqE.avif",
              },
              {
                title: "Certificates",
                description: "View and download your certificates",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1699347914988-c61ec13c99c5-zYzTpbmbF9rkjqITiZl0kb7LzNw9AZ.avif",
              },
              {
                title: "Career Center",
                description: "Explore career opportunities",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1661376750933-1c35668ae114-FQl5yCkYIleURs09j84CETawWgJLxU.avif",
              },
            ].map((resource, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl h-64 cursor-pointer">
                <Image
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  width={300}
                  height={256}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-white/80 text-sm">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600">Frequently accessed pages</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">Student Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Student Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    My Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Progress Tracking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Study Groups
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-lime-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Technical Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Account Issues
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Billing Support
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-800 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1664372145591-f7cc308ff5da-fpzXJeBUq9PnQwV0Q02VlvSSrKIcNp.avif)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Explore our platform and discover the perfect learning path for you
          </p>
          <Button className="bg-lime-400 hover:bg-lime-500 text-emerald-800 px-8 py-4 text-lg font-semibold">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  )
}
