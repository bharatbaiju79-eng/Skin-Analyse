"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface Conversation {
  id: number
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unread: boolean
}

const conversations: Conversation[] = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    lastMessage: "See you at the study session!",
    timestamp: "2:30 PM",
    unread: true,
  },
  {
    id: 2,
    name: "Alex Rivera",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    lastMessage: "Did you get the assignment done?",
    timestamp: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    name: "Jordan Kim",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    lastMessage: "Perfect! Thanks for helping with the project",
    timestamp: "Yesterday",
    unread: false,
  },
  {
    id: 4,
    name: "Emma Davis",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    lastMessage: "Let me know if you need any notes",
    timestamp: "3 days ago",
    unread: false,
  },
  {
    id: 5,
    name: "Marcus Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    lastMessage: "Can we schedule a call tomorrow?",
    timestamp: "1 week ago",
    unread: false,
  },
]

interface ConversationsListProps {
  selectedId: number
  onSelect: (id: number) => void
  onClose: () => void
}

export function ConversationsList({ selectedId, onSelect, onClose }: ConversationsListProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-xl font-bold text-foreground">Messages</h2>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Search Bar */}
      <div className="p-3 border-b border-border">
        <input
          type="text"
          placeholder="Search conversations..."
          className="w-full px-3 py-2 bg-muted border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelect(conversation.id)}
            className={`
              w-full p-3 flex items-start gap-3 hover:bg-muted transition-colors border-b border-border
              ${selectedId === conversation.id ? "bg-muted" : ""}
            `}
          >
            <Avatar className="h-10 w-10 flex-shrink-0">
              <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
              <AvatarFallback>{conversation.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0 text-left">
              <div className="flex justify-between items-baseline gap-2">
                <h3 className={`text-sm font-${conversation.unread ? "bold" : "medium"} text-foreground truncate`}>
                  {conversation.name}
                </h3>
                <span className="text-xs text-muted-foreground flex-shrink-0">{conversation.timestamp}</span>
              </div>
              <p className="text-xs text-muted-foreground truncate mt-1">{conversation.lastMessage}</p>
            </div>

            {conversation.unread && <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />}
          </button>
        ))}
      </div>
    </div>
  )
}
