'use client';

import { motion } from 'framer-motion';
import DigitalBouquet from '@/components/DigitalBouquet';
import LoveLetter from '@/components/LoveLetter';
import PhotoMemories from '@/components/PhotoMemories';
import OurJourney from '@/components/OurJourney';
import MusicPlayer from '@/components/MusicPlayer';
import GratitudeJar from '@/components/GratitudeJar';
import EndingSection from '@/components/EndingSection';

export default function BirthdayMain({
  onEnterMusicPlayer,
}: {
  onEnterMusicPlayer: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#fff8ec] text-[#6f513d] overflow-hidden">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        
        {/* Floating flowers */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[8%] top-[15%] text-5xl opacity-50"
        >
          🌸
        </motion.div>

        <motion.div
          animate={{
            y: [0, 18, 0],
            rotate: [5, -5, 5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-[10%] top-[18%] text-4xl opacity-50"
        >
          🌷
        </motion.div>

        <motion.div
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute bottom-[15%] left-[12%] text-4xl opacity-30"
        >
          ✿
        </motion.div>

        {/* Main content */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.35em] text-sm text-[#aa8a70]"
        >
          Today is your day
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="mt-5 font-serif text-5xl sm:text-7xl leading-tight"
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-3 font-serif text-3xl sm:text-4xl text-[#9b7659]"
        >
          Yustiana Sari 🤍
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-[#8b705d]"
        >
          May this new chapter bring you more happiness,
          more beautiful memories, and everything your heart has been waiting for.
        </motion.p>

        {/* Date */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
          }}
          className="mt-8 rounded-full border border-[#decbb9] bg-white/50 px-6 py-3 backdrop-blur"
        >
          <span className="text-sm tracking-[0.2em] text-[#96785f]">
            23 • 08 • 2026
          </span>
        </motion.div>

        {/* Scroll indicator */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
          }}
          className="absolute bottom-8 flex flex-col items-center gap-2 text-[#a58a73]"
        >
          <span className="text-xs uppercase tracking-[0.25em]">
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="text-xl"
          >
            ↓
          </motion.div>
        </motion.div>

      </section>

      <DigitalBouquet />

      <LoveLetter />

      <PhotoMemories />

      <OurJourney />

      <MusicPlayer onEnterPlayer={onEnterMusicPlayer} />

      <GratitudeJar />

      <EndingSection />


    </main>
  );
}