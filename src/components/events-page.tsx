'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronLeft, MapPin, Plus, Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function EventsPage() {
  const [eventType, setEventType] = useState('all')

  const events = [
    { id: 1, title: "Doggy Playdate at Central Park", type: "dogs", date: "2024-11-15", time: "14:00", location: "Central Park, NY", attendees: 15 },
    { id: 2, title: "Cat Cafe Meetup", type: "cats", date: "2024-11-20", time: "11:00", location: "Purr-fect Cafe, LA", attendees: 8 },
    { id: 3, title: "Pet Adoption Drive", type: "all", date: "2024-11-25", time: "10:00", location: "City Animal Shelter, Chicago", attendees: 50 },
    { id: 4, title: "Reptile Expo", type: "other", date: "2024-12-01", time: "09:00", location: "Convention Center, Houston", attendees: 200 },
    { id: 5, title: "Puppy Training Workshop", type: "dogs", date: "2024-12-05", time: "15:30", location: "Bark & Train Center, Seattle", attendees: 12 },
  ]

  const filteredEvents = eventType === 'all' ? events : events.filter(event => event.type === eventType)

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-10 bg-gray-800 border-b border-gray-700 px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="text-2xl font-bold">Events</h1>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon" variant="ghost">
              <Plus className="h-6 w-6" />
              <span className="sr-only">Create Event</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 text-gray-100">
            <DialogHeader>
              <DialogTitle>Create New Event</DialogTitle>
              <DialogDescription>Fill in the details to create a new pet event.</DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <Input placeholder="Event Title" className="bg-gray-700 text-gray-100 border-gray-600" />
              <Select>
                <SelectTrigger className="bg-gray-700 text-gray-100 border-gray-600">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 text-gray-100 border-gray-600">
                  <SelectItem value="dogs">Dogs</SelectItem>
                  <SelectItem value="cats">Cats</SelectItem>
                  <SelectItem value="other">Other Pets</SelectItem>
                  <SelectItem value="all">All Pets</SelectItem>
                </SelectContent>
              </Select>
              <Input type="date" className="bg-gray-700 text-gray-100 border-gray-600" />
              <Input type="time" className="bg-gray-700 text-gray-100 border-gray-600" />
              <Input placeholder="Location" className="bg-gray-700 text-gray-100 border-gray-600" />
              <Button type="submit" className="w-full">Create Event</Button>
            </form>
          </DialogContent>
        </Dialog>
      </header>

      <main className="flex-1 overflow-y-auto pb-[50px]">
        <div className="container mx-auto px-4 py-6 space-y-6 max-w-2xl">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search events..." 
                className="pl-10 bg-gray-800 text-gray-100 border-gray-700 w-full" 
              />
            </div>
            <Select value={eventType} onValueChange={setEventType}>
              <SelectTrigger className="bg-gray-800 text-gray-100 border-gray-700 w-full sm:w-[180px]">
                <SelectValue placeholder="All Events" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-gray-100 border-gray-700">
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="dogs">Dogs</SelectItem>
                <SelectItem value="cats">Cats</SelectItem>
                <SelectItem value="other">Other Pets</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="bg-gray-800 border-gray-700">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-bold">{event.title}</CardTitle>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {event.type === 'all' ? 'All Pets' : event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="py-2">
                  <div className="flex items-center text-sm text-gray-400 space-x-4 mb-2">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="mr-1 h-4 w-4" />
                    {event.location}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      {[...Array(3)].map((_, i) => (
                        <Avatar key={i} className="border-2 border-gray-800 w-6 h-6">
                          <AvatarImage src={`https://i.pravatar.cc/32?img=${i + 10}`} />
                          <AvatarFallback>U{i}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">{event.attendees} attendees</span>
                  </div>
                  <Button size="sm">RSVP</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}