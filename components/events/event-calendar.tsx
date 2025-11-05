"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CalendarEvent {
  id: number
  title: string
  category: string
  date: string
  time: string
  location: string
  attendees: number
  image: string
}

interface EventCalendarProps {
  events: CalendarEvent[]
}

export function EventCalendar({ events }: EventCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1))

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const parseEventDate = (dateStr: string) => {
    const [monthStr, dayStr] = dateStr.split(" ")
    const months: { [key: string]: number } = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    }
    return Number.parseInt(dayStr)
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const daysArray = Array(firstDay)
    .fill(null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1))

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const currentMonth = monthNames[currentDate.getMonth()]
  const currentYear = currentDate.getFullYear()

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const getEventsForDay = (day: number) => {
    return events.filter((event) => {
      const eventDay = parseEventDate(event.date)
      return eventDay === day
    })
  }

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            {currentMonth} {currentYear}
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={previousMonth}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextMonth}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-semibold text-muted-foreground text-sm py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {daysArray.map((day, idx) => (
            <div
              key={idx}
              className={`aspect-square flex flex-col items-center justify-center rounded-lg border transition-colors ${
                day === null
                  ? "bg-muted"
                  : getEventsForDay(day).length > 0
                    ? "bg-blue-50 border-blue-200 hover:bg-blue-100"
                    : "bg-card border-border hover:bg-muted"
              } `}
            >
              {day && (
                <div className="text-center">
                  <div className="font-semibold text-foreground">{day}</div>
                  {getEventsForDay(day).length > 0 && (
                    <div className="flex gap-1 justify-center mt-1">
                      {getEventsForDay(day)
                        .slice(0, 2)
                        .map(() => (
                          <div key={Math.random()} className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-foreground">Events This Month</h3>
        <div className="space-y-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h4 className="font-semibold text-foreground">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {event.date} at {event.time}
                  </p>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                  Register
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
