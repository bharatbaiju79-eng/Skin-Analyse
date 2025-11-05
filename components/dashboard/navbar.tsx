"use client"

import { Menu, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { NotificationDropdown } from "./notification-dropdown"
import { ThemeToggle } from "@/components/theme/theme-toggle"

interface NavbarProps {
  onMenuClick: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="border-b border-border bg-card px-6 py-3 flex items-center justify-between gap-4">
      {/* Left: Menu & Logo */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden">
          <Menu className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-bold text-primary hidden sm:block">StudHub</h1>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-md hidden sm:flex">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search posts, events, members..." className="pl-10 bg-muted border-border" />
        </div>
      </div>

      {/* Right: Icons & Avatar */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <NotificationDropdown />

        <Link href="/profile">
          <Avatar className="w-9 h-9 cursor-pointer border-2 border-primary hover:opacity-80 transition-opacity">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </nav>
  )
}
