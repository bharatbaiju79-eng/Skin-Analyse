"use client"
import { LoginForm } from "./login-form"
import { GradientIllustration } from "./gradient-illustration"

export function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-secondary to-accent items-center justify-center p-8">
        <GradientIllustration />
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <LoginForm />
      </div>
    </div>
  )
}
