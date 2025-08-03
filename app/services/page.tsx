import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Headphones, Video, FileText, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-emerald-800 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational services designed to support your learning journey from start to finish
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-100 hover:border-lime-400 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800 text-2xl">Online Courses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Access thousands of high-quality courses across various subjects, taught by industry experts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-lime-500" />
                    <span className="text-sm">Self-paced learning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-lime-500" />
                    <span className="text-sm">Lifetime access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-lime-500" />
                    <span className="text-sm">Mobile compatibility</span>
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Explore Courses</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-lime-400 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800 text-2xl">1-on-1 Mentoring</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Get personalized guidance from experienced mentors to accelerate your learning journey.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-lime-500" />
                    <span className="text-sm">Expert mentors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-lime-500" />
                    <span className="text-sm">Flexible scheduling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-lime-500" />
                    <span className="text-sm">Career guidance</span>
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Book Session</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-lime-400 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800 text-2xl">Certification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Earn industry-recognized certificates to validate your skills and boost your career.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-lime-500" />
                    <span className="text-sm">Industry recognized</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-lime-500" />
                    <span className="text-sm">Digital certificates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-lime-500" />
                    <span className="text-sm">LinkedIn integration</span>
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Certificates</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">More ways we support your learning journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1546016365-9de9ac29035b-e2V6ruU4qbp6xGQylFS3eE0hNAnetq.avif"
                alt="24/7 Support"
                width={400}
                height={320}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white text-center">
                <Headphones className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
                <p className="text-white/80">Get help whenever you need it with our round-the-clock support team</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1561089489-f13d5e730d72-LtWOl94IxVdZI44Lkjms62cqhyPjuK.avif"
                alt="Live Sessions"
                width={400}
                height={320}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white text-center">
                <Video className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Live Sessions</h3>
                <p className="text-white/80">Join interactive live sessions with instructors and fellow students</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1664372145396-c62e0e215a7c-9GX8glF5C09S8CmBKIUj8Cg0IbvD1F.avif"
                alt="Study Materials"
                width={400}
                height={320}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white text-center">
                <FileText className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Study Materials</h3>
                <p className="text-white/80">Access comprehensive study materials, notes, and resources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <Badge className="mx-auto mb-4 bg-gray-100 text-gray-800">Starter</Badge>
                <CardTitle className="text-emerald-800 text-2xl">Basic Package</CardTitle>
                <div className="text-3xl font-bold text-emerald-800 mt-4">$29/month</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    <span>Access to basic courses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    <span>Community support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    <span>Basic certificates</span>
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-lime-400 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-lime-400 text-emerald-800">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <Badge className="mx-auto mb-4 bg-lime-100 text-emerald-800">Professional</Badge>
                <CardTitle className="text-emerald-800 text-2xl">Pro Package</CardTitle>
                <div className="text-3xl font-bold text-emerald-800 mt-4">$79/month</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    <span>All courses access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    <span>1-on-1 mentoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    <span>Premium certificates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-emerald-800">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <Badge className="mx-auto mb-4 bg-emerald-100 text-emerald-800">Enterprise</Badge>
                <CardTitle className="text-emerald-800 text-2xl">Enterprise Package</CardTitle>
                <div className="text-3xl font-bold text-emerald-800 mt-4">$199/month</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    <span>Custom courses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    <span>Team management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    <span>Analytics dashboard</span>
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Contact Sales</Button>
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
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1522648695590-c76b02bfa717-viF0JQcypS2tu5PloJemFA0FpRnDPw.avif)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Choose the service that best fits your learning goals and start your journey today
          </p>
          <Button className="bg-lime-400 hover:bg-lime-500 text-emerald-800 px-8 py-4 text-lg font-semibold">
            Explore Services
          </Button>
        </div>
      </section>
    </div>
  )
}
