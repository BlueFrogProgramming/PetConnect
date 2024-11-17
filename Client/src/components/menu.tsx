import React, { useState } from 'react'
import { Home, Users, Calendar, Bell, User } from 'lucide-react'

interface MenuProps {
  onNavigate: (page: string) => void
}

export function MenuComponent({ onNavigate }: MenuProps) {
  const [activeItem, setActiveItem] = useState('home')

  const menuItems = [
    { id: 'home', icon: Home, text: 'Home' },
    { id: 'socials', icon: Users, text: 'Socials' },
    { id: 'events', icon: Calendar, text: 'Events' },
    { id: 'alerts', icon: Bell, text: 'Alerts' },
    { id: 'profile', icon: User, text: 'Profile' },
  ]

  const handleClick = (id: string) => {
    setActiveItem(id)
    onNavigate(id)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-cyan-200 z-50">
      <ul className="flex justify-around items-center py-2">
        {menuItems.map(({ id, icon: Icon, text }) => (
          <li key={id} className="list">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handleClick(id)
              }}
              className={`flex flex-col items-center p-2 ${
                activeItem === id ? 'text-cyan-500' : 'text-cyan-500'
              } hover:text-cyan-600 transition-colors`}
              aria-current={activeItem === id ? 'page' : undefined}
            >
              <Icon className="h-6 w-6 mb-1" />
              <span className="text-xs">{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuComponent;