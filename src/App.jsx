"use client";

import { useState } from "react";

import "./App.css";

import Login from "./components/Login";
import Calendar from "./components/Calendar";
import Home from "./components/home-page";
import Menu from "./components/Menu";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Alerts from "./components/lost-pet-alerts-page";

import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";

Amplify.configure(config, { ssr: true });

export function App() {
  const [page, setPage] = useState("login");

  const onNavigate = (target) => {
    setPage(target);
  };

  return (
    <div>
      {page === "login" && <Login onNavigate={onNavigate} />}
      {page === "register" && <Register onNavigate={onNavigate} />}

      {page !== "login" && page !== "register" && (
        <Menu onNavigate={onNavigate} />
      )}

      {page === "calendar" && <Calendar />}
      {page === "profile" && <Profile onNavigate={onNavigate} />}
      {page === "alerts" && <Alerts />}
      {page === "home" && <Home />}
    </div>
  );
}

export default App;
