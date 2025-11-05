"use client"

import { useState } from "react"
import { Navbar } from "@/components/dashboard/navbar"
import { Sidebar } from "@/components/dashboard/sidebar"
import { EventsInterface } from "@/components/events/events-interface"

export default function EventsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Events Interface - Full Width */}
        <div className="flex-1 overflow-auto">
          <EventsInterface />
        </div>
      </div>
    </div>
  )
}
