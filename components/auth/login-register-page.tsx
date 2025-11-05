"use client"

import { useState } from "react"
import { LoginForm } from "./login-form"
import { RegisterForm } from "./register-form"
import { AuthIllustration } from "./auth-illustration"

export function LoginRegisterPage() {
  const [isRegistering, setIsRegistering] = useState(false)

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Logo/Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">{isRegistering ? "Join StudyHub" : "Welcome Back"}</h1>
            <p className="text-muted-foreground">
              {isRegistering
                ? "Create your account and start connecting with students"
                : "Sign in to your account to continue"}
            </p>
          </div>

          {/* Forms */}
          <div className="space-y-6">
            {isRegistering ? (
              <RegisterForm onSwitchToLogin={() => setIsRegistering(false)} />
            ) : (
              <LoginForm onSwitchToRegister={() => setIsRegistering(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary via-accent to-secondary items-center justify-center p-8">
        <AuthIllustration />
      </div>
    </div>
  )
}
