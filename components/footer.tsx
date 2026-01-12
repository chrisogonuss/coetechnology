"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-[#111827] text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">COE Technology</h3>
            <p className="mb-4 text-gray-400">
              Creating exceptional web experiences that drive results for businesses of all sizes.
            </p>
            <button onClick={scrollToTop} className="flex items-center text-sm text-[#22C55E] hover:underline">
              Back to top <ArrowUp className="ml-1 h-4 w-4" />
            </button>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  Responsive Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 transition-colors hover:text-white">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 transition-colors hover:text-white">
                  Testimonials
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  Careers
                </Link>
              </li> */}
              <li>
                <Link href="#contact" className="text-gray-400 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Newsletter</h4>
            <p className="mb-4 text-gray-400">Subscribe to our newsletter for the latest news and insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border-0 bg-gray-700 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
              />
              <button className="rounded-r-md bg-[#22C55E] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#22C55E]/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} COE Technology. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
