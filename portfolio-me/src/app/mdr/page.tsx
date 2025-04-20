'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BlinkingCursor from '../components/BlinkingCursor';

// Define our number types for sorting
type NumberCategory = 'SCARY' | 'HAPPY' | 'SAD' | 'ANGRY' | 'UNKNOWN';

interface NumberData {
  id: number;
  value: string;
  category: NumberCategory | null;
}

export default function MDRPage() {
  const [numbers, setNumbers] = useState<NumberData[]>([]);
  const [currentNumber, setCurrentNumber] = useState<NumberData | null>(null);
  const [message, setMessage] = useState('INITIALIZING SYSTEM...');
  const [score, setScore] = useState(0);
  const [isInitializing, setIsInitializing] = useState(true);

  // Generate random "numbers" that look like the ones in Severance
  useEffect(() => {
    if (isInitializing) {
      const timer = setTimeout(() => {
        setMessage('SYSTEM READY');
        setIsInitializing(false);
        generateNumbers();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isInitializing]);

  const generateNumbers = () => {
    const newNumbers: NumberData[] = [];
    for (let i = 0; i < 20; i++) {
      newNumbers.push({
        id: i,
        value: generateRandomSequence(),
        category: null
      });
    }
    setNumbers(newNumbers);
    setCurrentNumber(newNumbers[0]);
  };

  const generateRandomSequence = () => {
    let result = '';
    const length = Math.floor(Math.random() * 4) + 4; // 4-7 chars
    for (let i = 0; i < length; i++) {
      // Mix of letters and numbers for that Severance look
      const char = Math.random() > 0.7 
        ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) 
        : Math.floor(Math.random() * 10);
      result += char;
    }
    return result;
  };

  const handleSort = (category: NumberCategory) => {
    if (!currentNumber) return;
    
    // Update the category of the current number
    const updatedNumbers = numbers.map(num => 
      num.id === currentNumber.id ? { ...num, category } : num
    );
    
    setNumbers(updatedNumbers);
    setScore(score + 1);
    
    // Move to the next number or finish if all are sorted
    const nextUnsorted = updatedNumbers.find(num => num.category === null);
    if (nextUnsorted) {
      setCurrentNumber(nextUnsorted);
      setMessage(`NUMBER SORTED AS ${category}`);
    } else {
      setCurrentNumber(null);
      setMessage('ALL NUMBERS SORTED. REFINEMENT COMPLETE.');
    }
  };

  const resetSystem = () => {
    setIsInitializing(true);
    setScore(0);
    setMessage('REINITIALIZING SYSTEM...');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-black text-[#C5F6FA] font-mono">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-[#64D2D2] hover:underline">← RETURN TO MAIN</Link>
          <div className="text-sm">EMPLOYEE: ANONYMOUS</div>
        </div>

        <div className="w-full border-2 border-[#64D2D2] p-8 rounded-md bg-[#0B1E22] terminal-screen">
          <div className="text-center mb-8">
            <h1 className="text-3xl mb-2">MACRODATA REFINEMENT</h1>
            <p className="text-[#64D2D2]">PLEASE SORT THE NUMBERS AS THEY MAKE YOU FEEL</p>
          </div>

          <div className="flex justify-between mb-6">
            <div>SESSION: {new Date().toLocaleDateString()}</div>
            <div>SCORE: {score}</div>
          </div>

          <div className="border border-[#64D2D2] p-6 min-h-[140px] mb-8 flex items-center justify-center bg-[#061215]">
            {isInitializing ? (
              <div className="text-xl flex items-center">
                {message}<BlinkingCursor />
              </div>
            ) : currentNumber ? (
              <div className="text-5xl font-bold tracking-wider">{currentNumber.value}</div>
            ) : (
              <div className="text-xl flex items-center">
                {message}<BlinkingCursor />
              </div>
            )}
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <button 
              onClick={() => handleSort('SCARY')}
              disabled={!currentNumber || isInitializing}
              className="border border-[#64D2D2] p-3 hover:bg-[#64D2D2]/20 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              SCARY
            </button>
            <button 
              onClick={() => handleSort('HAPPY')}
              disabled={!currentNumber || isInitializing}
              className="border border-[#64D2D2] p-3 hover:bg-[#64D2D2]/20 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              HAPPY
            </button>
            <button 
              onClick={() => handleSort('SAD')}
              disabled={!currentNumber || isInitializing}
              className="border border-[#64D2D2] p-3 hover:bg-[#64D2D2]/20 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              SAD
            </button>
            <button 
              onClick={() => handleSort('ANGRY')}
              disabled={!currentNumber || isInitializing}
              className="border border-[#64D2D2] p-3 hover:bg-[#64D2D2]/20 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ANGRY
            </button>
          </div>

          {!currentNumber && !isInitializing && (
            <div className="text-center">
              <button 
                onClick={resetSystem}
                className="border-2 border-[#64D2D2] px-6 py-2 hover:bg-[#64D2D2]/20 transition duration-300"
              >
                RESET SYSTEM
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 text-sm text-[#64D2D2]/60 flex justify-between">
          <div>LUMON INDUSTRIES</div>
          <div>MDR TERMINAL V2.3</div>
        </div>
      </div>
    </div>
  );
} 