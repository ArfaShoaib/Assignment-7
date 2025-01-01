'use client'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
    <div className="text-center text-white px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Our Platform</h1>
      <p className="text-xl md:text-2xl mb-8">Discover amazing features and possibilities</p>
      
      <div className="space-x-4">
    
      <Link      
          href="/client-side"
          className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
        >
          Client Navigation
        </Link>
        <Link
          href="/server-side"
          className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
        >
          Server Navigation
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Hero
