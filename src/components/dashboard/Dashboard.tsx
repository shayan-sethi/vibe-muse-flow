import { Header } from "./Header";
import { JournalEntry } from "./JournalEntry";
import { PlaylistGenerator } from "./PlaylistGenerator";
import { SocialSidebar } from "./SocialSidebar";
import echoHeroBg from "@/assets/echo-hero-bg.jpg";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero background */}
      <div 
        className="fixed inset-0 z-0 opacity-20"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Journaling */}
            <div className="lg:col-span-4 space-y-6">
              <JournalEntry />
              
              {/* Journal History Preview */}
              <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
                <h3 className="font-medium mb-4">Recent Entries</h3>
                <div className="space-y-3">
                  {[
                    { date: "Today", mood: "😌", preview: "Feeling more centered after the breathing exercise..." },
                    { date: "Yesterday", mood: "🎵", preview: "That song really spoke to my soul today..." },
                    { date: "2 days ago", mood: "😢", preview: "Sometimes it's okay to feel sad..." }
                  ].map((entry, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-background/30 border border-border/20 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{entry.mood}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{entry.date}</p>
                          <p className="text-xs text-muted-foreground truncate">{entry.preview}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Center Column - Music & Playlists */}
            <div className="lg:col-span-4">
              <PlaylistGenerator />
            </div>
            
            {/* Right Column - Social */}
            <div className="lg:col-span-4">
              <SocialSidebar />
            </div>
          </div>
          
          {/* Floating inspirational quote */}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="card-glow rounded-full px-6 py-3 backdrop-blur-sm border border-border/20 max-w-md">
              <p className="text-sm text-center text-muted-foreground italic">
                "It's okay to feel. You showed up today. That matters."
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}