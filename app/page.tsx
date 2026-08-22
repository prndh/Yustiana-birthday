'use client';

import { useRef, useState } from 'react';
import InteractionFlow from '@/components/InteractionFlow';
import BirthdayMain from '@/components/BirthdayMain';

export default function Home() {
  const [showBirthday, setShowBirthday] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Musik global */}
      <audio
        ref={audioRef}
        src="/music/monolog.mp3"
        loop
      />

      {!showBirthday ? (
        <InteractionFlow
          onFlowComplete={() => {
            startMusic();
            setShowBirthday(true);
          }}
        />
      ) : (
        <BirthdayMain />
      )}

      {/* Tombol musik */}
      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#b78765] text-xl text-white shadow-lg transition hover:scale-105"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? '⏸' : '🎵'}
      </button>
    </>
  );
}