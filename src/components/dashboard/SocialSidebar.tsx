import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Share2, Users, UserPlus } from "lucide-react";

const friends = [
  { id: 1, name: "Alex", avatar: "A", status: "online", lastSeen: "now" },
  { id: 2, name: "Sam", avatar: "S", status: "away", lastSeen: "5m ago" },
  { id: 3, name: "Riley", avatar: "R", status: "offline", lastSeen: "2h ago" },
  { id: 4, name: "Jordan", avatar: "J", status: "online", lastSeen: "now" },
];

const groupPosts = [
  {
    id: 1,
    author: "Casey",
    group: "Anxiety Circle",
    content: "Just practiced breathing exercises... feeling a bit lighter 🌸",
    mood: "😌",
    timeAgo: "15m ago",
    hearts: 8,
    comments: 3
  },
  {
    id: 2,
    author: "Morgan",
    group: "Feel-Good Mix Club",
    content: "This song helped me today",
    mood: "🎵",
    timeAgo: "1h ago",
    hearts: 12,
    comments: 5,
    hasPlaylist: true
  },
];

export function SocialSidebar() {
  const [activeTab, setActiveTab] = useState("friends");

  return (
    <div className="space-y-6">
      <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
        <h2 className="text-xl font-display font-semibold mb-4 text-gradient">
          Your Community
        </h2>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="friends" className="rounded-xl">
              <Users className="w-4 h-4 mr-1" />
              Friends
            </TabsTrigger>
            <TabsTrigger value="groups" className="rounded-xl">
              <Heart className="w-4 h-4 mr-1" />
              Groups
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="friends" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm">Friends ({friends.length})</h3>
              <Button variant="ghost" size="sm">
                <UserPlus className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-3">
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-background/50 transition-all duration-300"
                >
                  <div className="relative">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={`/api/placeholder/32/32`} />
                      <AvatarFallback className="text-xs">{friend.avatar}</AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                      friend.status === 'online' ? 'bg-green-500' :
                      friend.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{friend.name}</p>
                    <p className="text-xs text-muted-foreground">{friend.lastSeen}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="groups" className="space-y-4">
            <div className="space-y-4">
              {groupPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 rounded-xl bg-background/50 border border-border/30 space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs">{post.mood}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium">{post.author}</p>
                      <Badge variant="secondary" className="text-xs">
                        {post.group}
                      </Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
                  </div>
                  
                  <p className="text-sm leading-relaxed">{post.content}</p>
                  
                  {post.hasPlaylist && (
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                          <span className="text-xs">🎵</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium">Calming Vibes Mix</p>
                          <p className="text-xs text-muted-foreground">5 songs</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 pt-2">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="text-xs">{post.hearts}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="text-xs">{post.comments}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Streak & Progress */}
      <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
        <h3 className="font-medium mb-4">Your Progress</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Journal Streak</span>
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              4 days 🔥
            </Badge>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs">🥇</span>
              </div>
              <span className="text-sm">First Share</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-xs">🎵</span>
              </div>
              <span className="text-sm">Music Explorer</span>
            </div>
          </div>
          
          <div className="text-center text-xs text-muted-foreground italic">
            "You showed up today. That matters."
          </div>
        </div>
      </div>
    </div>
  );
}