'use client';

import { useState } from 'react'

import './App.css'

import ConfigureAmplifyClientSide from '/ConfigureAmplify';

import Login from './components/Login'
import Calendar from './components/Calendar'
import Home from './components/Home'
import Menu from './components/Menu'
import Register from './components/Register'
import Profile from './components/Profile'

export function App() {

  const [ page, setPage ] = useState('login')

  const onNavigate = (target) => {
    setPage(target)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConfigureAmplifyClientSide />

      {page === "login" && <Login onNavigate={onNavigate} />}
      {page === "register" && <Register onNavigate={onNavigate} />}

      {page !== "login" && page !== "register" && <Menu onNavigate={onNavigate} />}
      
      {page === "calendar" && <Calendar />}
      {page === "profile" && <Profile onNavigate={onNavigate} />}

    </main>
  );
}

export default App;
