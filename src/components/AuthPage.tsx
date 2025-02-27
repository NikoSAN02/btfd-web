"use client"
import React, { useState } from 'react';
import Link from 'next/link';

interface GameSelectionUIProps {
  isLoading: boolean;
  selectedGame: string;
  onGameSelect: (game: string) => void;
}

const GameSelectionUI: React.FC<GameSelectionUIProps> = ({ isLoading, selectedGame, onGameSelect }) => {
  return (
    <>
      <div className="min-h-screen text-white bg-black">
        <div className="mx-auto max-w-sm">
          <div className="relative min-h-screen px-6 py-4 pb-24">
                 
            {/* Games Section */}
            <div className="mt-12">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">GAMES</div>
                <div className="flex space-x-1">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Game List */}
            <div className="mt-6">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <div className="h-[60px] w-[60px] rounded-lg bg-cover border-2 border-[#E6FF00] flex items-center justify-center"
                       style={{backgroundImage: "url('/gameimg/logo-btfd.png')"}}> 
                  </div>
                  <span className="font-semibold text-white text-md">BTFD Survival</span>
                </div>
                <button
                  onClick={() => onGameSelect("unity3")}
                  disabled={isLoading}
                  className="px-4 py-1 rounded-[11px] border-2 border-[#E6FF00] bg-black text-[#E6FF00] text-md font-bold hover:bg-[#E6FF00] hover:text-black transition-colors"
                >
                  PLAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  
    </>
  );
};

export default GameSelectionUI;
