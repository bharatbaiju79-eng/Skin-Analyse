"use client"

import { Calendar, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RightSidebar() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Web Dev Workshop",
      date: "Today",
      time: "3:00 PM",
      icon: "🌐",
    },
    {
      id: 2,
      title: "Study Group Meetup",
      date: "Tomorrow",
      time: "5:00 PM",
      icon: "📚",
    },
    {
      id: 3,
      title: "Hackathon Finals",
      date: "Mar 25",
      time: "2:00 PM",
      icon: "🚀",
    },
  ]

  const topMembers = [
    {
      id: 1,
      name: "Alex Kumar",
      role: "Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      id: 2,
      name: "Jessica Lee",
      role: "Designer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
    },
    {
      id: 3,
      name: "Chris Anderson",
      role: "PM",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris",
    },
  ]

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {/* Upcoming Events */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">Upcoming Events</h3>
        </div>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="p-3 border border-border hover:border-primary/30 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl">{event.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">{event.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {event.date} at {event.time}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Top Members */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">Top Members</h3>
        </div>
        <div className="space-y-3">
          {topMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="ml-2 bg-transparent">
                Follow
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
