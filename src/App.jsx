"use client";

import { useState } from "react";

import "./App.css";

import Login from "./components/Login";
import Events from "./components/events-page";
import Home from "./components/home-page";
import Menu from "./components/menu";
import Register from "./components/Register";
import Alerts from "./components/lost-pet-alerts-page";
import Feed from "./components/feed-page"
import Profile from "./components/profile-page"
import Settings from "./components/settings-page"

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

      {page === "events" && <Events />}
      {page === "profile" && <Profile onNavigate={onNavigate} />}
      {page === "alerts" && <Alerts />}
      {page === "home" && <Home />}
      {page === "socials" && <Feed />}
      {page === "settings" && <Settings onNavigate={onNavigate} />}
    </div>
  );
}

export default App;
