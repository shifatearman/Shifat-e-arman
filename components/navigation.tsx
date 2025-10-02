"use client"

import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Mail, Linkedin, Github, GraduationCap } from "lucide-react"
import Image from "next/image"

const navigationItems = [
  { name: "About", href: "#about" },
  { name: "News", href: "#news" },
  { name: "Publications", href: "#publications" },
  { name: "Fundings", href: "#fundings" },
  { name: "Collaborations", href: "#collaborations" },
  { name: "Education", href: "#education" },
  { name: "Teaching", href: "#teaching" },
]

export function Navigation({
  isDrawerOpen,
  onMenuClick,
}: {
  isDrawerOpen: boolean
  onMenuClick: () => void
}) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
    if (isDrawerOpen) onMenuClick()
  }

  return (
    <>
      {/* --- Mobile Header --- */}
      <header className="md:hidden sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
              <Image
                src="/asian-woman-researcher-headshot.png"
                alt="Shifat E. Arman"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div>
                <span className="font-semibold text-gray-900">Shifat E. Arman</span>
                <span className="text-sm text-gray-600"><br/> Assistant Professor, University of Dhaka</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 mt-1">
                <Link href="mailto:shifatearman@du.ac.bd" aria-label="Email"><Mail className="h-4 w-4" /></Link>
                <Link href="https://www.linkedin.com/in/shifatearman/" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></Link>
                <Link href="#" aria-label="GitHub"><Github className="h-4 w-4" /></Link>
                <Link href="#" aria-label="Google Scholar"><GraduationCap className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={onMenuClick}
            className="p-2 rounded hover:bg-gray-100 self-center"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>
      
      {/* --- Mobile Navigation Drawer --- */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40" onClick={onMenuClick} />
          <div className="relative z-10 h-full w-72 max-w-[80vw] bg-white p-6 shadow-xl animate-in slide-in-from-left">
            <button
              aria-label="Close"
              className="absolute top-3 right-3 p-2 rounded hover:bg-gray-100"
              onClick={onMenuClick}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex flex-col space-y-2 mt-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- Desktop Sticky Navigation --- */}
      <nav className="hidden md:block border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex items-center gap-3 py-2">
            <div className="flex-1 overflow-x-auto no-scrollbar">
              <div className="flex justify-center gap-4 sm:gap-6 whitespace-nowrap">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "py-2 sm:py-3 px-1 border-b-2 font-medium text-sm transition-colors",
                      "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}