import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-lime-400">
            EduSpark
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-lime-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-lime-400 transition-colors">
              About Us
            </Link>
            <Link href="/pages" className="hover:text-lime-400 transition-colors">
              Pages
            </Link>
            <Link href="/services" className="hover:text-lime-400 transition-colors">
              Services
            </Link>
            <Link href="/courses" className="hover:text-lime-400 transition-colors">
              Courses
            </Link>
            <Link href="/blog" className="hover:text-lime-400 transition-colors">
              Blog
            </Link>
          </div>
          <Link href="/register">
            <Button className="bg-lime-400 text-emerald-800 hover:bg-lime-500 font-semibold">Register</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
