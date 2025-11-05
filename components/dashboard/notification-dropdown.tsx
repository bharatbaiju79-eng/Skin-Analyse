"use client"

import { useState } from "react"
import { Bell, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NotificationItem {
  id: string
  title: string
  message: string
  type: "info" | "success" | "alert"
  read: boolean
  timestamp: string
  avatar?: string
}

export function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: "1",
      title: "New Event Posted",
      message: "React Workshop starting tomorrow at 2 PM",
      type: "info",
      read: false,
      timestamp: "5 mins ago",
    },
    {
      id: "2",
      title: "Event Reminder",
      message: "You have a discussion starting in 30 minutes",
      type: "alert",
      read: false,
      timestamp: "30 mins ago",
    },
    {
      id: "3",
      title: "New Message",
      message: "Sarah replied to your post",
      type: "success",
      read: true,
      timestamp: "1 hour ago",
    },
    {
      id: "4",
      title: "Badge Earned",
      message: "You earned 'Active Contributor' badge",
      type: "success",
      read: true,
      timestamp: "2 hours ago",
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const clearNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200"
      case "alert":
        return "bg-red-50 border-red-200"
      case "info":
      default:
        return "bg-blue-50 border-blue-200"
    }
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-green-600"
      case "alert":
        return "text-red-600"
      case "info":
      default:
        return "text-blue-600"
    }
  }

  return (
    <div className="relative">
      {/* Notification Bell Button */}
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="relative hover:bg-accent/10">
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
      </Button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 bg-card border border-border rounded-lg shadow-lg z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Notifications</h3>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllAsRead} className="h-8 text-xs">
                  Mark all as read
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "px-4 py-3 border-b border-border last:border-b-0 transition-colors",
                    !notification.read ? "bg-accent/5" : "",
                  )}
                >
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className={cn("mt-1 w-2 h-2 rounded-full flex-shrink-0", getIconColor(notification.type))} />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground">{notification.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">{notification.timestamp}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => markAsRead(notification.id)}
                          className="h-7 w-7"
                          title="Mark as read"
                        >
                          <Check className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => clearNotification(notification.id)}
                        className="h-7 w-7"
                        title="Clear notification"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <Bell className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">No notifications</p>
              </div>
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="p-3 border-t border-border text-center">
              <Button variant="ghost" size="sm" className="w-full text-xs">
                View all notifications
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
