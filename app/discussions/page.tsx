"use client"

import { Navbar } from "@/components/dashboard/navbar"
import { Sidebar } from "@/components/dashboard/sidebar"
import { DiscussionForum } from "@/components/discussions/discussion-forum"
import { useState } from "react"

export default function DiscussionsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex flex-col flex-1">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto">
          <DiscussionForum />
        </main>
      </div>
    </div>
  )
}
