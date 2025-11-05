"use client"

import { useState } from "react"
import { Plus, CalendarIcon, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EventCard } from "./event-card"
import { EventCalendar } from "./event-calendar"

const categories = ["All", "Workshops", "Seminars", "Cultural", "Academic"]

const sampleEvents = [
  {
    id: 1,
    title: "React Advanced Patterns Workshop",
    category: "Workshops",
    date: "Nov 15, 2025",
    time: "2:00 PM",
    location: "Tech Building - Room 201",
    attendees: 42,
    image: "/react-workshop.jpg",
  },
  {
    id: 2,
    title: "AI & Machine Learning Seminar",
    category: "Seminars",
    date: "Nov 18, 2025",
    time: "3:30 PM",
    location: "Auditorium A",
    attendees: 156,
    image: "/ai-seminar.jpg",
  },
  {
    id: 3,
    title: "Diwali Celebration Festival",
    category: "Cultural",
    date: "Nov 20, 2025",
    time: "5:00 PM",
    location: "Campus Garden",
    attendees: 300,
    image: "/diwali-celebration.jpg",
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    category: "Workshops",
    date: "Nov 22, 2025",
    time: "10:00 AM",
    location: "Tech Building - Lab 1",
    attendees: 65,
    image: "/web-development.jpg",
  },
  {
    id: 5,
    title: "Career Guidance Talk",
    category: "Academic",
    date: "Nov 25, 2025",
    time: "4:00 PM",
    location: "Conference Hall",
    attendees: 128,
    image: "/career-talk.jpg",
  },
  {
    id: 6,
    title: "Python Data Science Workshop",
    category: "Workshops",
    date: "Nov 27, 2025",
    time: "2:00 PM",
    location: "Tech Building - Room 305",
    attendees: 54,
    image: "/python-data-science.jpg",
  },
]

export function EventsInterface() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewType, setViewType] = useState<"grid" | "calendar">("grid")

  const filteredEvents =
    selectedCategory === "All" ? sampleEvents : sampleEvents.filter((event) => event.category === selectedCategory)

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Upcoming Events</h1>
            <p className="text-muted-foreground mt-1">Discover and join events happening around campus</p>
          </div>
          <Button className="w-full md:w-auto gap-2 bg-blue-600 hover:bg-blue-700">
            <Plus className="w-5 h-5" />
            Create Event
          </Button>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 justify-end">
          <Button
            variant={viewType === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewType("grid")}
            className="gap-2"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden sm:inline">Grid</span>
          </Button>
          <Button
            variant={viewType === "calendar" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewType("calendar")}
            className="gap-2"
          >
            <CalendarIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Calendar</span>
          </Button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto p-6">
        {viewType === "grid" ? (
          <>
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-64">
                <p className="text-muted-foreground text-lg">No events found in this category</p>
              </div>
            )}
          </>
        ) : (
          <EventCalendar events={filteredEvents} />
        )}
      </div>
    </div>
  )
}
