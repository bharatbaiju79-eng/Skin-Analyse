"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Menu, Send, Smile, Paperclip } from "lucide-react"

interface Message {
  id: number
  sender: string
  avatar: string
  text: string
  timestamp: string
  isOwn: boolean
}

const mockMessages: Record<number, Message[]> = {
  0: [
    {
      id: 1,
      sender: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      text: "Hi! How are you doing?",
      timestamp: "2:15 PM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
      text: "Hey Sarah! Doing great, just finished that chapter we discussed",
      timestamp: "2:18 PM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      text: "That was fast! Did you understand the part about the historical context?",
      timestamp: "2:20 PM",
      isOwn: false,
    },
    {
      id: 4,
      sender: "You",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
      text: "Yes, it makes so much more sense now. Can we study together?",
      timestamp: "2:25 PM",
      isOwn: true,
    },
    {
      id: 5,
      sender: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      text: "See you at the study session!",
      timestamp: "2:30 PM",
      isOwn: false,
    },
  ],
}

interface ChatWindowProps {
  conversationId: number
  onMenuClick: () => void
  isSidebarOpen: boolean
}

export function ChatWindow({ conversationId, onMenuClick, isSidebarOpen }: ChatWindowProps) {
  const [messageInput, setMessageInput] = useState("")
  const [messages, setMessages] = useState(mockMessages[conversationId] || [])

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "You",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
        text: messageInput,
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        isOwn: true,
      }
      setMessages([...messages, newMessage])
      setMessageInput("")
    }
  }

  return (
    <>
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card">
        <div className="flex items-center gap-3">
          {!isSidebarOpen && (
            <Button variant="ghost" size="icon" onClick={onMenuClick} className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          )}
          <div>
            <h2 className="font-semibold text-foreground">Sarah Chen</h2>
            <p className="text-xs text-muted-foreground">Active now</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2m0 7a1 1 0 110-2 1 1 0 010 2m0 7a1 1 0 110-2 1 1 0 010 2"
            />
          </svg>
        </Button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.isOwn ? "flex-row-reverse" : "flex-row"}`}>
            <Avatar className="h-8 w-8 flex-shrink-0">
              <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
              <AvatarFallback>{message.sender[0]}</AvatarFallback>
            </Avatar>

            <div className={`flex flex-col ${message.isOwn ? "items-end" : "items-start"}`}>
              <div
                className={`
                  max-w-xs px-4 py-2 rounded-lg break-words
                  ${
                    message.isOwn
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }
                `}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              <span className="text-xs text-muted-foreground mt-1">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-border bg-card">
        <div className="flex items-end gap-3">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Paperclip className="w-5 h-5" />
          </Button>

          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 bg-muted border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Smile className="w-5 h-5" />
          </Button>

          <Button
            size="icon"
            onClick={handleSendMessage}
            disabled={!messageInput.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </>
  )
}
