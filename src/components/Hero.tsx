'use client'

import Link from 'next/link'
import React from 'react'
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-4 sm:px-6 lg:px-8" data-aos="fade-right">
      <div className="text-center text-white w-full max-w-4xl mx-auto">
        {/* Heading with responsive font sizes and spacing */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Welcome to Our Platform
        </h1>
        
        {/* Subheading with responsive text */}
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed">
          Discover amazing features and possibilities
        </p>
        
        {/* Button container with responsive layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/client-side"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-base sm:text-lg"
          >
            Client Navigation
          </Link>
          
          <Link
            href="/server-side"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-base sm:text-lg"
          >
            Server Navigation
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero