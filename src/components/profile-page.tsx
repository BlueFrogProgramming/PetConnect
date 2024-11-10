'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Bell, Camera, ChevronLeft, PawPrint, Settings, Pencil, Trash2, Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getCurrentUser, signOut, deleteUser, fetchUserAttributes } from 'aws-amplify/auth'

interface Pet {
  id: string;
  name: string;
  type: string;
  age: string;
  image: string;
}

export default function ProfilePage({ onNavigate }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const [bio, setBio] = useState('Pet lover | Animal enthusiast')
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [privacyLevel, setPrivacyLevel] = useState('public')
  const [pets, setPets] = useState<Pet[]>([
    { id: '1', name: "Max", type: "Golden Retriever", age: "3y", image: "https://placekitten.com/200/200?image=1" },
    { id: '2', name: "Luna", type: "Siamese Cat", age: "2y", image: "https://placekitten.com/200/200?image=2" },
    { id: '3', name: "Rocky", type: "Bulldog", age: "5y", image: "https://placekitten.com/200/200?image=3" }
  ])
  const [isAddingPet, setIsAddingPet] = useState(false)
  const [newPet, setNewPet] = useState<Pet>({ id: '', name: '', type: '', age: '', image: '' })

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await getCurrentUser()
        const attributes = await fetchUserAttributes(user)
        const [fName, lName] = (attributes.name || '').split(' ')
        setFirstName(fName || '')
        setLastName(lName || '')
        setEmail(attributes.email || '')
        setProfilePicture(attributes.picture || '')
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    getData()
  }, [])

  const handleSaveChanges = async (event) => {
    event.preventDefault()
    try {
      const fullName = `${firstName} ${lastName}`
      const user = await getCurrentUser()
      const attributes = { name: fullName }

      await Auth.updateUserAttributes(user, attributes)
      alert('Profile updated successfully!')
    } catch (error) {
      console.error("Error updating user attributes:", error)
    }
  }

  const logOut = async () => {
    try {
      await signOut()
      onNavigate('login')
    } catch (error) {
      console.error("Error during logout:", error)
    }
  }

  const deleteAccount = async () => {
    try {
      await getCurrentUser()
      await deleteUser()
      onNavigate('login')
    } catch (error) {
      console.error("Error during account deletion:", error)
    }
  }

  const handleAddPet = () => {
    setIsAddingPet(true)
    setNewPet({ id: '', name: '', type: '', age: '', image: `https://placekitten.com/200/200?image=${pets.length + 1}` })
  }

  const handleSaveNewPet = () => {
    if (newPet.name && newPet.type && newPet.age) {
      setPets([...pets, { ...newPet, id: Date.now().toString() }])
      setIsAddingPet(false)
      setNewPet({ id: '', name: '', type: '', age: '', image: '' })
    }
  }

  const handleRemovePet = (id: string) => {
    setPets(pets.filter(pet => pet.id !== id))
  }

  return (
    <div className="w-full h-full min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-10 bg-gray-800 border-b border-gray-700 px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2" onClick={() => onNavigate('home')}>
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-100">
          <Settings className="h-6 w-6" />
          <span className="sr-only">Settings</span>
        </Button>
      </header>

      <main className="flex-1 overflow-y-auto h-[calc(100vh-64px)]">
        <div className="container mx-auto px-4 py-6 space-y-6 max-w-2xl">
          <section className="text-center">
            <div className="flex justify-center">
              <div className="relative inline-block">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={profilePicture || "https://randomuser.me/api/portraits/women/65.jpg"} alt={`${firstName} ${lastName}`} />
                  <AvatarFallback>{firstName[0]}{lastName[0]}</AvatarFallback>
                </Avatar>
                <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-primary text-primary-foreground">
                  <Camera className="h-4 w-4" />
                  <span className="sr-only">Change profile picture</span>
                </Button>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="mt-2 text-primary">Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-800 text-gray-100">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>Make changes to your profile here.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-gray-700 text-gray-100" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-gray-700 text-gray-100" />
                  </div>
                  <div>
                    <label htmlFor="bio" className="text-sm font-medium">Bio</label>
                    <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} className="bg-gray-700 text-gray-100" />
                  </div>
                  <Button type="submit" onClick={handleSaveChanges}>Save Changes</Button>
                </div>
              </DialogContent>
            </Dialog>
            <h2 className="text-2xl font-bold mt-4">{firstName} {lastName}</h2>
            <p className="text-gray-400">{bio}</p>
            <p className="text-gray-400">{email}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">My Pets</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {pets.map((pet) => (
                <div key={pet.id} className="flex flex-col items-center">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={pet.image} alt={pet.name} />
                    <AvatarFallback><PawPrint /></AvatarFallback>
                  </Avatar>
                  <p className="text-center mt-2 font-medium">{pet.name}</p>
                  <p className="text-center text-sm text-gray-400">{pet.type}, {pet.age}</p>
                  <Button variant="ghost" size="sm" onClick={() => handleRemovePet(pet.id)} className="mt-2">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                </div>
              ))}
              <div className="flex flex-col items-center justify-center">
                <Button variant="outline" className="w-20 h-20 rounded-full" onClick={handleAddPet}>
                  <Plus className="h-6 w-6" />
                  <span className="sr-only">Add new pet</span>
                </Button>
                <p className="text-center mt-2 font-medium">Add Pet</p>
              </div>
            </div>
          </section>

          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Notifications</h3>
                    <p className="text-sm text-gray-400">Receive app notifications</p>
                  </div>
                  <Switch
                    checked={notificationsEnabled}
                    onCheckedChange={setNotificationsEnabled}
                    aria-label="Toggle notifications"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Privacy</h3>
                  <Select value={privacyLevel} onValueChange={setPrivacyLevel}>
                    <SelectTrigger className="bg-gray-700 text-gray-100 border-gray-600">
                      <SelectValue placeholder="Select privacy level" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 text-gray-100 border-gray-600">
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <Button variant="destructive" className="w-full" onClick={logOut}>Log Out</Button>
            <Button variant="destructive" className="w-full" onClick={deleteAccount}>Delete Account</Button>
          </section>
        </div>
      </main>

      <Dialog open={isAddingPet} onOpenChange={setIsAddingPet}>
        <DialogContent className="bg-gray-800 text-gray-100">
          <DialogHeader>
            <DialogTitle>Add New Pet</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label htmlFor="petName" className="text-sm font-medium">Pet Name</label>
              <Input
                id="petName"
                value={newPet.name}
                onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                className="bg-gray-700 text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="petType" className="text-sm font-medium">Pet Type</label>
              <Input
                id="petType"
                value={newPet.type}
                onChange={(e) => setNewPet({ ...newPet, type: e.target.value })}
                className="bg-gray-700 text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="petAge" className="text-sm font-medium">Pet Age</label>
              <Input
                id="petAge"
                value={newPet.age}
                onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
                className="bg-gray-700 text-gray-100"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddingPet(false)}>Cancel</Button>
            <Button onClick={handleSaveNewPet}>Add Pet</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}