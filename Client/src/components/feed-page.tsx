import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search, Heart, MessageSquare, Share2, MoreHorizontal, Home, Compass, PlusSquare, User } from 'lucide-react'
import logo from '../images/logo.png'

export default function FeedPage() {
  const posts = [
    {
      id: 1,
      user: { name: 'Emily R.', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
      image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400',
      caption: 'Max enjoying his new toy! 🐶🎾 #GoldenRetriever #HappyDog',
      likes: 128,
      comments: 24,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      user: { name: 'Alex M.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400',
      caption: 'Luna\'s first day at the park! She made so many new friends. 🐱🌳 #CatAdventures',
      likes: 95,
      comments: 18,
      timeAgo: '4 hours ago'
    },
    {
      id: 3,
      user: { name: 'Sarah K.', avatar: 'https://randomuser.me/api/portraits/women/45.jpg' },
      image: 'https://images.unsplash.com/photo-1678357530359-02c0a3691624?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400',
      caption: 'Rocky showing off his new tricks! 🐾🏆 #DogTraining #ProudDogMom',
      likes: 210,
      comments: 32,
      timeAgo: '6 hours ago'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-cyan-50 text-slate-900 pb-20">
      <header className="sticky top-0 z-10 bg-white border-b border-cyan-200 px-4 py-2 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="PetConnect"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Socials
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
            <Bell className="h-6 w-6" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
            <PlusSquare className="h-6 w-6" />
            <span className="sr-only">New Post</span>
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 space-y-6 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-600" />
            <Input 
              type="text" 
              placeholder="Search posts, pets, or users..." 
              className="pl-10 bg-white text-slate-900 border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
            />
          </div>

          {posts.map((post) => (
            <Card key={post.id} className="bg-white border-cyan-200 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="border-2 border-cyan-300">
                  <AvatarImage src={post.user.avatar} alt={post.user.name} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg text-slate-900">{post.user.name}</CardTitle>
                  <p className="text-sm text-cyan-600">{post.timeAgo}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
                  <MoreHorizontal className="h-5 w-5" />
                  <span className="sr-only">More options</span>
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <img
                  src={post.image}
                  alt="Post image"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <p className="text-slate-800 mb-2">{post.caption}</p>
                  <div className="flex items-center text-cyan-600 text-sm">
                    <span className="mr-4">{post.likes} likes</span>
                    <span>{post.comments} comments</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-cyan-200 p-2">
                <div className="flex justify-around w-full">
                  <Button variant="ghost" className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
                    <Heart className="h-5 w-5" />
                    Like
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
                    <MessageSquare className="h-5 w-5" />
                    Comment
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-100">
                    <Share2 className="h-5 w-5" />
                    Share
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}