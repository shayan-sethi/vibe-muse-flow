import { useState } from "react";
import { Button } from "@/components/ui/button";

const moods = [
  { emoji: "😢", name: "sad", label: "Sad", color: "mood-sad" },
  { emoji: "😐", name: "neutral", label: "Neutral", color: "mood-neutral" },
  { emoji: "🙂", name: "happy", label: "Happy", color: "mood-happy" },
  { emoji: "😍", name: "excited", label: "Excited", color: "mood-excited" },
  { emoji: "😡", name: "angry", label: "Angry", color: "mood-angry" },
  { emoji: "😴", name: "sleepy", label: "Sleepy", color: "mood-sleepy" },
];

interface MoodSelectorProps {
  selectedMood: string | null;
  onMoodSelect: (mood: string) => void;
}

export function MoodSelector({ selectedMood, onMoodSelect }: MoodSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground">How are you feeling?</h3>
      <div className="flex flex-wrap gap-2">
        {moods.map((mood) => (
          <Button
            key={mood.name}
            variant={selectedMood === mood.name ? "glow" : "mood"}
            size="sm"
            onClick={() => onMoodSelect(mood.name)}
            className={`
              relative transition-all duration-300 rounded-xl
              ${selectedMood === mood.name ? 'scale-110 animate-pulse-glow' : 'hover:scale-105'}
            `}
            style={{
              background: selectedMood === mood.name 
                ? `linear-gradient(135deg, hsl(var(--${mood.color})) 20%, hsl(var(--${mood.color}) / 0.6) 100%)`
                : undefined
            }}
          >
            <span className="text-lg mr-1">{mood.emoji}</span>
            <span className="text-xs">{mood.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}