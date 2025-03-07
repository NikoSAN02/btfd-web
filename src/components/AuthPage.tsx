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
    <div className="min-h-screen text-white bg-black">
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="p-4 flex justify-center items-center">
          <Image src="/images/logo-btfd.wtf.png" alt="BTFD.WTF" className="h-8" />
        </div>
        
        {/* Background with cats and crypto coins */}
        <div className="relative flex-grow flex flex-col">
          {/* Background image with cats and coins */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/images/cat-crypto-bg.jpg')" }}
          />
          
          {/* Purple title overlay */}
          <div className="relative z-10 text-center pt-8">
            <div className="inline-block">
              <h1 className="text-5xl font-bold text-purple-500 tracking-wider" style={{ textShadow: "3px 3px 0px white" }}>
                BTFD SURVIVAL
              </h1>
            </div>
          </div>
          
          {/* Game character and play button */}
          <div className="relative z-10 flex-grow flex flex-col items-center justify-center">
            {/* Character box with lightning borders */}
            <div className="relative mb-6">
              <div className="absolute inset-0 border-4 rounded-2xl" style={{ 
                borderImage: "linear-gradient(to bottom right, #ff00ff, #00ffff) 1",
                transform: "scale(1.1)",
                zIndex: -1
              }}></div>
              
              <div className="rounded-2xl overflow-hidden border-4 border-white">
                <Image 
                  src="/images/game-character.jpg" 
                  alt="Game Character" 
                  className="w-64 h-64 object-cover"
                />
              </div>
            </div>
            
            {/* Play button */}
            <button
              onClick={() => onGameSelect("unity3")}
              disabled={isLoading}
              className="bg-purple-900 text-white text-2xl font-bold w-64 h-16 rounded-lg tracking-widest hover:bg-purple-800 transition-colors"
            >
              P L A Y
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSelectionUI;