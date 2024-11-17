import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search, Calendar, MapPin, Users, ChevronRight, Plus, Home, Compass, PlusSquare, User } from 'lucide-react'
import logo from '../images/logo.png'

export default function EventsPage({ onNavigate }) {
  const events = [
    {
      id: 1,
      title: 'Doggy Playdate at Central Park',
      date: 'Sat, Jun 15',
      time: '2:00 PM',
      location: 'Central Park, New York',
      attendees: 5,
      image: 'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww'
    },
    {
      id: 2,
      title: 'Cat Cafe Meetup',
      date: 'Sun, Jun 16',
      time: '3:30 PM',
      location: 'Whiskers Cat Cafe, Brooklyn',
      attendees: 8,
      image: 'https://plus.unsplash.com/premium_photo-1664285640471-458aba53cbc4?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      title: 'Pet First Aid Workshop',
      date: 'Wed, Jun 19',
      time: '6:00 PM',
      location: 'Community Center, Queens',
      attendees: 12,
      image: 'https://plus.unsplash.com/premium_photo-1664298580563-368fb181926f?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      title: 'Doggy Playdate at Central Park',
      date: 'Sat, Jun 15',
      time: '2:00 PM',
      location: 'Central Park, New York',
      attendees: 5,
      image: 'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww'
    },
    {
      id: 5,
      title: 'Cat Cafe Meetup',
      date: 'Sun, Jun 16',
      time: '3:30 PM',
      location: 'Whiskers Cat Cafe, Brooklyn',
      attendees: 8,
      image: 'https://plus.unsplash.com/premium_photo-1664285640471-458aba53cbc4?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 6,
      title: 'Pet First Aid Workshop',
      date: 'Wed, Jun 19',
      time: '6:00 PM',
      location: 'Community Center, Queens',
      attendees: 12,
      image: 'https://plus.unsplash.com/premium_photo-1664298580563-368fb181926f?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

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
            Events
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
              placeholder="Search events..." 
              className="pl-10 bg-white text-slate-900 border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
            />
          </div>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-cyan-800">Upcoming Events</h2>
              <Button variant="outline" size="sm" className="text-cyan-600 border-cyan-600 hover:bg-cyan-100">
                <Plus className="h-4 w-4 mr-2" />
                Create Event
              </Button>
            </div>
            {events.map((event) => (
              <Card onClick={() => onNavigate("event-details")} key={event.id} className="mb-4 bg-white border-cyan-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex items-center p-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{event.title}</h3>
                    <div className="flex items-center text-cyan-600 text-sm mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-3">{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-cyan-600 text-sm mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-cyan-600 text-sm mt-1">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <ChevronRight className="text-cyan-500 h-6 w-6" />
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}