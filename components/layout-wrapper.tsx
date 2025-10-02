"use client"

import * as React from "react"
import { Navigation } from "./navigation"
import { ProfileSidebar } from "./profile-sidebar"

interface LayoutWrapperProps { children: React.ReactNode }

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const toggleDrawer = () => setDrawerOpen(!drawerOpen)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation now handles both mobile header/drawer and desktop nav bar */}
      <Navigation isDrawerOpen={drawerOpen} onMenuClick={toggleDrawer} />

      {/* Grid: sidebar (md+) + main */}
      <div className="mx-auto max-w-7xl grid md:grid-cols-[20rem_1fr] gap-0">
        {/* Sidebar (Desktop only) */}
        <ProfileSidebar />

        {/* Main content */}
        <main id="main" className="min-w-0 p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}