"use client"

import { Heart, MessageCircle, Share2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Post {
  id: number
  author: string
  avatar: string
  category: string
  title: string
  content: string
  timestamp: string
  likes: number
  comments: number
  shares: number
}

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  const categoryColors: Record<string, string> = {
    Tech: "bg-blue-100 text-blue-700",
    Sports: "bg-green-100 text-green-700",
    Academics: "bg-purple-100 text-purple-700",
    Cultural: "bg-orange-100 text-orange-700",
  }

  return (
    <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <img src={post.avatar || "/placeholder.svg"} alt={post.author} className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground">{post.author}</h3>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
              {post.category}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{post.timestamp}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-foreground mb-2">{post.title}</h2>
        <p className="text-foreground/90 leading-relaxed">{post.content}</p>
      </div>

      {/* Footer - Actions */}
      <div className="flex items-center gap-6 pt-4 border-t border-border text-muted-foreground">
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-2 transition-colors ${liked ? "text-red-500" : ""}`}
          onClick={handleLike}
        >
          <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
          <span className="text-sm">{likeCount}</span>
        </Button>

        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">{post.comments}</span>
        </Button>

        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          <span className="text-sm">{post.shares}</span>
        </Button>
      </div>
    </div>
  )
}
