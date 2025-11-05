"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface EditProfileModalProps {
  profile: {
    name: string
    email: string
    branch: string
    year: string
    bio: string
    avatar: string
  }
  onSave: (profile: any) => void
  onClose: () => void
}

export function EditProfileModal({ profile, onSave, onClose }: EditProfileModalProps) {
  const [formData, setFormData] = useState(profile)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.branch.trim()) newErrors.branch = "Branch is required"
    if (!formData.year.trim()) newErrors.year = "Year is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">Edit Profile</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Branch */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Branch / Department *</label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="e.g., Computer Science"
            />
            {errors.branch && <p className="text-destructive text-sm mt-1">{errors.branch}</p>}
          </div>

          {/* Year */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Year / Semester *</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="e.g., 3rd Year"
            />
            {errors.year && <p className="text-destructive text-sm mt-1">{errors.year}</p>}
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Bio / Description</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Tell us about yourself..."
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-border">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
