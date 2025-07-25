import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Shuffle, Heart, X, RotateCcw } from "lucide-react";

export function PlaylistGenerator() {
  const [moodSlider, setMoodSlider] = useState([50]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [playlist, setPlaylist] = useState<any[]>([]);

  const generatePlaylist = async () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockPlaylist = [
        {
          id: 1,
          title: "Midnight Reflections",
          artist: "Luna Santos",
          mood: "contemplative",
          lyric: "In the quiet of the night, I find my peace..."
        },
        {
          id: 2,
          title: "Rising Above",
          artist: "Echo Dreams",
          mood: "hopeful",
          lyric: "Every storm will pass, the sun will shine again..."
        },
        {
          id: 3,
          title: "Gentle Waves",
          artist: "Serene Souls",
          mood: "calming",
          lyric: "Let the rhythm wash your worries away..."
        }
      ];
      setPlaylist(mockPlaylist);
      setIsGenerating(false);
    }, 3000);
  };

  const getMoodLabel = (value: number) => {
    if (value < 25) return "☁️ Reflective";
    if (value < 50) return "🌤 Peaceful";
    if (value < 75) return "🌈 Uplifting";
    return "✨ Energetic";
  };

  return (
    <div className="space-y-6">
      <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
        <h2 className="text-xl font-display font-semibold mb-4 text-gradient">
          Songs That Feel What You Feel
        </h2>
        
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-muted-foreground">
                Mood Vibe
              </label>
              <span className="text-sm font-medium text-primary">
                {getMoodLabel(moodSlider[0])}
              </span>
            </div>
            <Slider
              value={moodSlider}
              onValueChange={setMoodSlider}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
          
          {!playlist.length && !isGenerating && (
            <Button
              variant="glow"
              onClick={generatePlaylist}
              className="w-full rounded-xl h-12 text-base font-medium animate-pulse-glow"
            >
              <Shuffle className="w-4 h-4" />
              Create Playlist From My Mood + Journal
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
                        <h4 className="font-medium">{song.title}</h4>
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