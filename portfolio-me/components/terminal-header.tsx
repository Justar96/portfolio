import Logo from "@/components/logo"

export default function TerminalHeader() {
  return (
    <div className="terminal-header flex">
      <Logo />
      <div className="terminal-title ">
        <h1 className="h4 mob ml-6">Personal Terminal</h1>
        <span id="percentage" className="percentage ml-6">100%</span>
      </div>
    </div>
  )
}
