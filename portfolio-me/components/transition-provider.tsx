"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"

interface TransitionContextType {
  startTransition: (callback: () => void) => void
}

const TransitionContext = createContext<TransitionContextType>({
  startTransition: () => {},
})

export const useTransition = () => useContext(TransitionContext)

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)

  const startTransition = useCallback((callback: () => void) => {
    setIsTransitioning(true)

    // Wait for exit animation to complete
    setTimeout(() => {
      callback()
      setKey((prev) => prev + 1)

      // Wait for enter animation to complete
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }, 300)
  }, [])

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      <TransitionGroup>
        <CSSTransition key={key} timeout={300} classNames="page-transition">
          <div className={isTransitioning ? "transitioning" : ""}>{children}</div>
        </CSSTransition>
      </TransitionGroup>
    </TransitionContext.Provider>
  )
}
