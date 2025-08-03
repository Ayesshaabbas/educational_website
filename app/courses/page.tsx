import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Star, Clock, Users, Filter } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      title: "Complete Web Development Bootcamp",
      instructor: "John Smith",
      duration: "40 hours",
      students: "2,500+",
      rating: 4.8,
      price: "$99",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1661638440197-e0022d9636cb-9CVHSCQdtKKTEZqNEZtl0qrbqQb2zF.avif",
      category: "Web Development",
      level: "Beginner",
    },
    {
      title: "Data Science with Python",
      instructor: "Sarah Johnson",
      duration: "35 hours",
      students: "1,800+",
      rating: 4.9,
      price: "$129",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1661490860162-c12f6422d0d5-CRE3FQ3fGbjnXClO6EEX5oiEfUjaqE.avif",
      category: "Data Science",
      level: "Intermediate",
    },
    {
      title: "Digital Marketing Mastery",
      instructor: "Mike Chen",
      duration: "25 hours",
      students: "3,200+",
      rating: 4.7,
      price: "$79",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1699347914988-c61ec13c99c5-zYzTpbmbF9rkjqITiZl0kb7LzNw9AZ.avif",
      category: "Marketing",
      level: "Beginner",
    },
    {
      title: "UI/UX Design Fundamentals",
      instructor: "Emily Rodriguez",
      duration: "30 hours",
      students: "1,500+",
      rating: 4.8,
      price: "$89",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1661376750933-1c35668ae114-FQl5yCkYIleURs09j84CETawWgJLxU.avif",
      category: "Design",
      level: "Beginner",
    },
    {
      title: "Advanced JavaScript Concepts",
      instructor: "David Wilson",
      duration: "45 hours",
      students: "2,100+",
      rating: 4.9,
      price: "$149",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1664372145591-f7cc308ff5da-fpzXJeBUq9PnQwV0Q02VlvSSrKIcNp.avif",
      category: "Programming",
      level: "Advanced",
    },
    {
      title: "Machine Learning Basics",
      instructor: "Lisa Park",
      duration: "50 hours",
      students: "1,900+",
      rating: 4.8,
      price: "$159",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1508921340878-ba53e1f016ec-v8h8BYTQWBl7h7iDfg5BbuU1mvaqad.avif",
      category: "AI/ML",
      level: "Intermediate",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-emerald-800 mb-6">Explore Our Courses</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover thousands of courses taught by industry experts. Learn new skills, advance your career, and
              achieve your goals with our comprehensive course catalog.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search for courses..."
                    className="pl-12 py-6 text-lg border-2 border-gray-200 focus:border-lime-400"
                  />
                </div>
                <Button className="bg-lime-400 hover:bg-lime-500 text-emerald-800 px-8 py-6 text-lg font-semibold">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-lime-100">
                All Categories
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-lime-100">
                Web Development
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-lime-100">
                Data Science
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-lime-100">
                Design
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-lime-100">
                Marketing
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-lime-100">
                Programming
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-lime-400 text-emerald-800">{course.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90">
                      {course.level}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-800 mb-2 line-clamp-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm">by {course.instructor}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                        <span className="text-sm text-gray-500">({course.students.replace("+", "")} reviews)</span>
                      </div>
                      <div className="text-2xl font-bold text-emerald-800">{course.price}</div>
                    </div>

                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Enroll Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="px-8 py-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
            >
              Load More Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Popular Categories</h2>
            <p className="text-xl text-gray-600">Explore courses by category</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Web Development",
                courses: "150+ courses",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1663933534074-776bf384487f-GrQDgb713exM5LXTmBHcw8DFo2Oubl.avif",
              },
              {
                name: "Data Science",
                courses: "80+ courses",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1664476552179-41179f972eed-uECIAWl7SA1A821nwFolLHYCu9epfN.avif",
              },
              {
                name: "Digital Marketing",
                courses: "120+ courses",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1614793319738-bde496bbe85e-dC3XNPVWWiTSfru7mw4ILxyhgBf2JJ.avif",
              },
              {
                name: "UI/UX Design",
                courses: "90+ courses",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1681248156494-b72275ff6b51-a32CKRPvaQwoCdb64RT14RbGYTIlOk.avif",
              },
            ].map((category, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl h-64 cursor-pointer">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={300}
                  height={256}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/80">{category.courses}</p>
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
          <h2 className="text-4xl font-bold mb-4">Start Learning Today</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join millions of learners and take the next step in your career
          </p>
          <Button className="bg-lime-400 hover:bg-lime-500 text-emerald-800 px-8 py-4 text-lg font-semibold">
            Browse All Courses
          </Button>
        </div>
      </section>
    </div>
  )
}
