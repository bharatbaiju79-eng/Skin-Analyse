"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { CategorySidebar } from "./category-sidebar"
import { PostCard } from "./post-card"
import { NewPostModal } from "./new-post-modal"

export function DiscussionForum() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Alex Kumar",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      category: "Tech",
      title: "Best practices for React performance optimization",
      content:
        "Just finished reading about React optimization techniques. What are your favorite performance tips? I'm particularly interested in memoization strategies.",
      timestamp: "2 hours ago",
      likes: 245,
      comments: 18,
      shares: 12,
    },
    {
      id: 2,
      author: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      category: "Academics",
      title: "Study tips for finals week",
      content:
        "Finals are coming up! Let's share study strategies that work. I've been using spaced repetition and it's helping a lot.",
      timestamp: "4 hours ago",
      likes: 189,
      comments: 34,
      shares: 28,
    },
    {
      id: 3,
      author: "Mike Sports",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      category: "Sports",
      title: "Football match this Saturday",
      content:
        "Anyone interested in playing football this Saturday? We're meeting at the campus ground at 4 PM. All skill levels welcome!",
      timestamp: "6 hours ago",
      likes: 156,
      comments: 42,
      shares: 15,
    },
    {
      id: 4,
      author: "Priya Verma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      category: "Cultural",
      title: "Diwali celebration planning",
      content:
        "Let's organize an amazing Diwali celebration on campus! We can have food, decorations, and cultural performances. Who wants to help?",
      timestamp: "1 day ago",
      likes: 312,
      comments: 67,
      shares: 45,
    },
    {
      id: 5,
      author: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      category: "Tech",
      title: "Web3 and blockchain discussion",
      content:
        "With crypto gaining momentum, let's discuss Web3 development. What projects are you working on or interested in?",
      timestamp: "1 day ago",
      likes: 198,
      comments: 51,
      shares: 22,
    },
  ])

  const [showNewPostModal, setShowNewPostModal] = useState(false)

  const filteredPosts = selectedCategory === "All" ? posts : posts.filter((post) => post.category === selectedCategory)

  const handleNewPost = (title: string, content: string, category: string) => {
    const newPost = {
      id: posts.length + 1,
      author: "Your Name",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
      category,
      title,
      content,
      timestamp: "now",
      likes: 0,
      comments: 0,
      shares: 0,
    }
    setPosts([newPost, ...posts])
    setShowNewPostModal(false)
  }

  return (
    <div className="flex h-full">
      {/* Category Sidebar */}
      <CategorySidebar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

      {/* Main Discussion Area */}
      <div className="flex-1 p-6 md:p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-foreground mb-2">Discussions</h1>
          <p className="text-muted-foreground mb-8">
            Share ideas, ask questions, and connect with your student community
          </p>

          {/* Posts List */}
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating New Post Button */}
      <Button
        onClick={() => setShowNewPostModal(true)}
        className="fixed bottom-8 right-8 rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all z-50"
      >
        <Plus className="w-6 h-6" />
      </Button>

      {/* New Post Modal */}
      {showNewPostModal && <NewPostModal onClose={() => setShowNewPostModal(false)} onSubmit={handleNewPost} />}
    </div>
  )
}
