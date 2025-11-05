"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // Prevent hydration mismatch
  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-9 h-9 transition-all duration-300 ease-in-out hover:bg-accent/10"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        className={`absolute w-4 h-4 transition-all duration-300 ${
          isDark ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"
        }`}
      />
      <Moon
        className={`absolute w-4 h-4 transition-all duration-300 ${
          isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90"
        }`}
      />
    </Button>
  )
}
