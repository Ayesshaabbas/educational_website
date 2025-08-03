import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-lime-400 mb-4">EduSpark</div>
            <p className="text-emerald-200 mb-4">
              Empowering learners worldwide with quality education and innovative learning experiences.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-emerald-200">
              <li>
                <Link href="/about" className="hover:text-lime-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-lime-400">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-lime-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-lime-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-emerald-200">
              <li>
                <Link href="#" className="hover:text-lime-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-lime-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-lime-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-lime-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-emerald-200">
              <li>
                <Link href="#" className="hover:text-lime-400">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-lime-400">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-lime-400">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-lime-400">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-700 mt-12 pt-8 text-center text-emerald-200">
          <p>&copy; 2024 EduSpark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
