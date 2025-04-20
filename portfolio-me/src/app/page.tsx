import Link from "next/link";
import BlinkingCursor from "./components/BlinkingCursor";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-black text-[#C5F6FA]">
      <div className="w-full max-w-2xl text-center mb-12">
        <h1 className="text-4xl mb-4 font-mono">MDR TERMINAL</h1>
        <p className="text-lg font-mono">LUMON INDUSTRIES</p>
      </div>
      
      <div className="w-full max-w-2xl border-2 border-[#64D2D2] p-8 rounded-md bg-[#0B1E22] font-mono terminal-screen">
        <div className="mb-8 flex justify-between items-center">
          <div className="text-xl tracking-wider flex items-center">
            WELCOME<BlinkingCursor />
          </div>
          <div className="text-sm">AUTHORIZED ACCESS ONLY</div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Link 
            href="/mdr"
            className="border border-[#64D2D2] p-4 text-center hover:bg-[#64D2D2]/20 transition duration-300"
          >
            MACRODATA REFINEMENT
          </Link>
          <Link 
            href="/"
            className="border border-[#64D2D2] p-4 text-center hover:bg-[#64D2D2]/20 transition duration-300"
          >
            ABOUT ME
          </Link>
          <Link 
            href="/"
            className="border border-[#64D2D2] p-4 text-center hover:bg-[#64D2D2]/20 transition duration-300"
          >
            PROJECTS
          </Link>
          <Link 
            href="/"
            className="border border-[#64D2D2] p-4 text-center hover:bg-[#64D2D2]/20 transition duration-300"
          >
            CONTACT
          </Link>
        </div>
        
        <div className="text-sm text-[#64D2D2]/70 flex justify-between">
          <div>TERMINAL V2.3</div>
          <div>SYSTEM STATUS: OPTIMAL</div>
        </div>
      </div>
      
      <div className="mt-8 text-xs text-[#64D2D2]/50 font-mono">
        INSPIRED BY &ldquo;SEVERANCE&rdquo; (APPLE TV+)
      </div>
    </div>
  );
}
