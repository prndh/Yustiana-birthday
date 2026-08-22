'use client';

import { useRef, useState } from 'react';
import InteractionFlow from '@/components/InteractionFlow';
import BirthdayMain from '@/components/BirthdayMain';

export default function Home() {
  const [showBirthday, setShowBirthday] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicPlayerReached, setMusicPlayerReached] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedRef = useRef(false);

  // Musik mulai saat user pertama kali berinteraksi.
  // Ini lebih aman karena browser biasanya memblokir autoplay murni.
  const startGlobalMusic = async () => {
    if (hasStartedRef.current || musicPlayerReached) return;

    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.volume = 0.5;
      await audio.play();

      hasStartedRef.current = true;
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleGlobalMusic = async () => {
    const audio = audioRef.current;
    if (!audio || musicPlayerReached) return;

    if (audio.paused) {
      try {
        await audio.play();
        hasStartedRef.current = true;
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // Dipanggil ketika section MusicPlayer terlihat.
 const stopGlobalMusic = () => {
  const audio = audioRef.current;

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.muted = true;
  }

  setIsPlaying(false);
  setMusicPlayerReached(true);
};

  return (
    <>
      {/* Musik background */}
      <audio
        ref={audioRef}
        src="/music/monolog.mp3"
        loop
        preload="auto"
      />

      {!showBirthday ? (
        <div onPointerDown={startGlobalMusic}>
          <InteractionFlow
            onFlowComplete={() => setShowBirthday(true)}
          />
        </div>
      ) : (
        <BirthdayMain
          onEnterMusicPlayer={stopGlobalMusic}
        />
      )}

      {/* Tombol musik global.
          Otomatis hilang setelah sampai MusicPlayer. */}
      {!musicPlayerReached && (
        <button
          type="button"
          onClick={toggleGlobalMusic}
          className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#b78765] text-xl text-white shadow-lg transition hover:scale-105 active:scale-95"
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        >
          {isPlaying ? '⏸' : '🎵'}
        </button>
      )}
    </>
  );
}