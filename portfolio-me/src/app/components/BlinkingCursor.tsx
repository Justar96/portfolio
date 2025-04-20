'use client';

import { useState, useEffect } from 'react';

interface BlinkingCursorProps {
  showCursor?: boolean;
}

export default function BlinkingCursor({ showCursor = true }: BlinkingCursorProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    if (!showCursor) return;
    
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 530); // Blink every 530ms for that authentic feel
    
    return () => clearInterval(interval);
  }, [showCursor]);
  
  if (!showCursor) return null;
  
  return (
    <span className={`inline-block w-3 h-5 ml-1 bg-[#64D2D2] ${isVisible ? 'opacity-100' : 'opacity-0'}`}></span>
  );
} 