import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of Online Learning: Trends to Watch in 2024",
      excerpt:
        "Discover the latest trends shaping the future of online education and how they're transforming the learning experience.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Education Technology",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1683187136506-4bf4f0d0b02f-qEhDNc5hvO30wUetm7G23hyAuKia0h.avif",
      readTime: "5 min read",
    },
    {
      title: "How to Stay Motivated While Learning Online",
      excerpt:
        "Practical tips and strategies to maintain motivation and achieve your learning goals in an online environment.",
      author: "Mike Chen",
      date: "March 12, 2024",
      category: "Learning Tips",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1682284353484-4e16001c58eb-krt5jzeF0HpM36g8tHZ6Tk64EzJoPq.avif",
      readTime: "7 min read",
    },
    {
      title: "Building a Successful Career in Data Science",
      excerpt:
        "A comprehensive guide to breaking into data science, including essential skills, tools, and career paths.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "Career Advice",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1520607162513-77705c0f0d4a-TRwQnbpYJfzKtuoz6SvJtmn5j3iNeE.avif",
      readTime: "10 min read",
    },
    {
      title: "The Power of Collaborative Learning",
      excerpt: "Explore how learning with others can enhance your educational experience and accelerate your progress.",
      author: "David Wilson",
      date: "March 8, 2024",
      category: "Learning Methods",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1682284078918-1835b0c8f7db-r8xLWjokaKJtKDlEbEgBMtA5qaWoKd.avif",
      readTime: "6 min read",
    },
    {
      title: "Web Development Trends Every Developer Should Know",
      excerpt:
        "Stay ahead of the curve with the latest web development trends, frameworks, and best practices for 2024.",
      author: "Lisa Park",
      date: "March 5, 2024",
      category: "Web Development",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1732209556836-511e26d982da-SVBJ4hLr2jnzDGT4BERhhGaoCfv1jc.avif",
      readTime: "8 min read",
    },
    {
      title: "Designing for User Experience: A Beginner's Guide",
      excerpt: "Learn the fundamentals of UX design and how to create user-centered digital experiences.",
      author: "John Smith",
      date: "March 3, 2024",
      category: "Design",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1663088865715-a0fe9b22d73a-UBhorfpc4EEh0UOgKexZbhnnvMRs3Z.avif",
      readTime: "9 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-emerald-800 mb-6">EduSpark Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, tips, and trends in education, technology, and career development
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <Badge className="bg-lime-400 text-emerald-800 mb-4">Featured Post</Badge>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1663050763436-818382a24bb8-t8qBYTW6ff7m9LGws4Aj46vk05Fi1s.avif"
                  alt="Featured post"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <Badge variant="outline" className="mb-3">
                    Education Technology
                  </Badge>
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">
                    The Future of Online Learning: Trends to Watch in 2024
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Discover the latest trends shaping the future of online education and how they're transforming the
                    learning experience. From AI-powered personalization to immersive virtual reality classrooms.
                  </p>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Sarah Johnson</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>March 15, 2024</span>
                  </div>
                  <span>5 min read</span>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Explore our latest insights and educational content</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <Image
                    src={
                      index === 0
                        ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1559202921-0e869c50c7a0-Y9JZtvSDrPNw5OSgKsCKA8tNk2tXbR.avif"
                        : index === 1
                          ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1683135216954-ab7130031b44-kadXSlbfWFxUWIKxYd3On7OxN9GuuM.avif"
                          : index === 2
                            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1546016365-9de9ac29035b-e2V6ruU4qbp6xGQylFS3eE0hNAnetq.avif"
                            : index === 3
                              ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1561089489-f13d5e730d72-LtWOl94IxVdZI44Lkjms62cqhyPjuK.avif"
                              : index === 4
                                ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1664372145396-c62e0e215a7c-9GX8glF5C09S8CmBKIUj8Cg0IbvD1F.avif"
                                : post.image || "/placeholder.svg"
                    }
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-lime-400 text-emerald-800">{post.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <Link
                        href="#"
                        className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center space-x-1"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
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
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1522648695590-c76b02bfa717-viF0JQcypS2tu5PloJemFA0FpRnDPw.avif)",
              }}
            ></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest educational insights, tips, and updates delivered to your
                inbox
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
                <Button className="bg-lime-400 hover:bg-lime-500 text-emerald-800 px-6 py-3 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find articles that match your interests</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Education Technology", count: "25 articles", color: "bg-emerald-100 text-emerald-800" },
              { name: "Career Advice", count: "18 articles", color: "bg-lime-100 text-emerald-800" },
              { name: "Learning Tips", count: "22 articles", color: "bg-emerald-100 text-emerald-800" },
              { name: "Industry Insights", count: "15 articles", color: "bg-lime-100 text-emerald-800" },
            ].map((category, index) => (
              <Card
                key={index}
                className={`${category.color} border-0 hover:shadow-lg transition-shadow cursor-pointer`}
              >
                <CardHeader className="text-center p-8">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="opacity-80">{category.count}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
