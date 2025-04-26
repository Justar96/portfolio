import Navigation from "@/components/navigation"
import Projects from "@/components/projects"
import Scanlines from "@/components/scanlines"
import Logo from "@/components/logo"

export default function ProjectsPage() {
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
          <Projects />
        </div>
      </div>
      <Scanlines />
    </main>
  )
}
