"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface NewPostModalProps {
  onClose: () => void
  onSubmit: (title: string, content: string, category: string) => void
}

export function NewPostModal({ onClose, onSubmit }: NewPostModalProps) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("Tech")

  const categories = ["Tech", "Sports", "Academics", "Cultural"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() && content.trim()) {
      onSubmit(title, content, category)
      setTitle("")
      setContent("")
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
            <h2 className="text-2xl font-bold text-foreground">Create New Post</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title..."
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your thoughts, ask questions, or start a discussion..."
                rows={6}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={!title.trim() || !content.trim()}>
                Post to Discussion
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
