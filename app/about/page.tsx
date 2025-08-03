import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-emerald-800 mb-6">About EduSpark</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make quality education accessible to everyone, everywhere. Join us in transforming
              the future of learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1681248156494-b72275ff6b51-a32CKRPvaQwoCdb64RT14RbGYTIlOk.avif"
                alt="Our team"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-emerald-800">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2020, EduSpark began with a simple vision: to democratize education and make high-quality
                learning accessible to everyone. What started as a small team of educators and technologists has grown
                into a global platform serving millions of learners worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that education is the key to unlocking human potential, and we're committed to providing the
                tools, resources, and support needed for every learner to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 border-gray-100 hover:border-lime-400 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Building a supportive global community where learners help each other grow
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-100 hover:border-lime-400 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Delivering the highest quality educational content and learning experiences
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-100 hover:border-lime-400 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Continuously improving our platform with cutting-edge technology</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-100 hover:border-lime-400 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Making quality education accessible to learners from all backgrounds</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind EduSpark</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1511629091441-ee46146481b6-XktLVXj9kpwAB66kHYuTZFRsFB95yZ.avif",
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1663050763436-818382a24bb8-t8qBYTW6ff7m9LGws4Aj46vk05Fi1s.avif",
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Education",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1559202921-0e869c50c7a0-Y9JZtvSDrPNw5OSgKsCKA8tNk2tXbR.avif",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-800 mb-2">1M+</div>
              <p className="text-gray-600">Students Worldwide</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-800 mb-2">500+</div>
              <p className="text-gray-600">Expert Instructors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-800 mb-2">1000+</div>
              <p className="text-gray-600">Courses Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-800 mb-2">95%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
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
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1683135216954-ab7130031b44-kadXSlbfWFxUWIKxYd3On7OxN9GuuM.avif)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Be part of the educational revolution and help us shape the future of learning
          </p>
          <Button className="bg-lime-400 hover:bg-lime-500 text-emerald-800 px-8 py-4 text-lg font-semibold">
            Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  )
}
