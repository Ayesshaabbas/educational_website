import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, CheckCircle, Users, BookOpen, Award, Star, Clock, Globe, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800 leading-tight">
                    Best Learning
                    <br />
                    <span className="text-lime-600">Education Platform</span>
                    <br />
                    in The World
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Transform your future with our comprehensive online learning platform. Access expert-led courses,
                    interactive content, and personalized learning paths designed to help you achieve your goals.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="What do you want to learn"
                      className="pl-12 py-6 text-lg border-2 border-gray-200 focus:border-lime-400"
                    />
                  </div>
                  <Button className="bg-lime-400 hover:bg-lime-500 text-emerald-800 px-8 py-6 text-lg font-semibold">
                    Search Course
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1664372145396-c62e0e215a7c-9GX8glF5C09S8CmBKIUj8Cg0IbvD1F.avif"
                      alt="Students studying together"
                      width={300}
                      height={300}
                      className="rounded-2xl object-cover w-full h-48"
                    />
                    <div className="bg-lime-400 rounded-2xl p-6 text-emerald-800">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Get 30% off on every</span>
                      </div>
                      <div className="font-semibold">1st month</div>
                      <div className="flex items-center space-x-2 mt-2">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Expert teachers</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-8">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1522648695590-c76b02bfa717-viF0JQcypS2tu5PloJemFA0FpRnDPw.avif"
                      alt="Student reading in library"
                      width={300}
                      height={400}
                      className="rounded-2xl object-cover w-full h-64"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1661638440197-e0022d9636cb-9CVHSCQdtKKTEZqNEZtl0qrbqQb2zF.avif)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Ignite Your Mind, Master New Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover a world of knowledge with our innovative learning platform designed to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-100 hover:border-lime-400 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Structured Learning</CardTitle>
                <CardDescription>
                  Follow carefully designed learning paths that take you from beginner to expert level
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-lime-400 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Collaborative Learning</CardTitle>
                <CardDescription>
                  Connect with peers, join study groups, and learn together in our interactive community
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-lime-400 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Personalized Learning</CardTitle>
                <CardDescription>
                  AI-powered recommendations and adaptive learning paths tailored to your unique needs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Your Path to Success</h2>
            <p className="text-xl text-gray-600">Choose from our wide range of expert-led courses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Web Development",
                students: "2,500+",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1661490860162-c12f6422d0d5-CRE3FQ3fGbjnXClO6EEX5oiEfUjaqE.avif",
              },
              {
                title: "Data Science",
                students: "1,800+",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1699347914988-c61ec13c99c5-zYzTpbmbF9rkjqITiZl0kb7LzNw9AZ.avif",
              },
              {
                title: "Digital Marketing",
                students: "3,200+",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1661376750933-1c35668ae114-FQl5yCkYIleURs09j84CETawWgJLxU.avif",
              },
              {
                title: "Graphic Design",
                students: "1,500+",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1664372145591-f7cc308ff5da-fpzXJeBUq9PnQwV0Q02VlvSSrKIcNp.avif",
              },
            ].map((course, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={300}
                  height={320}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>

                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-lime-400 text-emerald-800 text-xs">Popular</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                      <p className="text-white/80 text-sm">{course.students} students enrolled</p>
                    </div>

                    <button className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-full py-3 px-6 text-white font-semibold hover:bg-white/30 transition-all flex items-center justify-center space-x-2 group-hover:scale-105">
                      <span>Enroll Now</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Why Choose EduSpark?</h2>
            <p className="text-xl text-gray-600">
              We provide the best learning experience with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center relative">
              <div
                className="absolute inset-0 rounded-2xl opacity-10 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1508921340878-ba53e1f016ec-v8h8BYTQWBl7h7iDfg5BbuU1mvaqad.avif)",
                }}
              ></div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Flexible Learning</h3>
                <p className="text-gray-600">
                  Learn at your own pace with 24/7 access to course materials and lifetime access to content
                </p>
              </div>
            </div>

            <div className="text-center relative">
              <div
                className="absolute inset-0 rounded-2xl opacity-10 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1663933534074-776bf384487f-GrQDgb713exM5LXTmBHcw8DFo2Oubl.avif)",
                }}
              ></div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Global Community</h3>
                <p className="text-gray-600">
                  Join millions of learners worldwide and connect with industry professionals and experts
                </p>
              </div>
            </div>

            <div className="text-center relative">
              <div
                className="absolute inset-0 rounded-2xl opacity-10 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1664476552179-41179f972eed-uECIAWl7SA1A821nwFolLHYCu9epfN.avif)",
                }}
              ></div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Certified Courses</h3>
                <p className="text-gray-600">
                  Earn industry-recognized certificates and credentials to boost your career prospects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Select the perfect plan for your learning journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-emerald-800">Basic</CardTitle>
                <div className="text-3xl font-bold text-emerald-800 mt-4">$9.99</div>
                <p className="text-gray-600">per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span>Access to basic courses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span>Community support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span>Mobile app access</span>
                </div>
                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-lime-400 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-lime-400 text-emerald-800">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-emerald-800">Pro</CardTitle>
                <div className="text-3xl font-bold text-emerald-800 mt-4">$19.99</div>
                <p className="text-gray-600">per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span>Access to all courses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span>1-on-1 mentorship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span>Certificates included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span>Priority support</span>
                </div>
                <Button className="w-full mt-6 bg-lime-400 hover:bg-lime-500 text-emerald-800">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-emerald-800">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-emerald-800 mt-4">$49.99</div>
                <p className="text-gray-600">per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span>Everything in Pro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span>Team collaboration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span>Custom integrations</span>
                </div>
                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-800 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1614793319738-bde496bbe85e-dC3XNPVWWiTSfru7mw4ILxyhgBf2JJ.avif)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey Today?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join thousands of learners who have transformed their careers with EduSpark
          </p>
          <Button className="bg-lime-400 hover:bg-lime-500 text-emerald-800 px-8 py-4 text-lg font-semibold">
            Start Learning Now
          </Button>
        </div>
      </section>
    </div>
  )
}
