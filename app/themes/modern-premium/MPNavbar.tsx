"use client"

import { useState, useEffect } from 'react'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weights: [400, 500, 600, 700] })
const dmSans = DM_Sans({ subsets: ['latin'], weights: [300, 400, 500] })
const dmMono = DM_Mono({ subsets: ['latin'], weight: 400 })

export default function MPNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
      isScrolled ? 'bg-[rgba(15,36,25,0.92)] backdrop-blur-[20px] border-b border-[rgba(245,237,224,0.08)]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[rgba(201,169,110,0.5)] bg-[rgba(26,58,42,0.8)] flex items-center justify-center">
            <span className={`${cormorant.className} text-[#f5ede0] text-[13px] font-medium`}>MP</span>
          </div>
          <div className={`${dmMono.className} text-[rgba(245,237,224,0.55)] text-[9px] tracking-widest uppercase`}>
            Feuilles
          </div>
        </div>

        {/* Center - Nav Links */}
        <div className="hidden md:flex items-center space-x-10 relative">
          <a href="#" className={`${dmSans.className} text-[rgba(245,237,224,0.7)] hover:text-[#f5ede0] transition-colors text-[0.9rem] font-medium`}>
            Home
          </a>
          <a href="#" className={`${dmSans.className} text-[rgba(245,237,224,0.7)] hover:text-[#f5ede0] transition-colors text-[0.9rem] font-medium`}>
            Shop
          </a>
          <a href="#" className={`${dmSans.className} text-[rgba(245,237,224,0.7)] hover:text-[#f5ede0] transition-colors text-[0.9rem] font-medium`}>
            About
          </a>
          <a href="#" className={`${dmSans.className} text-[rgba(245,237,224,0.7)] hover:text-[#f5ede0] transition-colors text-[0.9rem] font-medium`}>
            Contact
          </a>
          <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[200px] h-[1px] bg-[rgba(201,169,110,0.3)]"></div>
        </div>

        {/* Right side - Cart */}
        <div className="hidden md:flex items-center space-x-2">
          <span className={`${dmSans.className} text-[rgba(245,237,224,0.7)] hover:text-[#f5ede0] transition-colors text-[0.9rem] font-medium cursor-pointer`}>
            Cart
          </span>
          <div className="w-5 h-5 rounded-full bg-[#c9a96e] flex items-center justify-center">
            <span className={`${dmMono.className} text-[#0f2419] text-[10px] font-medium`}>2</span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-[#f5ede0] transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#f5ede0] transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#f5ede0] transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-[#0f2419] z-40 flex flex-col items-center justify-center space-y-8">
          <a href="#" className={`${cormorant.className} text-[#f5ede0] text-3xl font-medium hover:text-[#c9a96e] transition-colors`}>
            Home
          </a>
          <a href="#" className={`${cormorant.className} text-[#f5ede0] text-3xl font-medium hover:text-[#c9a96e] transition-colors`}>
            Shop
          </a>
          <a href="#" className={`${cormorant.className} text-[#f5ede0] text-3xl font-medium hover:text-[#c9a96e] transition-colors`}>
            About
          </a>
          <a href="#" className={`${cormorant.className} text-[#f5ede0] text-3xl font-medium hover:text-[#c9a96e] transition-colors`}>
            Contact
          </a>
          <div className="flex items-center space-x-2 mt-8">
            <span className={`${dmSans.className} text-[#f5ede0] text-lg font-medium`}>Cart</span>
            <div className="w-6 h-6 rounded-full bg-[#c9a96e] flex items-center justify-center">
              <span className={`${dmMono.className} text-[#0f2419] text-xs font-medium`}>2</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
