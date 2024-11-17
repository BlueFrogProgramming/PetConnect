'use client'

import React, { useState, useEffect } from 'react'
import { signOut, fetchUserAttributes } from '@aws-amplify/auth'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Switch } from "./ui/switch"
import { Bell, Camera, ChevronLeft, PawPrint, Settings, Plus, PhoneOutgoing } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import logo from '../images/logo.png'

export default function ProfilePage({ onNavigate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');
  const [bio, setBio] = useState('Dog lover | Cat enthusiast | Animal rescuer')
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [privacyLevel, setPrivacyLevel] = useState('public')

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await fetchUserAttributes();
        setName(user.name || '');
        setEmail(user.email || '');
        setPicture(user.picture || '');
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      onNavigate('login'); // Redirect to login after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

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
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Profile</h1>
        </div>
        <Button onClick={() => onNavigate("settings")} variant="ghost" size="icon" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
          <Settings className="h-6 w-6" />
          <span className="sr-only">Settings</span>
        </Button>
      </header>

      <main className="flex-1 overflow-y-auto pb-[50px]">
        <div className="container mx-auto px-4 py-6 space-y-6 max-w-2xl">
          <section className="text-center">
            <div className="flex justify-center">
              <div className="relative inline-block">
                <Avatar className="w-24 h-24 border-4 border-cyan-300">
                  <AvatarImage src={picture} alt="Emily R." />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-cyan-600 text-white hover:bg-cyan-700">
                  <Camera className="h-4 w-4" />
                  <span className="sr-only">Change profile picture</span>
                </Button>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="mt-2 text-cyan-600 hover:text-cyan-700">Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="bg-white text-slate-900 border-cyan-200">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>Make changes to your profile here.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-white text-slate-900 border-cyan-200" />
                  </div>
                  <div>
                    <label htmlFor="bio" className="text-sm font-medium text-slate-700">Bio</label>
                    <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} className="bg-white text-slate-900 border-cyan-200" />
                  </div>
                  <Button type="submit" className="bg-cyan-600 text-white hover:bg-cyan-700" onClick={() => console.log('Profile updated')}>Save Changes</Button>
                </div>
              </DialogContent>
            </Dialog>
            <h2 className="text-2xl font-bold mt-4 text-slate-900">{name}</h2>
            <p className="text-cyan-600">{bio}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-cyan-800">My Pets</h2>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {[
                { name: "Max", type: "Golden Retriever", age: "3y" },
                { name: "Luna", type: "Siamese Cat", age: "2y" },
                { name: "Rocky", type: "Bulldog", age: "5y" }
              ].map((pet, index) => (
                <div key={index} className="flex-none w-20">
                  <Avatar className="w-20 h-20 border-2 border-cyan-300 mx-auto">
                    <AvatarImage src={`https://placekitten.com/200/200?image=${index}`} alt={pet.name} />
                    <AvatarFallback><PawPrint /></AvatarFallback>
                  </Avatar>
                  <p className="text-center mt-2 font-medium text-slate-900">{pet.name}</p>
                  <p className="text-center text-sm text-cyan-600">{pet.type}, {pet.age}</p>
                </div>
              ))}
              <Button variant="outline" className="flex-none w-20 h-20 rounded-full border-2 border-cyan-300 text-cyan-600 hover:bg-cyan-100">
                <Plus className="h-8 w-8" />
                <span className="sr-only">Add new pet</span>
              </Button>
            </div>
          </section>

          <section>
            <Card className="bg-white border-cyan-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-cyan-800">Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900">Notifications</h3>
                    <p className="text-sm text-cyan-600">Receive app notifications</p>
                  </div>
                  <Switch
                    checked={notificationsEnabled}
                    onCheckedChange={setNotificationsEnabled}
                    className="bg-cyan-200 data-[state=checked]:bg-cyan-600"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Privacy</h3>
                  <Select value={privacyLevel} onValueChange={setPrivacyLevel}>
                    <SelectTrigger className="bg-white text-slate-900 border-cyan-200">
                      <SelectValue placeholder="Select privacy level" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-slate-900 border-cyan-200">
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Button onClick={handleLogout} variant="destructive" className="w-full bg-red-500 hover:bg-red-600 text-white">Log Out</Button>
          </section>
        </div>
      </main>
    </div>
  )
}