import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Bell, Lock, Eye, Volume2, Moon, Globe } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SettingsPageComponent() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [darkModeEnabled, setDarkModeEnabled] = useState(true)
  const [privacyLevel, setPrivacyLevel] = useState('friends')
  const [language, setLanguage] = useState('english')
  const [volumeLevel, setVolumeLevel] = useState([50])

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 w-screen">
      <header className="sticky top-0 z-10 bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center">
        <Button variant="ghost" size="icon" className="mr-2">
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-2xl font-bold">Settings</h1>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 space-y-6 max-w-2xl">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-gray-400">Receive notifications on your device</p>
                </div>
                <Switch
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                  aria-label="Toggle push notifications"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-400">Receive notifications via email</p>
                </div>
                <Switch
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                  aria-label="Toggle email notifications"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 h-5 w-5" />
                Privacy
              </CardTitle>
              <CardDescription>Control your privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium mb-2">Profile Visibility</p>
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
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Show Online Status</p>
                  <p className="text-sm text-gray-400">Allow others to see when you're online</p>
                </div>
                <Switch defaultChecked aria-label="Toggle online status visibility" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 h-5 w-5" />
                Appearance
              </CardTitle>
              <CardDescription>Customize your app experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-gray-400">Use dark theme</p>
                </div>
                <Switch
                  checked={darkModeEnabled}
                  onCheckedChange={setDarkModeEnabled}
                  aria-label="Toggle dark mode"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Volume2 className="mr-2 h-5 w-5" />
                Sound & Haptics
              </CardTitle>
              <CardDescription>Adjust sound and haptic feedback</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium mb-2">App Volume</p>
                <Slider
                  value={volumeLevel}
                  onValueChange={setVolumeLevel}
                  max={100}
                  step={1}
                  aria-label="Adjust app volume"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Haptic Feedback</p>
                  <p className="text-sm text-gray-400">Enable vibration for actions</p>
                </div>
                <Switch defaultChecked aria-label="Toggle haptic feedback" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                Language & Region
              </CardTitle>
              <CardDescription>Set your preferred language and region</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <p className="font-medium mb-2">Language</p>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="bg-gray-700 text-gray-100 border-gray-600">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 text-gray-100 border-gray-600">
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Español</SelectItem>
                    <SelectItem value="french">Français</SelectItem>
                    <SelectItem value="german">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Button variant="destructive" className="w-full">Log Out</Button>
        </div>
      </main>
    </div>
  )
}