import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search, Heart, MessageSquare, Share2, MoreHorizontal, Home, Compass, PlusSquare, User } from 'lucide-react'

export default function FeedPage() {
  const posts = [
    {
      id: 1,
      user: { name: 'Emily R.', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
      image: '/placeholder.svg?height=400&width=400',
      caption: 'Max enjoying his new toy! 🐶🎾 #GoldenRetriever #HappyDog',
      likes: 128,
      comments: 24,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      user: { name: 'Alex M.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      image: '/placeholder.svg?height=400&width=400',
      caption: 'Luna\'s first day at the park! She made so many new friends. 🐱🌳 #CatAdventures',
      likes: 95,
      comments: 18,
      timeAgo: '4 hours ago'
    },
    {
      id: 3,
      user: { name: 'Sarah K.', avatar: 'https://randomuser.me/api/portraits/women/45.jpg' },
      image: '/placeholder.svg?height=400&width=400',
      caption: 'Rocky showing off his new tricks! 🐾🏆 #DogTraining #ProudDogMom',
      likes: 210,
      comments: 32,
      timeAgo: '6 hours ago'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-10 bg-gray-800 border-b border-gray-700 px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold">PetConnect</h1>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-100">
            <PlusSquare className="h-6 w-6" />
            <span className="sr-only">New Post</span>
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 space-y-6 max-w-2xl pb-[50px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Search posts, pets, or users..." className="pl-10 bg-gray-800 text-gray-100 border-gray-700" />
          </div>

          {posts.map((post) => (
            <Card key={post.id} className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={post.user.avatar} alt={post.user.name} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg text-white">{post.user.name}</CardTitle>
                  <p className="text-sm text-gray-400">{post.timeAgo}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400">
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
                  <p className="text-gray-100 mb-2">{post.caption}</p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="mr-4">{post.likes} likes</span>
                    <span>{post.comments} comments</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-700 p-2">
                <div className="flex justify-around w-full">
                  <Button variant="ghost" className="flex items-center gap-2 text-gray-200 hover:text-white">
                    <Heart className="h-5 w-5" />
                    Like
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2 text-gray-200 hover:text-white">
                    <MessageSquare className="h-5 w-5" />
                    Comment
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2 text-gray-200 hover:text-white">
                    <Share2 className="h-5 w-5" />
                    Share
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="sticky bottom-0 bg-gray-800 border-t border-gray-700 px-4 py-2">
        <nav className="flex justify-around">
          <Button variant="ghost" size="icon" className="text-gray-100">
            <Home className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-100">
            <Compass className="h-6 w-6" />
            <span className="sr-only">Explore</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-100">
            <PlusSquare className="h-6 w-6" />
            <span className="sr-only">New Post</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-100">
            <User className="h-6 w-6" />
            <span className="sr-only">Profile</span>
          </Button>
        </nav>
      </footer>
    </div>
  )
}