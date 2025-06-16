import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center h-[60vh] bg-gray-800">
      <img src="assets/img/hero-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div className="relative z-10 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Felix Quan</h2>
        <p className="text-xl">I'm <span className="font-semibold text-blue-300">Designer</span></p>
      </div>
    </section>
  );
} 