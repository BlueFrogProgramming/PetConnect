'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft, Bell, Lock, HelpCircle, LogOut } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { deleteUser, signOut } from '@aws-amplify/auth'

export default function SettingsPage({ onNavigate }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [privacyLevel, setPrivacyLevel] = useState('friends')
  const [language, setLanguage] = useState('english')

  const handleLogout = async () => {
    try {
      await signOut();
      onNavigate('login'); // Redirect to login after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser();
      onNavigate('login'); // Redirect to login after logout
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cyan-50 text-slate-900 w-screen">
      <header className="sticky top-0 z-10 bg-white border-b border-cyan-200 px-4 py-2 flex items-center shadow-sm">
        <Button onClick={() => onNavigate("profile")} variant="ghost" size="icon" className="mr-2 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Settings</h1>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 space-y-6 max-w-2xl">
          <Card className="bg-white border-cyan-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-cyan-800">Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Bell className="h-6 w-6 text-cyan-600" />
                  <div>
                    <h3 className="text-lg font-medium text-slate-900">Notifications</h3>
                    <p className="text-sm text-cyan-600">Manage your notification preferences</p>
                  </div>
                </div>
                <Switch
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                  className="bg-cyan-200 data-[state=checked]:bg-cyan-600"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <Lock className="h-6 w-6 text-cyan-600" />
                  <div>
                    <h3 className="text-lg font-medium text-slate-900">Privacy</h3>
                    <p className="text-sm text-cyan-600">Control your profile visibility</p>
                  </div>
                </div>
                <Select value={privacyLevel} onValueChange={setPrivacyLevel}>
                  <SelectTrigger className="w-full bg-white text-slate-900 border-cyan-200">
                    <SelectValue placeholder="Select privacy level" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-slate-900 border-cyan-200">
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="friends">Friends Only</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-slate-900">Language</h3>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-full bg-white text-slate-900 border-cyan-200">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-slate-900 border-cyan-200">
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-cyan-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-cyan-800">Help & Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start text-slate-900 border-cyan-200 hover:bg-cyan-100">
                <HelpCircle className="h-5 w-5 mr-2 text-cyan-600" />
                FAQs
              </Button>
              <Button variant="outline" className="w-full justify-start text-slate-900 border-cyan-200 hover:bg-cyan-100">
                <HelpCircle className="h-5 w-5 mr-2 text-cyan-600" />
                Contact Support
              </Button>
            </CardContent>
          </Card>

          <Button onClick={handleLogout} variant="destructive" className="w-full bg-red-500 hover:bg-red-600 text-white">
            <LogOut className="h-5 w-5 mr-2" />
            Log Out
          </Button>
          <Button onClick={handleDelete} variant="destructive" className="w-full bg-red-500 hover:bg-red-600 text-white">
            Delete Account
          </Button>
        </div>
      </main>
    </div>
  )
}