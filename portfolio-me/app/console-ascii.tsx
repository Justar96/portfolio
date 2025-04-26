"use client"

// This component injects ASCII art into the browser DevTools console
import { useEffect } from "react"

const asciiArt = `                                                                
                                                                                 
        +##########################=         
       #############################*        
      =#############:  *#############.       
      =############:    .############.       
      =###########       :###########.       
      =##########          ##########.       
      =#########=          -#########.       
      =##########          ##########.       
      =###########.      -###########.       
       #############################+        
        =##########################.         
                                            
        "We serve Kier, you CHILD!"
              — Severance
`;

export default function ConsoleAscii() {
  useEffect(() => {
    // Style the ASCII art in the console
    console.log(`%c${asciiArt}`, 'color: #00ffff; font-family: monospace; font-size: 14px;');
  }, [])
  return null
}
