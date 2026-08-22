'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const notes = [
  'Thank you for always being yourself.',
  'Your kindness makes ordinary days feel warmer.',
  'I love the way you make people around you feel comfortable.',
  'Your laugh is one of my favourite sounds.',
  'You make even simple moments feel special.',
  'I admire how strong you are, even when things are not easy.',
  'Thank you for every conversation, even the random ones.',
  'You have a way of making the world feel a little softer.',
  'I am grateful for every memory we have made together.',
  'There are so many little things about you that I appreciate.',
];

export default function GratitudeJar() {
  const [currentNote, setCurrentNote] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [usedNotes, setUsedNotes] = useState<number[]>([]);

  const shakeJar = () => {
    if (isShaking) return;

    setIsShaking(true);
    setCurrentNote(null);

    setTimeout(() => {
      let available = notes
        .map((_, index) => index)
        .filter((index) => !usedNotes.includes(index));

      if (available.length === 0) {
        available = notes.map((_, index) => index);
        setUsedNotes([]);
      }

      const randomIndex =
        available[Math.floor(Math.random() * available.length)];

      setCurrentNote(notes[randomIndex]);
      setUsedNotes((prev) => [...prev, randomIndex]);
      setIsShaking(false);
    }, 900);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff8ec] px-5 py-24 text-[#6f513d]">

      {/* Floating decorations */}
      <motion.div
        animate={{
          y: [0, -14, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-[8%] top-[10%] text-3xl opacity-40"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{
          y: [0, 16, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-[10%] top-[20%] text-3xl opacity-40"
      >
        🌷
      </motion.div>

      <div className="relative mx-auto max-w-xl text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#b09074]">
            From My Heart to Yours
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Reasons I&apos;m Grateful to Know You
          </h2>

          <p className="mt-5 text-[#8c725e]">
            Shake the jar and pick a little note. 🤍
          </p>
        </motion.div>

        {/* Jar */}
        <div className="mt-14 flex justify-center">
          <motion.div
            animate={
              isShaking
                ? {
                    rotate: [-6, 6, -5, 5, -3, 3, 0],
                    x: [-5, 5, -4, 4, -2, 2, 0],
                  }
                : {}
            }
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            {/* Jar lid */}
            <div className="mx-auto h-9 w-32 rounded-t-2xl rounded-b-md bg-[#d8ad91]" />

            {/* Jar body */}
            <div className="relative h-64 w-44 overflow-hidden rounded-b-[2.7rem] rounded-t-xl border-2 border-[#d9c1ad] bg-white/35 backdrop-blur-sm">

              {/* Notes inside jar */}
              <motion.div
                animate={
                  isShaking
                    ? {
                        y: [0, 12, -10, 8, -5, 0],
                      }
                    : {}
                }
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <div className="absolute left-8 top-12 h-8 w-12 rotate-[-8deg] rounded-md bg-[#efc8bb]" />
                <div className="absolute right-7 top-20 h-8 w-12 rotate-[10deg] rounded-md bg-[#f4d9c6]" />
                <div className="absolute left-12 top-28 h-8 w-12 rotate-[5deg] rounded-md bg-[#eac1ae]" />
                <div className="absolute right-9 top-36 h-8 w-12 rotate-[-12deg] rounded-md bg-[#f3d3c1]" />
                <div className="absolute left-7 top-44 h-8 w-12 rotate-[8deg] rounded-md bg-[#e7bea8]" />
              </motion.div>

              {/* Flowers inside */}
              <div className="absolute bottom-6 left-7 text-2xl opacity-70">
                🌼
              </div>

              <div className="absolute right-7 top-10 text-2xl opacity-70">
                🌸
              </div>
            </div>
          </motion.div>
        </div>

        {/* Shake button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={shakeJar}
          disabled={isShaking}
          className="mt-10 rounded-full border border-[#d9bfa8] bg-[#f1dfcf] px-8 py-4 text-[#765943] transition disabled:opacity-60"
        >
          {isShaking ? 'Shaking...' : '🫙 Shake the Jar'}
        </motion.button>

        {/* Note result */}
        <AnimatePresence mode="wait">
          {currentNote && (
            <motion.div
              key={currentNote}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mx-auto mt-12 max-w-md rounded-[1.8rem] border border-[#ead8c6] bg-[#fffdf8] p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#baa089]">
                A little note for you
              </p>

              <p className="mt-6 font-serif text-2xl leading-relaxed text-[#80634d]">
                {currentNote}
              </p>

              <div className="mt-6 text-2xl">
                💕
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}