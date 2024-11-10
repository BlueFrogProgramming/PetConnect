import React from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Bell, Search, MapPin, Phone, Share2 } from 'lucide-react'

export function LostPetAlertsPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-10 bg-gray-800 border-b border-gray-700 px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lost Pet Alerts</h1>
        <Button variant="ghost" size="icon" className="text-gray-100">
          <Bell className="h-6 w-6" />
          <span className="sr-only">Notifications</span>
        </Button>
      </header>

      <main className="flex-1 overflow-y-auto pb-[80px]">
        <div className="container mx-auto px-4 py-6 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Search lost pets..." className="pl-10 bg-gray-800 text-gray-100 border-gray-700" />
          </div>

          <section>
            <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
            {[
              { name: "Max", type: "Dog", breed: "Golden Retriever", location: "Central Park", time: "2 hours ago" },
              { name: "Luna", type: "Cat", breed: "Siamese", location: "Downtown", time: "5 hours ago" },
              { name: "Rocky", type: "Dog", breed: "German Shepherd", location: "Riverside", time: "1 day ago" },
            ].map((pet, index) => (
              <Card key={index} className="mb-4 bg-gray-800 border-gray-700">
                <CardContent className="flex items-start p-4">
                  <Avatar className="w-24 h-24 mr-4">
                    <AvatarImage src={`/placeholder.svg?height=96&width=96`} alt={pet.name} />
                    <AvatarFallback>{pet.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-white mb-2">{pet.name} - Lost {pet.type}</CardTitle>
                    <p className="text-gray-300 mb-1">Breed: {pet.breed}</p>
                    <p className="text-gray-300 mb-1 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" /> Last seen: {pet.location}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">{pet.time}</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="text-black bg-white border-gray-600 hover:bg-gray-200 hover:text-black">
                        <Phone className="h-4 w-4 mr-1" /> Contact Owner
                      </Button>
                      <Button variant="outline" size="sm" className="text-black bg-white border-gray-600 hover:bg-gray-200 hover:text-black">
                        <Share2 className="h-4 w-4 mr-1" /> Share Alert
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Report a Lost Pet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">If you've lost your pet, create an alert to notify the community.</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Create Lost Pet Alert</Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}

export default LostPetAlertsPageComponent