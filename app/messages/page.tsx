"use client"

import { useState } from "react"
import { Navbar } from "@/components/dashboard/navbar"
import { Sidebar } from "@/components/dashboard/sidebar"
import { ChatInterface } from "@/components/chat/chat-interface"

export default function MessagesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Chat Interface - Full Width */}
        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </div>
    </div>
  )
}
