import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Phone, Mail, MapPin, Calendar } from 'lucide-react'

export default function LostPetDetail({ onNavigate }) {
  const petDetails = {
    name: 'Max',
    type: 'Dog',
    breed: 'Golden Retriever',
    lastSeen: '2023-06-15',
    location: 'Central Park, New York',
    description: 'Friendly male golden retriever, wearing a red collar. He responds to the name Max and is microchipped.',
    image: '/placeholder.svg?height=300&width=300',
    ownerName: 'John Doe',
    ownerPhone: '+1 (555) 123-4567',
    ownerEmail: 'john.doe@example.com'
  }

  return (
    <div className="flex flex-col min-h-screen bg-cyan-50 text-slate-900 pb-20">
      <header className="sticky top-0 z-10 bg-white border-b border-cyan-200 px-4 py-2 flex items-center shadow-sm">
        <Button variant="ghost" size="icon" className="mr-2 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100" onClick={() => onNavigate('alerts')}>
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Lost Pet
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <Card className="bg-white border-cyan-200 shadow-sm mb-4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-cyan-800">{petDetails.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src={petDetails.image}
              alt={petDetails.name}
              width={300}
              height={300}
              className="rounded-lg mx-auto"
            />
            <div className="space-y-2">
              <p><strong>Type:</strong> {petDetails.type}</p>
              <p><strong>Breed:</strong> {petDetails.breed}</p>
              <p className="flex items-center"><Calendar className="mr-2 text-cyan-600" /> <strong>Last Seen:</strong> {petDetails.lastSeen}</p>
              <p className="flex items-center"><MapPin className="mr-2 text-cyan-600" /> <strong>Location:</strong> {petDetails.location}</p>
              <p><strong>Description:</strong> {petDetails.description}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-cyan-200 shadow-sm mb-4">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-cyan-800">What to do if found</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>If you've found this pet or have any information:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Ensure the pet's safety</li>
              <li>Check for ID tags</li>
              <li>Contact the owner using the information below</li>
              <li>If you can't reach the owner, contact local animal control or a nearby veterinarian</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-white border-cyan-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-cyan-800">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p><strong>Owner:</strong> {petDetails.ownerName}</p>
            <Button variant="outline" className="w-full justify-start text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
              <Phone className="mr-2 h-4 w-4" />
              {petDetails.ownerPhone}
            </Button>
            <Button variant="outline" className="w-full justify-start text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
              <Mail className="mr-2 h-4 w-4" />
              {petDetails.ownerEmail}
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}