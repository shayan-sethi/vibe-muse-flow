import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Music, Save, Sparkles } from "lucide-react";
import { MoodSelector } from "./MoodSelector";

export function JournalEntry() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [journalText, setJournalText] = useState("");
  const [attachedSong, setAttachedSong] = useState<any>(null);

  const handleSave = () => {
    if (!journalText.trim()) return;
    
    // Here you would save to backend/localStorage
    console.log("Saving entry:", { mood: selectedMood, text: journalText, song: attachedSong });
    
    // Reset form with animation
    setJournalText("");
    setSelectedMood(null);
    setAttachedSong(null);
  };

  return (
    <div className="space-y-6">
      <div className="card-glow rounded-2xl p-6 backdrop-blur-sm border border-border/20">
        <h2 className="text-xl font-display font-semibold mb-4 text-gradient">
          Express Yourself
        </h2>
        
        <MoodSelector 
          selectedMood={selectedMood}
          onMoodSelect={setSelectedMood}
        />
        
        <div className="mt-6 space-y-4">
          <div className="relative">
            <Textarea
              placeholder="Write about how you're feeling... 💭"
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              className="min-h-32 resize-none rounded-xl bg-background/50 border-border/30 focus:border-primary/50 transition-all duration-300 text-base leading-relaxed"
              style={{
                background: selectedMood 
                  ? `linear-gradient(135deg, hsl(var(--mood-${selectedMood}) / 0.05), transparent)`
                  : undefined
              }}
            />
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="floating"
              size="sm"
              onClick={() => {
                // Open Spotify modal
                console.log("Opening Spotify modal");
              }}
              className="rounded-xl"
            >
              <Music className="w-4 h-4" />
              Attach Song
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
            Save Entry
            <Sparkles className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}