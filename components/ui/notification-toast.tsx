"use client"

import type React from "react"
import { useEffect } from "react"
import { X, CheckCircle, Info, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export type NotificationVariant = "success" | "info" | "error"

interface NotificationToastProps {
  id: string
  variant: NotificationVariant
  title: string
  message?: string
  duration?: number
  onClose: (id: string) => void
}

export const NotificationToast: React.FC<NotificationToastProps> = ({
  id,
  variant,
  title,
  message,
  duration = 4000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id)
    }, duration)

    return () => clearTimeout(timer)
  }, [id, duration, onClose])

  const variantStyles = {
    success: {
      container: "bg-green-50 border-green-200",
      icon: "text-green-600",
      title: "text-green-900",
      message: "text-green-700",
    },
    info: {
      container: "bg-blue-50 border-blue-200",
      icon: "text-blue-600",
      title: "text-blue-900",
      message: "text-blue-700",
    },
    error: {
      container: "bg-red-50 border-red-200",
      icon: "text-red-600",
      title: "text-red-900",
      message: "text-red-700",
    },
  }

  const icons = {
    success: <CheckCircle size={20} />,
    info: <Info size={20} />,
    error: <AlertCircle size={20} />,
  }

  const styles = variantStyles[variant]

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border p-4 shadow-md backdrop-blur-sm transition-all duration-300 animate-in fade-in slide-in-from-top-2",
        styles.container,
      )}
      role="alert"
      aria-label={`${variant} notification`}
    >
      <div className={cn("flex-shrink-0 mt-0.5", styles.icon)}>{icons[variant]}</div>

      <div className="flex-1">
        <h3 className={cn("font-semibold text-sm", styles.title)}>{title}</h3>
        {message && <p className={cn("text-sm mt-1", styles.message)}>{message}</p>}
      </div>

      <button
        onClick={() => onClose(id)}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close notification"
      >
        <X size={18} />
      </button>
    </div>
  )
}
