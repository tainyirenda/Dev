"use client"

import { Play, Users, TrendingUp, Globe, Smartphone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VideoLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Hero Section with Video Placeholder */}
      <section className="relative px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Making the <span className="text-orange-600">Invisible</span> Visible
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Unlocking Africa's $1.2T informal trade economy through AI-powered connections
          </p>
          
          {/* Video Player Mockup */}
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center h-full bg-gradient-to-br from-orange-600 to-green-600">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full p-6">
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
          </div>
          
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
            Watch Our Story
          </Button>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-orange-200">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
                <p className="text-gray-600">of Africa's trade economy is invisible</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-600 mb-2">$1.2T</div>
                <p className="text-gray-600">informal trade economy waiting to be unlocked</p>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">AI-Powered</div>
                <p className="text-gray-600">B2B digital platform for connection</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Giving the unseen, unconnected, unbanked and overlooked a platform
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 mb-3" />
              <span className="font-semibold">Unlock Trade Corridors</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 mb-3" />
              <span className="font-semibold">Build Trust</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-12 w-12 mb-3" />
              <span className="font-semibold">Attract Investments</span>
            </div>
            <div className="flex flex-col items-center">
              <Smartphone className="h-12 w-12 mb-3" />
              <span className="font-semibold">Empower Entrepreneurs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ubuntu Philosophy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Built on Ubuntu</h2>
          <p className="text-2xl text-orange-600 font-semibold mb-4">"I am, because we are"</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our journey is grounded in the African philosophy of Ubuntu - recognizing our interconnectedness 
            and collective strength in transforming Africa's trade landscape.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of the movement that's bringing Africa's informal trade economy into the light
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
