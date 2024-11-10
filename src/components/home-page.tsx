import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Bell, Search, Heart, MessageSquare, ChevronRight } from "lucide-react";

export function HomePageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-10 bg-gray-800 border-b border-gray-700 px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold">PetConnect</h1>
        <Button variant="ghost" size="icon" className="text-gray-100">
          <Bell className="h-6 w-6" />
          <span className="sr-only">Notifications</span>
        </Button>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 pb-20 space-y-6 max-w-2xl">
          <div className="relative mt-5">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for pets or owners..."
              className="pl-10 bg-gray-800 text-gray-100 border-gray-700"
            />
          </div>

          <section>
            <h2 className="text-xl font-semibold mb-4">Nearby Pet Owners</h2>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex-none">
                  <Avatar className="w-20 h-20 ">
                    <AvatarImage
                      src={`https://randomuser.me/api/portraits/men/${item}.jpg`}
                      alt={`User ${item}`}
                    />
                    <AvatarFallback>U{item}</AvatarFallback>
                  </Avatar>
                  <p className="text-center mt-2 font-medium block">John D.</p>
                  <p className="text-center text-sm text-gray-400 block">
                    Golden Retriever, 3y
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Upcoming Playdates</h2>
            {[1, 2, 3].map((item) => (
              <Card key={item} className="mb-4 bg-gray-800 border-gray-700">
                <CardContent className="flex justify-between items-center p-4">
                  <div>
                    <h3 className="font-semibold text-white">
                      Doggy Playdate at Central Park
                    </h3>
                    <p className="text-sm text-gray-200">Saturday, 2:00 PM</p>
                    <p className="text-sm text-blue-300">5 Attendees</p>
                  </div>
                  <ChevronRight className="text-gray-400" />
                </CardContent>
              </Card>
            ))}
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Community Posts</h2>
            {[1, 2, 3].map((item) => (
              <Card key={item} className="mb-4 bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={`https://randomuser.me/api/portraits/women/${item}.jpg`}
                      alt={`User ${item}`}
                    />
                    <AvatarFallback>U{item}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-white">
                      Sarah K.
                    </CardTitle>
                    <p className="text-sm text-gray-400">2 hours ago</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-100">
                    Just had a great walk with Max! Any recommendations for
                    pet-friendly cafes in the area?
                  </p>
                  <div className="flex justify-around border-t border-gray-700 pt-4">
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-gray-200 hover:text-white"
                    >
                      <Heart className="h-5 w-5" />
                      Like
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-gray-200 hover:text-white"
                    >
                      <MessageSquare className="h-5 w-5" />
                      Comment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomePageComponent;
