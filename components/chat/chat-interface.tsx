"use client"

import { useState } from "react"
import { ConversationsList } from "./conversations-list"
import { ChatWindow } from "./chat-window"

export function ChatInterface() {
  const [selectedConversation, setSelectedConversation] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen w-full bg-background">
      {/* Left Sidebar - Conversations */}
      <div
        className={`
        ${isSidebarOpen ? "w-full md:w-80" : "w-0"}
        transition-all duration-300 border-r border-border overflow-hidden
        bg-card flex flex-col
      `}
      >
        <ConversationsList
          selectedId={selectedConversation}
          onSelect={setSelectedConversation}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Main Chat Window */}
      <div className="flex-1 flex flex-col min-w-0">
        <ChatWindow
          conversationId={selectedConversation}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </div>
  )
}
