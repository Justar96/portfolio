import Navigation from "@/components/navigation"
import Blog from "@/components/blog"
import Scanlines from "@/components/scanlines"
import Logo from "@/components/logo"

export default function BlogPage() {
  return (
    <main className="canvas-wrapper">
      <div className="terminal-container">
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

        <Navigation />

        <div className="terminal-content">
          <Blog />
        </div>
      </div>
      <Scanlines />
    </main>
  )
}
