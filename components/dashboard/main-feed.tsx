"use client"

import { Heart, MessageCircle, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function MainFeed() {
  const posts = [
    {
      id: 1,
      author: "Sarah Chen",
      handle: "@sarahchen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content: "Just finished my algorithms project! Who else is grinding through DSA? Let's study together 📚",
      timestamp: "2 hours ago",
      likes: 124,
      comments: 23,
      liked: false,
    },
    {
      id: 2,
      author: "Marcus Rodriguez",
      handle: "@mrodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      content: "Campus hackathon registration is open! First 50 teams get free merchandise. Who's joining? 🚀",
      timestamp: "4 hours ago",
      likes: 456,
      comments: 89,
      liked: false,
    },
    {
      id: 3,
      author: "Emma Wilson",
      handle: "@emmaw",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      content:
        "Looking for study buddies for the upcoming midterms. Coffee study sessions every evening at the library ☕",
      timestamp: "6 hours ago",
      likes: 234,
      comments: 45,
      liked: false,
    },
  ]

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Create Post Box */}
        <Card className="m-4 p-4 sticky top-0 z-10 bg-card border border-border">
          <div className="flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Input placeholder="What's on your mind, student?" className="bg-muted border-border rounded-full mb-3" />
              <div className="flex gap-2 justify-end">
                <Button variant="outline" size="sm">
                  Add Photo
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Post
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-4 p-4">
          {posts.map((post) => (
            <Card key={post.id} className="border border-border hover:border-primary/30 transition-colors">
              {/* Post Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={post.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{post.author}</h3>
                      <span className="text-muted-foreground text-sm">{post.handle}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4">
                <p className="text-foreground text-base leading-relaxed">{post.content}</p>
              </div>

              {/* Post Stats */}
              <div className="px-4 py-2 border-t border-border border-b border-border text-sm text-muted-foreground flex gap-4">
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
              </div>

              {/* Post Actions */}
              <div className="p-2 flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 justify-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Heart className="w-4 h-4" />
                  <span>Like</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 justify-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Comment</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 justify-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
