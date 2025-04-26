"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import About from "@/components/about"
import Scanlines from "@/components/scanlines"
import Logo from "@/components/logo"

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate boot sequence
    const timer1 = setTimeout(() => {
      setBootComplete(true)
    }, 2000)

    const timer2 = setTimeout(() => {
      setShowContent(true)
    }, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <main className="canvas-wrapper">
      <div className="terminal-container">
        {!bootComplete ? (
          <div className="boot-sequence">
            <div className="boot-text">
              <p>LUMON INDUSTRIES</p>
              <p>MACRODATA REFINEMENT DIVISION</p>
              <p>INITIALIZING PERSONAL TERMINAL...</p>
            </div>
          </div>
        ) : (
          <>
            <div className="terminal-header">
              <Logo />
              <div className="terminal-title">
                <h1 className="h4 mob">Personal Terminal</h1>
                <h1 className="h4 mob">
                  <span id="percentage" className="percentage">
                    100%
                  </span>
                  &nbsp;Operational
                </h1>
              </div>
            </div>

            {showContent && (
              <>
                <Navigation />

                <div className="terminal-content">
                  <About />
                </div>
              </>
            )}
          </>
        )}
      </div>
      <Scanlines />
    </main>
  )
}
