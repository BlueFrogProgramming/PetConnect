'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search, AlertTriangle, MapPin, Calendar, ChevronRight, Plus, Home, Compass, PlusSquare, User } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import logo from '../images/logo.png'

export default function AlertsPage({ onNavigate }) {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      petName: 'Max',
      petType: 'Dog',
      breed: 'Golden Retriever',
      lastSeen: '2023-06-15',
      location: 'Central Park, New York',
      description: 'Friendly male golden retriever, wearing a red collar.',
      image: '/placeholder.svg?height=100&width=100'
    },
    {
      id: 2,
      petName: 'Luna',
      petType: 'Cat',
      breed: 'Siamese',
      lastSeen: '2023-06-14',
      location: 'Brooklyn Heights',
      description: 'Shy female Siamese cat, has a small scar on left ear.',
      image: '/placeholder.svg?height=100&width=100'
    },
    {
      id: 3,
      petName: 'Rocky',
      petType: 'Dog',
      breed: 'Bulldog',
      lastSeen: '2023-06-13',
      location: 'Queens',
      description: 'Energetic male bulldog, has a blue collar with bone-shaped tag.',
      image: '/placeholder.svg?height=100&width=100'
    },
    {
      id: 4,
      petName: 'Max',
      petType: 'Dog',
      breed: 'Golden Retriever',
      lastSeen: '2023-06-15',
      location: 'Central Park, New York',
      description: 'Friendly male golden retriever, wearing a red collar.',
      image: '/placeholder.svg?height=100&width=100'
    },
    {
      id: 5,
      petName: 'Luna',
      petType: 'Cat',
      breed: 'Siamese',
      lastSeen: '2023-06-14',
      location: 'Brooklyn Heights',
      description: 'Shy female Siamese cat, has a small scar on left ear.',
      image: '/placeholder.svg?height=100&width=100'
    },
    {
      id: 6,
      petName: 'Rocky',
      petType: 'Dog',
      breed: 'Bulldog',
      lastSeen: '2023-06-13',
      location: 'Queens',
      description: 'Energetic male bulldog, has a blue collar with bone-shaped tag.',
      image: '/placeholder.svg?height=100&width=100'
    }
  ])

  const [newAlert, setNewAlert] = useState({
    petName: '',
    petType: '',
    breed: '',
    lastSeen: '',
    location: '',
    description: '',
    image: '/placeholder.svg?height=100&width=100'
  })

  const handleNewAlertChange = (e) => {
    const { name, value } = e.target
    setNewAlert(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitNewAlert = () => {
    setAlerts(prev => [...prev, { id: prev.length + 1, ...newAlert }])
    setNewAlert({
      petName: '',
      petType: '',
      breed: '',
      lastSeen: '',
      location: '',
      description: '',
      image: '/placeholder.svg?height=100&width=100'
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-cyan-50 text-slate-900 w-screen">
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
            Lost Pet Alerts
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
              placeholder="Search lost pet alerts..." 
              className="pl-10 bg-white text-slate-900 border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
            />
          </div>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-cyan-800">Recent Alerts</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="text-cyan-600 border-cyan-600 hover:bg-cyan-100">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Alert
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white">
                  <DialogHeader>
                    <DialogTitle>Create New Lost Pet Alert</DialogTitle>
                    <DialogDescription>
                      Please provide details about your lost pet.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="petName" className="text-right">Pet Name</label>
                      <Input id="petName" name="petName" value={newAlert.petName} onChange={handleNewAlertChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="petType" className="text-right">Pet Type</label>
                      <Input id="petType" name="petType" value={newAlert.petType} onChange={handleNewAlertChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="breed" className="text-right">Breed</label>
                      <Input id="breed" name="breed" value={newAlert.breed} onChange={handleNewAlertChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="lastSeen" className="text-right">Last Seen</label>
                      <Input id="lastSeen" name="lastSeen" type="date" value={newAlert.lastSeen} onChange={handleNewAlertChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="location" className="text-right">Location</label>
                      <Input id="location" name="location" value={newAlert.location} onChange={handleNewAlertChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="description" className="text-right">Description</label>
                      <Textarea id="description" name="description" value={newAlert.description} onChange={handleNewAlertChange} className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleSubmitNewAlert}>Create Alert</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            {alerts.map((alert) => (
              <Card key={alert.id} onClick={() => onNavigate("alert-details")} className="mb-4 bg-white border-cyan-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex items-center p-4">
                  <img
                    src={alert.image}
                    alt={alert.petName}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{alert.petName} - {alert.breed}</h3>
                    <div className="flex items-center text-cyan-600 text-sm mt-1">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      <span>{alert.petType} | Lost</span>
                    </div>
                    <div className="flex items-center text-cyan-600 text-sm mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{alert.location}</span>
                    </div>
                    <div className="flex items-center text-cyan-600 text-sm mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Last seen: {alert.lastSeen}</span>
                    </div>
                  </div>
                  <ChevronRight className="text-cyan-500 h-6 w-6" />
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </main>

      <footer className="sticky bottom-0 bg-white border-t border-cyan-200 px-4 py-2 shadow-md">
        <nav className="flex justify-around">
          <Button variant="ghost" size="icon" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
            <Home className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
            <Compass className="h-6 w-6" />
            <span className="sr-only">Explore</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
            <PlusSquare className="h-6 w-6" />
            <span className="sr-only">New Post</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
            <User className="h-6 w-6" />
            <span className="sr-only">Profile</span>
          </Button>
        </nav>
      </footer>
    </div>
  )
}