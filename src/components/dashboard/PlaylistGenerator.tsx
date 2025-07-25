import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Shuffle, Heart, X, RotateCcw } from "lucide-react";

export function PlaylistGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [playlist, setPlaylist] = useState<any[]>([]);

  const generatePlaylist = async () => {
    setIsGenerating(true);
    
    // Simulate journal analysis + playlist generation
    setTimeout(() => {
      const mockPlaylist = [
        {
          id: 1,
          title: "Weightless",
          artist: "Marconi Union",
          mood: "contemplative",
          lyric: "Based on your reflection about finding peace...",
          match: "92%"
        },
        {
          id: 2,
          title: "Mad World",
          artist: "Gary Jules",
          mood: "understanding",
          lyric: "Matches your feeling of being understood...",
          match: "88%"
        },
        {
          id: 3,
          title: "The Night We Met",
          artist: "Lord Huron",
          mood: "reflective",
          lyric: "Resonates with your emotional processing...",
          match: "85%"
        }
      ];
      setPlaylist(mockPlaylist);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
        <h2 className="text-xl font-display font-semibold mb-4 text-gradient">
          Songs From Your Soul
        </h2>
        
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-secondary/30 border border-border/20">
            <p className="text-sm text-muted-foreground mb-2">Latest Journal Analysis:</p>
            <p className="text-sm italic">"Processing emotions through music and reflection..."</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs text-muted-foreground">Contemplative mood detected</span>
            </div>
          </div>
          
          {!playlist.length && !isGenerating && (
            <Button
              variant="glow"
              onClick={generatePlaylist}
              className="w-full rounded-xl h-12 text-base font-medium animate-pulse-glow"
            >
              <Shuffle className="w-4 h-4" />
              Generate Playlist From Your Journal
              <Heart className="w-4 h-4" />
            </Button>
          )}
          
          {isGenerating && (
            <div className="text-center space-y-4 py-8">
              <div className="animate-float">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary/30 to-accent/30 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Analyzing your emotions...</p>
                <p>Searching through music...</p>
                <p>Creating your vibe journey...</p>
              </div>
            </div>
          )}
          
          {playlist.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Your Personalized Playlist</h3>
                <Button variant="ghost" size="sm" onClick={() => setPlaylist([])}>
                  <RotateCcw className="w-4 h-4" />
                  Regenerate
                </Button>
              </div>
              
              <div className="space-y-3">
                {playlist.map((song) => (
                  <div
                    key={song.id}
                    className="p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{song.title}</h4>
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                            {song.match} match
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{song.artist}</p>
                        <p className="text-xs text-accent italic mt-1">"{song.lyric}"</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="default" className="w-full rounded-xl">
                Add to Spotify Playlist
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}