import Logo from "@/components/logo"

export default function TerminalHeader() {
  return (
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
  )
}
