"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"
import { MainFeed } from "./main-feed"
import { RightSidebar } from "./right-sidebar"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

interface DashboardProps {
  children?: React.ReactNode
}

export function Dashboard({ children }: DashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-muted border-t-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content Area - Three Column Layout */}
        <div className="flex flex-1 overflow-hidden">
          {children ? (
            <div className="flex-1 overflow-y-auto">{children}</div>
          ) : (
            <>
              {/* Main Feed - Center */}
              <MainFeed />

              {/* Right Sidebar - Desktop only */}
              <div className="hidden lg:flex w-80 border-l border-border bg-card">
                <RightSidebar />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
