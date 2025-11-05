"use client"

import { Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EventCardProps {
  event: {
    id: number
    title: string
    category: string
    date: string
    time: string
    location: string
    attendees: number
    image: string
  }
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Event Image */}
      <div className="relative h-40 w-full bg-gradient-to-br from-blue-400 to-violet-500 overflow-hidden">
        <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-block px-3 py-1 bg-white/90 text-blue-700 text-xs font-semibold rounded-full">
            {event.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-foreground text-lg line-clamp-2">{event.title}</h3>

        {/* Event Details */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600" />
            <span>{event.attendees} attending</span>
          </div>
        </div>

        {/* Register Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Register</Button>
      </div>
    </div>
  )
}
