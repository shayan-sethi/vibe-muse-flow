import { Header } from "./Header";
import { PlaylistGenerator } from "./PlaylistGenerator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, TrendingUp, Calendar, Heart, Music, Target } from "lucide-react";
import echoHeroBg from "@/assets/echo-hero-bg.jpg";

export function Dashboard() {
  const stats = {
    totalEntries: 47,
    currentStreak: 3,
    weeklyEntries: 5,
    playlistsGenerated: 12,
    friendsConnected: 8,
    moodImprovement: 15
  };

  const recentEntries = [
    { date: "Today", mood: "😌", preview: "Feeling more centered after the breathing exercise...", sentiment: "positive" },
    { date: "Yesterday", mood: "🎵", preview: "That song really spoke to my soul today...", sentiment: "neutral" },
    { date: "2 days ago", mood: "😢", preview: "Sometimes it's okay to feel sad...", sentiment: "negative" }
  ];

  const insights = [
    { icon: TrendingUp, title: "Mood Trend", description: "Your mood has improved 15% this week", color: "text-green-500" },
    { icon: Music, title: "Music Therapy", description: "Songs helped you process emotions 8 times", color: "text-purple-500" },
    { icon: Target, title: "Goals", description: "You're 60% closer to your daily journaling goal", color: "text-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero background */}
      <div 
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${echoHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-6 py-8">
          {/* Quick Actions */}
          <div className="flex gap-4 mb-8">
            <Link to="/journal">
              <Button variant="glow" size="lg" className="rounded-xl">
                <BookOpen className="w-5 h-5" />
                Write in Journal
              </Button>
            </Link>
            <Link to="/friends">
              <Button variant="outline" size="lg" className="rounded-xl">
                <Users className="w-5 h-5" />
                Connect with Friends
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stats Overview */}
            <div className="lg:col-span-2 space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="card-glow rounded-2xl p-4 backdrop-blur-sm border border-border/20 text-center">
                  <div className="text-2xl font-bold text-primary">{stats.totalEntries}</div>
                  <div className="text-sm text-muted-foreground">Journal Entries</div>
                </div>
                <div className="card-glow rounded-2xl p-4 backdrop-blur-sm border border-border/20 text-center">
                  <div className="text-2xl font-bold text-orange-500">{stats.currentStreak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak 🔥</div>
                </div>
                <div className="card-glow rounded-2xl p-4 backdrop-blur-sm border border-border/20 text-center">
                  <div className="text-2xl font-bold text-green-500">{stats.playlistsGenerated}</div>
                  <div className="text-sm text-muted-foreground">Playlists Created</div>
                </div>
              </div>

              {/* Insights */}
              <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Your Journey Insights
                </h3>
                <div className="space-y-4">
                  {insights.map((insight, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30">
                      <insight.icon className={`w-5 h-5 mt-0.5 ${insight.color}`} />
                      <div>
                        <p className="font-medium">{insight.title}</p>
                        <p className="text-sm text-muted-foreground">{insight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Entries Preview */}
              <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Recent Journal Entries</h3>
                  <Link to="/journal">
                    <Button variant="ghost" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-3">
                  {recentEntries.map((entry, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-background/30 border border-border/20 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{entry.mood}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium">{entry.date}</p>
                            <div className={`w-2 h-2 rounded-full ${
                              entry.sentiment === 'positive' ? 'bg-green-500' :
                              entry.sentiment === 'negative' ? 'bg-red-500' : 'bg-yellow-500'
                            }`} />
                          </div>
                          <p className="text-xs text-muted-foreground truncate">{entry.preview}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Playlist Generator & Quick Actions */}
            <div className="space-y-6">
              <PlaylistGenerator />
              
              {/* Social Preview */}
              <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Friend Activity
                  </h3>
                  <Link to="/friends">
                    <Button variant="ghost" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">🌟</div>
                    <div className="flex-1">
                      <p className="text-sm">Alex shared a playlist</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">🎨</div>
                    <div className="flex-1">
                      <p className="text-sm">Jordan posted a journal reflection</p>
                      <p className="text-xs text-muted-foreground">4 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Weekly Goals */}
              <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  This Week's Goals
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Daily Journaling</span>
                      <span>{stats.weeklyEntries}/7</span>
                    </div>
                    <div className="w-full bg-secondary/50 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(stats.weeklyEntries / 7) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating inspirational quote */}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="card-glow rounded-full px-6 py-3 backdrop-blur-sm border border-border/20 max-w-md">
              <p className="text-sm text-center text-muted-foreground italic">
                "Every emotion is valid. Every entry matters. You're growing."
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}