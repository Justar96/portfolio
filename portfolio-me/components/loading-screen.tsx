"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import Scanlines from "@/components/scanlines"
import Logo from "@/components/logo"

export default function LoadingScreen() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Determine loading content based on the current route
  let loadingTitle = "ACCESSING PERSONAL DATA"
  let loadingStatuses = ["Retrieving employee information...", "Please wait..."]

  if (pathname?.includes("/projects")) {
    loadingTitle = "ACCESSING PROJECT DATABASE"
    loadingStatuses = ["Compiling project metadata...", "Rendering project thumbnails...", "Please wait..."]
  } else if (pathname?.includes("/blog")) {
    loadingTitle = "ACCESSING ARTICLE REPOSITORY"
    loadingStatuses = ["Retrieving latest entries...", "Decrypting content...", "Please wait..."]
  } else if (pathname?.includes("/contact")) {
    loadingTitle = "INITIALIZING COMMUNICATION PROTOCOLS"
    loadingStatuses = ["Establishing secure connection...", "Preparing message interface...", "Please wait..."]
  }

  // Animate progress bar
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Reset progress
    setProgress(0)

    // Create new interval
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 5
        if (newProgress >= 100) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
          return 100
        }
        return newProgress
      })
    }, 100)

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [pathname])

  return (
    <div className="loading-screen">
      <div className="canvas-wrapper">
        <div className="terminal-container">
          <div className="terminal-header">
            <Logo />
            <div className="terminal-title">
              <h1 className="h4 mob">Personal Terminal</h1>
              <h1 className="h4 mob">
                <span className="percentage">{progress}%</span>
                &nbsp;Loading
              </h1>
            </div>
          </div>

          <div className="loading-container">
            <div className="loading-text">
              <p>{loadingTitle}</p>
              <div className="loading-progress">
                <div className="loading-bar" style={{ width: `${progress}%` }}></div>
              </div>
              {loadingStatuses.map((status, index) => (
                <p key={index} className={`loading-status ${index === loadingStatuses.length - 1 ? "blink" : ""}`}>
                  {status}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Scanlines />
      </div>
    </div>
  )
}
