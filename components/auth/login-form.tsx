"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/hooks/use-auth"

interface LoginFormProps {
  onSwitchToRegister: () => void
}

export function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const result = await login(email, password)
    if (!result.success) {
      setError(result.error || "Login failed")
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="name@university.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-muted border-0 text-foreground placeholder:text-muted-foreground h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-muted border-0 text-foreground placeholder:text-muted-foreground h-11"
        />
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded border-border" />
          <span className="text-muted-foreground">Remember me</span>
        </label>
        <a href="#" className="text-primary hover:text-accent font-medium transition-colors">
          Forgot password?
        </a>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all"
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-background text-muted-foreground">Or</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button type="button" variant="outline" className="h-11 border-border hover:bg-muted bg-transparent">
          Google
        </Button>
        <Button type="button" variant="outline" className="h-11 border-border hover:bg-muted bg-transparent">
          GitHub
        </Button>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-primary hover:text-accent font-medium transition-colors"
        >
          Sign up
        </button>
      </p>
    </form>
  )
}
