import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search, Heart, MessageSquare, ChevronRight } from 'lucide-react'
import logo from '../images/logo.png'

export default function HomePageComponent({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-screen bg-cyan-50 text-slate-900 pb-14">
      <header className="sticky top-0 z-10 bg-white border-b border-cyan-200 px-4 py-2 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="PetConnect"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Home
          </h1>
        </div>
        <Button variant="ghost" size="icon" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
          <Bell className="h-6 w-6" />
          <span className="sr-only">Notifications</span>
        </Button>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-600" />
            <Input 
              type="text" 
              placeholder="Search for pets or owners..." 
              className="pl-10 bg-white text-slate-900 border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
            />
          </div>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-cyan-800">Nearby Pet Owners</h2>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex-none w-20">
                  <Avatar className="w-20 h-20 border-2 border-cyan-300 mx-auto">
                    <AvatarImage src={`https://randomuser.me/api/portraits/men/${item}.jpg`} alt={`User ${item}`} />
                    <AvatarFallback>U{item}</AvatarFallback>
                  </Avatar>
                  <p className="text-center mt-2 font-medium text-slate-900">John D.</p>
                  <p className="text-center text-sm text-cyan-600">Golden Retriever, 3y</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-cyan-800">Upcoming Playdates</h2>
            {[1, 2, 3].map((item) => (
              <Card onClick={() => onNavigate("event-details")} key={item} className="mb-4 bg-white border-cyan-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex justify-between items-center p-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">Doggy Playdate at Central Park</h3>
                    <p className="text-sm text-slate-600">Saturday, 2:00 PM</p>
                    <p className="text-sm text-cyan-600">5 Attendees</p>
                  </div>
                  <ChevronRight className="text-cyan-500" />
                </CardContent>
              </Card>
            ))}
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-cyan-800">Community Posts</h2>
            {[1, 2, 3].map((item) => (
              <Card key={item} className="mb-4 bg-white border-cyan-200 shadow-sm">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="border-2 border-cyan-300">
                    <AvatarImage src={`https://randomuser.me/api/portraits/women/${item}.jpg`} alt={`User ${item}`} />
                    <AvatarFallback>U{item}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-slate-900">Sarah K.</CardTitle>
                    <p className="text-sm text-cyan-600">2 hours ago</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-slate-800">
                    Just had a great walk with Max! Any recommendations for pet-friendly cafes in the area?
                  </p>
                  <div className="flex justify-around border-t border-cyan-200 pt-4">
                    <Button 
                      variant="ghost" 
                      className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100"
                    >
                      <Heart className="h-5 w-5" />
                      Like
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100"
                    >
                      <MessageSquare className="h-5 w-5" />
                      Comment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}