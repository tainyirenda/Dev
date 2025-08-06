import { Globe, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-green-600 rounded-full flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Afro Ubuntu Trade</h3>
                <p className="text-orange-400">Making the Invisible Visible</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Unlocking Africa's $1.2T informal trade economy through AI-powered connections. 
              Built on Ubuntu: "I am, because we are."
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300">info@afroubuntutrade.co.uk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300">+44 (0) 20 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300">London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/platform" className="text-gray-300 hover:text-white transition-colors">Our Platform</a></li>
              <li><a href="/impact" className="text-gray-300 hover:text-white transition-colors">Impact Stories</a></li>
              <li><a href="/partners" className="text-gray-300 hover:text-white transition-colors">Partners</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/research" className="text-gray-300 hover:text-white transition-colors">Research</a></li>
              <li><a href="/documentation" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="/support" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Afro Ubuntu Trade Net. All rights reserved. Built with Ubuntu philosophy.
          </p>
        </div>
      </div>
    </footer>
  )
}
