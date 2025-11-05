export function UserStats() {
  const stats = [
    { label: "Total Posts", value: "24", icon: "📝" },
    { label: "Events Joined", value: "12", icon: "🎯" },
    { label: "Badges Earned", value: "8", icon: "🏆" },
  ]

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
        >
          <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
          <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
