"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

type LoadingContextType = {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  startLoading: () => {},
  stopLoading: () => {},
})

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Force loading to stop after a maximum time to prevent freezing
  const forceStopLoading = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    setIsLoading(false)
  }

  const startLoading = () => {
    setIsLoading(true)

    // Safety timeout - force loading to stop after 5 seconds maximum
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      forceStopLoading()
    }, 5000)
  }

  const stopLoading = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    setIsLoading(false)
  }

  // Initial page load
  useEffect(() => {
    startLoading()

    const timer = setTimeout(() => {
      stopLoading()
    }, 2000)

    return () => {
      clearTimeout(timer)
      forceStopLoading()
    }
  }, [])

  // Handle route changes
  useEffect(() => {
    if (pathname) {
      startLoading()

      const timer = setTimeout(() => {
        stopLoading()
      }, 2000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [pathname])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>{children}</LoadingContext.Provider>
}

export function useLoading() {
  return useContext(LoadingContext)
}
