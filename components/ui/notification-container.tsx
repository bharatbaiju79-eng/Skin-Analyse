"use client"

import React, { useState, useCallback } from "react"
import { NotificationToast, type NotificationVariant } from "./notification-toast"

interface Notification {
  id: string
  variant: NotificationVariant
  title: string
  message?: string
  duration?: number
}

export const NotificationContainer: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = useCallback(
    (variant: NotificationVariant, title: string, message?: string, duration?: number) => {
      const id = `toast-${Date.now()}-${Math.random()}`
      const notification: Notification = { id, variant, title, message, duration }
      setNotifications((prev) => [...prev, notification])
      return id
    },
    [],
  )

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }, [])

  // Expose addNotification globally for easy access
  React.useEffect(() => {
    ;(window as any).showNotification = addNotification
  }, [addNotification])

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-md pointer-events-none">
      {notifications.map((notification) => (
        <div key={notification.id} className="pointer-events-auto">
          <NotificationToast
            id={notification.id}
            variant={notification.variant}
            title={notification.title}
            message={notification.message}
            duration={notification.duration}
            onClose={removeNotification}
          />
        </div>
      ))}
    </div>
  )
}
