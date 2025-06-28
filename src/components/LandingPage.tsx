
import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full relative bg-black text-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="flex items-center justify-between px-8 py-8">
          {/* Brand Logo */}
          <div className="text-white font-libre-caslon text-xl">
            Mirada®
          </div>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-white font-manrope text-sm hover:opacity-80 transition-opacity">
              Watch
            </a>
            <a href="#" className="text-white font-manrope text-sm hover:opacity-80 transition-opacity">
              Journal
            </a>
            <a href="#" className="text-white font-manrope text-sm hover:opacity-80 transition-opacity">
              About
            </a>
          </div>
          
          {/* CTA Button */}
          <button className="text-white font-manrope text-sm bg-transparent border border-white/30 backdrop-blur-sm px-5 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
            Reach Out
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex items-center min-h-screen">
        <div className="ml-[10%] max-w-4xl">
          {/* Tagline */}
          <div className="uppercase tracking-wide text-white font-manrope text-sm mb-4 mt-32">
            Make them remember it.
          </div>
          
          {/* Main Headlines */}
          <h1 className="font-libre-caslon font-light text-white leading-tight mb-6">
            <div className="text-6xl md:text-7xl lg:text-8xl">Look once.</div>
            <div className="text-6xl md:text-7xl lg:text-8xl">They won't forget it.</div>
          </h1>
          
          {/* Subparagraph */}
          <p className="font-manrope text-sm text-white/85 max-w-[600px] leading-relaxed mt-6">
            They don't just see it, they feel it. Every detail is designed to leave an impression. In the mood, in the message, and in the memory it creates.
          </p>
        </div>
      </div>

      {/* Bottom Right Contact Links */}
      <div className="fixed bottom-6 right-8 text-right">
        <div className="space-y-3">
          <div>
            <a href="mailto:" className="text-white font-manrope text-base hover:opacity-80 transition-opacity">
              Email
            </a>
          </div>
          <div>
            <a href="#" className="text-white font-manrope text-base hover:opacity-80 transition-opacity">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
