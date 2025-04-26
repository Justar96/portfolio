"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { useLoading } from "@/context/loading-context"
import LoadingScreen from "@/components/loading-screen"

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading, stopLoading } = useLoading()
  const [showContent, setShowContent] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // This ensures we always show content after a maximum time
  useEffect(() => {
    // Always show content after 5 seconds maximum
    const safetyTimer = setTimeout(() => {
      setShowContent(true)
      stopLoading()
    }, 5000)

    return () => clearTimeout(safetyTimer)
  }, [stopLoading])

  // Handle loading state changes
  useEffect(() => {
    if (!isLoading) {
      // Add a small delay before showing content for smoother transition
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        setShowContent(true)
      }, 300)
    } else {
      setShowContent(false)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isLoading])

  return (
    <>
      {!showContent && <LoadingScreen />}
      <div
        style={{
          opacity: showContent ? 1 : 0,
          visibility: showContent ? "visible" : "hidden",
          transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
        }}
      >
        {children}
      </div>
    </>
  )
}
