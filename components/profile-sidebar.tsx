"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Github, GraduationCap, MapPin } from "lucide-react"

export function ProfileSidebar() {
  return (
    // This sidebar is now only for desktop (md and larger)
    <aside className="hidden md:block md:sticky md:top-[52px] self-start h-[calc(100dvh-52px)] overflow-y-auto w-80 bg-white border-r border-gray-100 p-6">
      {/* Container is no longer centered */}
      <div className="flex flex-col space-y-4">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
          <Image
            src="/asian-woman-researcher-headshot.png"
            alt="Shifat E. Arman"
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Name and Title */}
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Shifat E. Arman
          </h1>
          <p className="text-gray-600 text-base">
            Assistant Professor • University of Dhaka
          </p>
        </div>

        {/* Brief Bio */}
        <div className="text-sm text-gray-700 leading-6">
          <p>AI in Healthcare | Foundation Models | Biomimetic Robotics</p>
          <p>Founding Director of CORTEX AI Lab</p>
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>Dhaka, Bangladesh</span>
        </div>

        {/* Contact Links - now a left-aligned vertical list */}
        <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
          <Link href="mailto:shifatearman@du.ac.bd" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
            <Mail className="w-4 h-4 mr-3" />
            <span>Email</span>
          </Link>
          <Link href="https://www.linkedin.com/in/shifatearman/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin className="w-4 h-4 mr-3" />
            <span>LinkedIn</span>
          </Link>
          {/* ADDED GITHUB AND SCHOLAR */}
          <Link href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
            <Github className="w-4 h-4 mr-3" />
            <span>GitHub</span>
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
            <GraduationCap className="w-4 h-4 mr-3" />
            <span>Google Scholar</span>
          </Link>
        </div>
      </div>
    </aside>
  )
}