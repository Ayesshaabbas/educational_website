import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Lock, Phone, CheckCircle } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-emerald-800 mb-6">Join EduSpark Today</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Create your account and unlock access to thousands of courses, expert instructors, and a global
                  community of learners. Start your learning journey today!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500" />
                  <span className="text-gray-700">Access to 1000+ premium courses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500" />
                  <span className="text-gray-700">Learn from industry experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500" />
                  <span className="text-gray-700">Earn recognized certificates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500" />
                  <span className="text-gray-700">Join a global learning community</span>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1508921340878-ba53e1f016ec-v8h8BYTQWBl7h7iDfg5BbuU1mvaqad.avif"
                alt="Students learning together"
                width={600}
                height={500}
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gray-100 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-emerald-800">Create Your Account</CardTitle>
              <p className="text-gray-600 mt-2">Fill in your details to get started</p>
            </CardHeader>

            <CardContent className="space-y-6">
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-emerald-800">Personal Information</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          placeholder="Enter your first name"
                          className="pl-10 py-3 border-2 border-gray-200 focus:border-lime-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          placeholder="Enter your last name"
                          className="pl-10 py-3 border-2 border-gray-200 focus:border-lime-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="pl-10 py-3 border-2 border-gray-200 focus:border-lime-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="pl-10 py-3 border-2 border-gray-200 focus:border-lime-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Account Security */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-emerald-800">Account Security</h3>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="password"
                        placeholder="Create a strong password"
                        className="pl-10 py-3 border-2 border-gray-200 focus:border-lime-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="password"
                        placeholder="Confirm your password"
                        className="pl-10 py-3 border-2 border-gray-200 focus:border-lime-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-emerald-800">Additional Information</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Country</label>
                      <Select>
                        <SelectTrigger className="py-3 border-2 border-gray-200 focus:border-lime-400">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Learning Goal</label>
                      <Select>
                        <SelectTrigger className="py-3 border-2 border-gray-200 focus:border-lime-400">
                          <SelectValue placeholder="Select your goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="career">Career Advancement</SelectItem>
                          <SelectItem value="skills">Learn New Skills</SelectItem>
                          <SelectItem value="hobby">Personal Interest</SelectItem>
                          <SelectItem value="certification">Get Certified</SelectItem>
                          <SelectItem value="business">Start a Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="terms" className="mt-1" />
                    <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                      I agree to the{" "}
                      <Link href="#" className="text-emerald-600 hover:text-emerald-700 underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-emerald-600 hover:text-emerald-700 underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox id="newsletter" className="mt-1" />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      I would like to receive educational content, tips, and special offers via email
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-emerald-800 py-4 text-lg font-semibold">
                  Create My Account
                </Button>
              </form>

              {/* Login Link */}
              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                    Sign In
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Why Join EduSpark?</h2>
            <p className="text-xl text-gray-600">Discover the benefits of being part of our learning community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Instructors",
                description: "Learn from industry professionals with real-world experience",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1663933534074-776bf384487f-GrQDgb713exM5LXTmBHcw8DFo2Oubl.avif",
              },
              {
                title: "Flexible Learning",
                description: "Study at your own pace, anytime and anywhere",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1664476552179-41179f972eed-uECIAWl7SA1A821nwFolLHYCu9epfN.avif",
              },
              {
                title: "Global Community",
                description: "Connect with learners from around the world",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1614793319738-bde496bbe85e-dC3XNPVWWiTSfru7mw4ILxyhgBf2JJ.avif",
              },
              {
                title: "Career Support",
                description: "Get guidance and support for your career goals",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1681248156494-b72275ff6b51-a32CKRPvaQwoCdb64RT14RbGYTIlOk.avif",
              },
            ].map((benefit, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl h-64 cursor-pointer">
                <Image
                  src={benefit.image || "/placeholder.svg"}
                  alt={benefit.title}
                  width={300}
                  height={256}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-white/80 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-800 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1511629091441-ee46146481b6-XktLVXj9kpwAB66kHYuTZFRsFB95yZ.avif)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Start Your Learning Journey Today</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join thousands of learners who have transformed their careers with EduSpark
          </p>
          <Button className="bg-lime-400 hover:bg-lime-500 text-emerald-800 px-8 py-4 text-lg font-semibold">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  )
}
