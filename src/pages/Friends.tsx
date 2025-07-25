import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, UserPlus, Heart, MessageCircle, Share2, Music } from "lucide-react";
import { Link } from "react-router-dom";

export default function Friends() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("friends");

  const friends = [
    { id: 1, name: "Alex", avatar: "🌟", status: "online", lastSeen: "2 min ago" },
    { id: 2, name: "Jordan", avatar: "🎨", status: "online", lastSeen: "5 min ago" },
    { id: 3, name: "Sam", avatar: "🌈", status: "offline", lastSeen: "1 hour ago" },
    { id: 4, name: "Riley", avatar: "🎵", status: "online", lastSeen: "just now" },
  ];

  const groups = [
    { id: 1, name: "Anxiety Circle", members: 12, recent: "Maya shared a calming playlist" },
    { id: 2, name: "Feel-Good Music Club", members: 28, recent: "Alex posted about their morning journal" },
    { id: 3, name: "Study Support", members: 8, recent: "Jordan shared an uplifting song" },
  ];

  const sharedContent = [
    {
      id: 1,
      type: "journal",
      from: "Alex",
      content: "Had a breakthrough today about accepting my emotions. Sometimes the hardest part is just allowing myself to feel without judgment.",
      mood: "😌",
      time: "2 hours ago",
      reactions: 5
    },
    {
      id: 2,
      type: "playlist",
      from: "Jordan",
      content: "Songs for when you need to cry it out",
      songs: ["Mad World - Gary Jules", "Hurt - Johnny Cash", "Black - Pearl Jam"],
      time: "4 hours ago",
      reactions: 8
    },
    {
      id: 3,
      type: "journal",
      from: "Sam",
      content: "Music saved me today. That moment when a song perfectly captures what you're feeling inside...",
      mood: "🎵",
      time: "6 hours ago",
      reactions: 3
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="rounded-xl">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-display font-bold text-gradient">Connect & Share</h1>
            <p className="text-muted-foreground">Support each other through music and words</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Friends & Groups */}
          <div className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search friends..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl"
              />
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2">
              <Button
                variant={activeTab === "friends" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("friends")}
                className="rounded-xl"
              >
                Friends
              </Button>
              <Button
                variant={activeTab === "groups" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("groups")}
                className="rounded-xl"
              >
                Groups
              </Button>
            </div>

            {/* Friends List */}
            {activeTab === "friends" && (
              <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Your Circle</h3>
                  <Button variant="ghost" size="sm">
                    <UserPlus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {friends.map((friend) => (
                    <div
                      key={friend.id}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg">
                          {friend.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                          friend.status === "online" ? "bg-green-500" : "bg-gray-400"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{friend.name}</p>
                        <p className="text-xs text-muted-foreground">{friend.lastSeen}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Groups List */}
            {activeTab === "groups" && (
              <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Support Groups</h3>
                  <Button variant="ghost" size="sm">
                    <UserPlus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {groups.map((group) => (
                    <div
                      key={group.id}
                      className="p-3 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium">{group.name}</p>
                        <span className="text-xs text-muted-foreground">{group.members} members</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{group.recent}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Shared Content Feed */}
          <div className="lg:col-span-2">
            <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
              <h3 className="font-medium mb-6">Shared with You</h3>
              <div className="space-y-6">
                {sharedContent.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-secondary/30 border border-border/20"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        {item.type === "journal" ? "📝" : "🎵"}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.from}</p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                      {item.type === "journal" && item.mood && (
                        <div className="text-lg">{item.mood}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      {item.type === "journal" ? (
                        <p className="text-sm leading-relaxed">{item.content}</p>
                      ) : (
                        <div>
                          <p className="text-sm font-medium mb-2">{item.content}</p>
                          <div className="space-y-1">
                            {item.songs?.map((song, index) => (
                              <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Music className="w-3 h-3" />
                                <span>{song}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Heart className="w-3 h-3" />
                        {item.reactions}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <MessageCircle className="w-3 h-3" />
                        Reply
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Share2 className="w-3 h-3" />
                        Share
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}