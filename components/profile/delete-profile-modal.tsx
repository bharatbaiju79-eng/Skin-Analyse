"use client"

import { AlertTriangle, X } from "lucide-react"

interface DeleteProfileModalProps {
  onConfirm: () => void
  onCancel: () => void
}

export function DeleteProfileModal({ onConfirm, onCancel }: DeleteProfileModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-destructive" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Delete Profile</h2>
          </div>
          <button onClick={onCancel} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-foreground mb-2">Are you sure you want to delete your profile?</p>
          <p className="text-destructive font-semibold">This action cannot be undone.</p>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-border">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
