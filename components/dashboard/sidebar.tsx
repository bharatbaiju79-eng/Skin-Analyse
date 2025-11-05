"use client"

import { Home, Calendar, MessageSquare, MessageCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"

interface SidebarProps {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname()
  const { logout } = useAuth()

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Calendar, label: "Events", href: "/events" },
    { icon: MessageSquare, label: "Messages", href: "/messages" },
    { icon: MessageCircle, label: "Discussions", href: "/discussions" },
  ]

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-64 border-r border-border bg-sidebar flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-2xl font-bold text-sidebar-primary">StudHub</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <Button
                variant={isActive(item.href) ? "default" : "ghost"}
                className="w-full justify-start gap-3 text-base"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Button>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-sidebar-border">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full justify-start gap-3 bg-transparent hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar - Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
            <div className="p-6 border-b border-sidebar-border">
              <h1 className="text-2xl font-bold text-sidebar-primary">StudHub</h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              {navItems.map((item, idx) => (
                <Link key={idx} href={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className="w-full justify-start gap-3 text-base"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-sidebar-border">
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full justify-start gap-3 bg-transparent hover:bg-destructive/10 hover:text-destructive"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
