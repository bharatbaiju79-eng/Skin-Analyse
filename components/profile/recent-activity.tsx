export function RecentActivity() {
  const activities = [
    {
      type: "post",
      title: "How to learn React in 2024?",
      time: "2 days ago",
      icon: "📝",
    },
    {
      type: "event",
      title: "Joined Web Development Workshop",
      time: "1 week ago",
      icon: "🎯",
    },
    {
      type: "comment",
      title: "Commented on 'Best programming languages'",
      time: "3 days ago",
      icon: "💬",
    },
    {
      type: "post",
      title: "Tips for coding interviews",
      time: "1 week ago",
      icon: "📝",
    },
    {
      type: "event",
      title: "Attended AI & Machine Learning Seminar",
      time: "2 weeks ago",
      icon: "🎯",
    },
  ]

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-b-0 last:pb-0">
            <div className="text-2xl">{activity.icon}</div>
            <div className="flex-1">
              <p className="text-foreground font-medium">{activity.title}</p>
              <p className="text-muted-foreground text-sm mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
