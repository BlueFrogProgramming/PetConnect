import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, MapPin, Phone, Share2 } from "lucide-react";
import "./LostPetAlertsPageComponent.css";

export function LostPetAlertsPageComponent() {
  return (
    <div className="page-container">
      <header className="header">
        <h1 className="title">Lost Pet Alerts</h1>
        <Button variant="ghost" size="icon" className="notification-button">
          <Bell className="icon" />
          <span className="sr-only">Notifications</span>
        </Button>
      </header>

      <main className="main-content">
        <div className="content-container">
          <div className="search-container">
            <Search className="search-icon" />
            <Input
              type="text"
              placeholder="Search lost pets..."
              className="search-input"
            />
          </div>

          <section>
            <h2 className="section-title">Recent Alerts</h2>
            {[
              {
                name: "Max",
                type: "Dog",
                breed: "Golden Retriever",
                location: "Central Park",
                time: "2 hours ago",
              },
              {
                name: "Luna",
                type: "Cat",
                breed: "Siamese",
                location: "Downtown",
                time: "5 hours ago",
              },
              {
                name: "Rocky",
                type: "Dog",
                breed: "German Shepherd",
                location: "Riverside",
                time: "1 day ago",
              },
            ].map((pet, index) => (
              <Card key={index} className="pet-card">
                <CardContent className="pet-card-content">
                  <Avatar className="avatar">
                    <AvatarImage
                      src={`/placeholder.svg?height=96&width=96`}
                      alt={pet.name}
                    />
                    <AvatarFallback>{pet.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="pet-details">
                    <CardTitle className="pet-name">
                      {pet.name} - Lost {pet.type}
                    </CardTitle>
                    <p className="pet-info">Breed: {pet.breed}</p>
                    <p className="pet-info location">
                      <MapPin className="location-icon" /> Last seen:{" "}
                      {pet.location}
                    </p>
                    <p className="time">{pet.time}</p>
                    <div className="action-buttons">
                      <Button
                        variant="outline"
                        size="sm"
                        className="contact-button"
                      >
                        <Phone className="button-icon" /> Contact Owner
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="share-button"
                      >
                        <Share2 className="button-icon" /> Share Alert
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          <section>
            <Card className="report-card">
              <CardHeader>
                <CardTitle className="report-title">
                  Report a Lost Pet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="report-description">
                  If you've lost your pet, create an alert to notify the
                  community.
                </p>
                <Button className="report-button">Create Lost Pet Alert</Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LostPetAlertsPageComponent;
