import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Calendar, Clock, MapPin, Users } from 'lucide-react'

export default function EventDetail({ onNavigate }) {
  // In a real app, you'd fetch this data based on the id
  const eventDetails = {
    title: 'Doggy Playdate at Central Park',
    date: '2023-06-25',
    time: '2:00 PM - 4:00 PM',
    location: 'Central Park, New York',
    description: "Join us for a fun afternoon with your furry friends! This event is perfect for dogs of all sizes and their owners. We'll have games, treats, and plenty of space to run and play.",
    image: 'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww',
    attendees: 15,
    organizer: 'PetConnect Community',
    contactEmail: 'events@petconnect.com'
  }

  return (
    <div className="flex flex-col min-h-screen bg-cyan-50 text-slate-900 pb-14">
      <header className="sticky top-0 z-10 bg-white border-b border-cyan-200 px-4 py-2 flex items-center shadow-sm">
        <Button onClick={() => onNavigate("events")} variant="ghost" size="icon" className="mr-2 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Event Details
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <Card className="bg-white border-cyan-200 shadow-sm mb-4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-cyan-800">{eventDetails.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src={eventDetails.image}
              alt={eventDetails.title}
              width={300}
              height={300}
              className="rounded-lg mx-auto"
            />
            <div className="space-y-2">
              <p className="flex items-center"><Calendar className="mr-2 text-cyan-600" /> <strong>Date:</strong> {eventDetails.date}</p>
              <p className="flex items-center"><Clock className="mr-2 text-cyan-600" /> <strong>Time:</strong> {eventDetails.time}</p>
              <p className="flex items-center"><MapPin className="mr-2 text-cyan-600" /> <strong>Location:</strong> {eventDetails.location}</p>
              <p className="flex items-center"><Users className="mr-2 text-cyan-600" /> <strong>Attendees:</strong> {eventDetails.attendees}</p>
              <p><strong>Description:</strong> {eventDetails.description}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-cyan-200 shadow-sm mb-4">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-cyan-800">Event Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p><strong>Organizer:</strong> {eventDetails.organizer}</p>
            <p><strong>Contact:</strong> {eventDetails.contactEmail}</p>
            <Button className="w-full bg-cyan-600 text-white hover:bg-cyan-700">
              RSVP to Event
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}