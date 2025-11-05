"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check localStorage and system preference
    const saved = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const shouldBeDark = saved ? saved === "dark" : prefersDark
    setIsDark(shouldBeDark)

    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    setMounted(true)
  }, [])

  return <>{children}</>
}
