import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Music, Save, Sparkles, ArrowLeft, Calendar, Tag } from "lucide-react";
import { MoodSelector } from "@/components/dashboard/MoodSelector";
import { Link } from "react-router-dom";

export default function Journal() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [journalText, setJournalText] = useState("");
  const [attachedSong, setAttachedSong] = useState<any>(null);
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: "Today",
      mood: "😌",
      text: "Feeling more centered after the breathing exercise. Sometimes taking a step back helps me see things clearer. The music really helped me process today's emotions.",
      song: { name: "Weightless", artist: "Marconi Union" }
    },
    {
      id: 2,
      date: "Yesterday", 
      mood: "🎵",
      text: "That song really spoke to my soul today. It's amazing how music can capture feelings that words can't express. I felt understood and less alone.",
      song: { name: "Mad World", artist: "Gary Jules" }
    },
    {
      id: 3,
      date: "2 days ago",
      mood: "😢", 
      text: "Sometimes it's okay to feel sad. I'm learning that emotions are temporary visitors, not permanent residents. Tomorrow might be different.",
      song: null
    }
  ]);

  const handleSave = () => {
    if (!journalText.trim()) return;
    
    const newEntry = {
      id: entries.length + 1,
      date: "Today",
      mood: selectedMood || "😐",
      text: journalText,
      song: attachedSong
    };
    
    setEntries([newEntry, ...entries]);
    setJournalText("");
    setSelectedMood(null);
    setAttachedSong(null);
  };

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
            <h1 className="text-3xl font-display font-bold text-gradient">Your Journal</h1>
            <p className="text-muted-foreground">Express yourself freely and safely</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* New Entry Form */}
          <div className="lg:col-span-2">
            <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20 mb-8">
              <h2 className="text-xl font-display font-semibold mb-6 text-gradient">
                How are you feeling right now?
              </h2>
              
              <MoodSelector 
                selectedMood={selectedMood}
                onMoodSelect={setSelectedMood}
              />
              
              <div className="mt-6 space-y-4">
                <div className="relative">
                  <Textarea
                    placeholder="Write about your thoughts, feelings, experiences... This is your safe space 💭"
                    value={journalText}
                    onChange={(e) => setJournalText(e.target.value)}
                    className="min-h-48 resize-none rounded-xl bg-background/50 border-border/30 focus:border-primary/50 transition-all duration-300 text-base leading-relaxed"
                    style={{
                      background: selectedMood 
                        ? `linear-gradient(135deg, hsl(var(--mood-${selectedMood}) / 0.05), transparent)`
                        : undefined
                    }}
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                    {journalText.length} characters
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button
                    variant="floating"
                    size="sm"
                    onClick={() => {
                      console.log("Opening Spotify modal");
                    }}
                    className="rounded-xl"
                  >
                    <Music className="w-4 h-4" />
                    Attach Song That Matches Your Mood
                  </Button>
                  
                  {attachedSong && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                        <Music className="w-4 h-4" />
                      </div>
                      <span>{attachedSong.name}</span>
                    </div>
                  )}
                </div>
                
                <Button
                  variant="glow"
                  onClick={handleSave}
                  disabled={!journalText.trim()}
                  className="w-full rounded-xl h-12 text-base font-medium"
                >
                  <Save className="w-4 h-4" />
                  Save to Journal
                  <Sparkles className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Your Progress
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">This Week</span>
                  <span className="font-medium">5 entries</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Current Streak</span>
                  <span className="font-medium text-primary">3 days 🔥</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Entries</span>
                  <span className="font-medium">{entries.length}</span>
                </div>
              </div>
            </div>

            <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Recent Moods
              </h3>
              <div className="flex flex-wrap gap-2">
                {["😌", "🎵", "😢", "🌈", "✨"].map((mood, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-lg hover:bg-secondary transition-colors"
                  >
                    {mood}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Journal History */}
        <div className="mt-8">
          <h2 className="text-xl font-display font-semibold mb-6">Your Journey</h2>
          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{entry.mood}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-medium">{entry.date}</h3>
                      {entry.song && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Music className="w-3 h-3" />
                          <span>{entry.song.name} - {entry.song.artist}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{entry.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}