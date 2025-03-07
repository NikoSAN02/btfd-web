"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
interface GameSelectionUIProps {
  isLoading: boolean;
  selectedGame: string;
  onGameSelect: (game: string) => void;
}

const GameSelectionUI: React.FC<GameSelectionUIProps> = ({ isLoading, selectedGame, onGameSelect }) => {
  return (
    <div className="min-h-screen text-white bg-black flex flex-col">
      {/* Header with logo */}
      <div className="p-4 bg-black flex items-center justify-center">
        <div className="flex items-center">
          <Image src="/images/BtfdLogo.png" alt="BTFD.WTF" className="h-10 w-10" />
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex-grow relative flex flex-col items-center">
        {/* Background image */}
        <div 
          className="absolute inset-0 w-3/4 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Bg_Image.png')" }}
        />
        
        {/* Game title */}
        <div className="relative z-10 mt-8 mb-4 w-full flex justify-center">
          <Image 
            src="/images/Game_Title_text.png" 
            alt="BTFD SURVIVAL" 
            className="w-4/5 max-w-md"
          />
        </div>
        
        {/* Character image with border */}
        <div className="relative z-10 w-full flex justify-center mb-6">
          <div className="relative">
            {/* Purple-pink-cyan gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl"></div>
            
            {/* Character image */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-white">
              <Image 
                src="/images/BtfdSurvival_Game_Image2.png" 
                alt="Game Character" 
                className="w-64 h-64 object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Play button */}
        <div className="relative z-10 w-full flex justify-center">
          <button
            onClick={() => onGameSelect("unity3")}
            disabled={isLoading}
            className="w-64 transform hover:scale-105 transition-transform"
          >
            <Image src="/images/Play_Btn.png" alt="PLAY" className="w-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameSelectionUI;