"use client"

import { useState } from "react"
import Image from "next/image"

interface UserHeaderProps {
  profile: {
    name: string
    email: string
    branch: string
    year: string
    bio: string
    avatar: string
  }
  onEditClick: () => void
}

export function UserHeader({ profile, onEditClick }: UserHeaderProps) {
  const [coverImage] = useState("/blue-gradient-academic-cover.jpg")

  return (
    <div className="relative mb-8">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
        <Image src={coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" priority />
      </div>

      {/* Profile Section with Overlapping Avatar */}
      <div className="relative px-4 md:px-8 pb-6">
        {/* Avatar Container - overlapping cover */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 -mt-16 relative z-10">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-background shadow-lg overflow-hidden bg-primary/10">
              <Image
                src={profile.avatar || "/placeholder.svg"}
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-primary text-primary-foreground p-2 rounded-full shadow-md cursor-pointer hover:bg-primary/90 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1 pt-4 md:pt-0">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{profile.name}</h1>
            <p className="text-muted-foreground mt-1">
              {profile.branch} • {profile.year}
            </p>
            <p className="text-muted-foreground text-sm mt-1">{profile.email}</p>
            <p className="text-foreground mt-3 max-w-2xl">{profile.bio}</p>
          </div>

          {/* Edit Button */}
          <button
            onClick={onEditClick}
            className="mt-4 md:mt-0 md:mb-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium whitespace-nowrap"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}
