"use client"

import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-green-600 rounded-full flex items-center justify-center">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Afro Ubuntu Trade</h1>
              <p className="text-sm text-orange-600">Making the Invisible Visible</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              About
            </a>
            <a href="/platform" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Platform
            </a>
            <a href="/impact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Impact
            </a>
            <a href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white">
              Join the Network
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-orange-600 font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-orange-600 font-medium">
                About
              </a>
              <a href="/platform" className="text-gray-700 hover:text-orange-600 font-medium">
                Platform
              </a>
              <a href="/impact" className="text-gray-700 hover:text-orange-600 font-medium">
                Impact
              </a>
              <a href="/contact" className="text-gray-700 hover:text-orange-600 font-medium">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-orange-600 to-green-600 text-white w-full mt-4">
                Join the Network
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
