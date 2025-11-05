"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RegisterFormProps {
  onSwitchToLogin: () => void
}

export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    // Handle registration logic here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-sm font-medium">
          Full Name
        </Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="bg-muted border-0 text-foreground placeholder:text-muted-foreground h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          University Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@university.edu"
          value={formData.email}
          onChange={handleChange}
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
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
          className="bg-muted border-0 text-foreground placeholder:text-muted-foreground h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-sm font-medium">
          Confirm Password
        </Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="bg-muted border-0 text-foreground placeholder:text-muted-foreground h-11"
        />
      </div>

      <div className="flex items-start gap-2">
        <input type="checkbox" id="terms" className="w-4 h-4 rounded border-border mt-1" required />
        <label htmlFor="terms" className="text-sm text-muted-foreground">
          I agree to the{" "}
          <a href="#" className="text-primary hover:text-accent font-medium">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:text-accent font-medium">
            Privacy Policy
          </a>
        </label>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all"
      >
        {isLoading ? "Creating account..." : "Create Account"}
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
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-primary hover:text-accent font-medium transition-colors"
        >
          Sign in
        </button>
      </p>
    </form>
  )
}
