"use client"

import { useState } from "react"
import { UserHeader } from "./user-header"
import { UserStats } from "./user-stats"
import { RecentActivity } from "./recent-activity"
import { EditProfileModal } from "./edit-profile-modal"
import { DeleteProfileModal } from "./delete-profile-modal"

export function ProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [userProfile, setUserProfile] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    branch: "Computer Science",
    year: "3rd Year",
    bio: "Passionate about web development and community building",
    avatar: "/student-avatar.jpg",
  })

  const handleSaveProfile = (updatedData: any) => {
    setUserProfile(updatedData)
    setIsEditModalOpen(false)
  }

  return (
    <div className="w-full bg-background min-h-screen">
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        {/* User Header */}
        <UserHeader profile={userProfile} onEditClick={() => setIsEditModalOpen(true)} />

        {/* User Stats */}
        <UserStats />

        {/* Recent Activity */}
        <RecentActivity />

        {/* Delete Profile Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setIsDeleteModalOpen(true)}
            className="px-6 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors font-medium"
          >
            Delete Profile
          </button>
        </div>
      </div>

      {/* Modals */}
      {isEditModalOpen && (
        <EditProfileModal profile={userProfile} onSave={handleSaveProfile} onClose={() => setIsEditModalOpen(false)} />
      )}

      {isDeleteModalOpen && (
        <DeleteProfileModal
          onConfirm={() => {
            console.log("Profile deleted")
            setIsDeleteModalOpen(false)
          }}
          onCancel={() => setIsDeleteModalOpen(false)}
        />
      )}
    </div>
  )
}
