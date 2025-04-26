"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLoading } from "@/context/loading-context"
import { useCallback } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const { startLoading } = useLoading()

  const sections = [
    { id: "about", label: "ABOUT", path: "/" },
    { id: "projects", label: "PROJECTS", path: "/projects" },
    { id: "blog", label: "BLOG", path: "/blog" },
    { id: "contact", label: "CONTACT", path: "/contact" },
  ]

  // Handle navigation clicks
  const handleClick = useCallback(() => {
    // Only start loading if navigating to a different page
    startLoading()
  }, [startLoading])

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {sections.map((section) => {
          const isActive =
            (section.path === "/" && pathname === "/") || (section.path !== "/" && pathname?.startsWith(section.path))

          return (
            <li key={section.id} className={`nav-item ${isActive ? "active" : ""}`}>
              <Link href={section.path} className="nav-link" onClick={isActive ? undefined : handleClick}>
                {section.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
