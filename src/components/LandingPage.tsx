
import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dagtwj49h&public_id=social_u2451393239_A_hyper-realistic_close-up_of_a_greenish-blue_eye_ef774173-1866-4f06-b297-f498bf5ebd0e_2_bzubga&profile=rrtgdsfg&autoplay=true&muted=true&loop=true&controls=false"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allow="autoplay; fullscreen; encrypted-media"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="flex items-center justify-between px-8 py-8">
          {/* Brand Logo */}
          <div className="text-white font-libre-caslon text-xl">
            <img 
              src="/lovable-uploads/0e0b88e6-6dc6-4058-9dd3-199a07e4d7a1.png" 
              alt="Mirada Logo" 
              className="h-8 w-auto filter brightness-0 invert"
            />
          </div>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-white font-manrope text-sm hover:opacity-80 transition-opacity drop-shadow-lg">
              Watch
            </a>
            <a href="#" className="text-white font-manrope text-sm hover:opacity-80 transition-opacity drop-shadow-lg">
              Journal
            </a>
            <a href="#" className="text-white font-manrope text-sm hover:opacity-80 transition-opacity drop-shadow-lg">
              About
            </a>
          </div>
          
          {/* CTA Button */}
          <button className="text-white font-manrope text-sm bg-white/10 border border-white/30 backdrop-blur-sm px-5 py-3 rounded-full hover:bg-white/20 transition-all duration-300 drop-shadow-lg">
            Reach Out
          </button>
        </div>
      </nav>

      {/* Hero Content - Left Side Overlay */}
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="ml-[8%] max-w-4xl">
          {/* Tagline */}
          <div className="uppercase tracking-wide text-white font-manrope text-sm mb-4 mt-32 drop-shadow-lg">
            Make them remember it.
          </div>
          
          {/* Main Headlines */}
          <h1 className="font-libre-caslon font-light text-white leading-tight mb-6 drop-shadow-xl">
            <div className="text-6xl md:text-7xl lg:text-8xl">Look once.</div>
            <div className="text-6xl md:text-7xl lg:text-8xl">They won't forget it.</div>
          </h1>
          
          {/* Subparagraph */}
          <p className="font-manrope text-sm text-white/90 max-w-[600px] leading-relaxed mt-6 drop-shadow-lg bg-black/20 backdrop-blur-sm p-4 rounded-lg">
            They don't just see it, they feel it. Every detail is designed to leave an impression. In the mood, in the message, and in the memory it creates.
          </p>
        </div>
      </div>

      {/* Bottom Right Contact Links */}
      <div className="fixed bottom-6 right-8 text-right z-30">
        <div className="space-y-3">
          <div>
            <a href="mailto:" className="text-white font-manrope text-base hover:opacity-80 transition-opacity drop-shadow-lg">
              Email
            </a>
          </div>
          <div>
            <a href="#" className="text-white font-manrope text-base hover:opacity-80 transition-opacity drop-shadow-lg">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
