"use client"

interface CategorySidebarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategorySidebar({ selectedCategory, onCategoryChange }: CategorySidebarProps) {
  const categories = ["All", "Tech", "Sports", "Academics", "Cultural"]

  return (
    <div className="hidden lg:block w-56 border-r border-border bg-sidebar p-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground font-medium"
                : "text-foreground hover:bg-secondary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-8 pt-6 border-t border-sidebar-border space-y-3">
        <div>
          <p className="text-sm text-muted-foreground">Total Posts</p>
          <p className="text-2xl font-bold text-foreground">1.2K</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Active Members</p>
          <p className="text-2xl font-bold text-foreground">340</p>
        </div>
      </div>
    </div>
  )
}
