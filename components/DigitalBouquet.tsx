'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const flowers = [
  {
    emoji: '🌷',
    title: 'Tulip',
    message: 'Semoga langkahmu selalu dipertemukan dengan hal-hal baik.',
  },
  {
    emoji: '🌸',
    title: 'Cherry Blossom',
    message: 'Semoga setiap hari baru terasa lebih ringan dan indah.',
  },
  {
    emoji: '🌹',
    title: 'Rose',
    message: 'Semoga kamu selalu dikelilingi orang-orang yang menyayangimu.',
  },
  {
    emoji: '🌼',
    title: 'Daisy',
    message: 'Semoga kamu selalu punya alasan kecil untuk tersenyum setiap hari.',
  },
  {
    emoji: '🌺',
    title: 'Hibiscus',
    message: 'Semoga semua mimpi yang kamu simpan perlahan menemukan jalannya.',
  },
];

export default function DigitalBouquet() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-[#fff8ec] px-6 py-24 text-[#6f513d]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#ab8c72]">
          A little something for you
        </p>

        <h2 className="mt-4 font-serif text-4xl sm:text-6xl">
          Your Digital Bouquet
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-[#8c725e]">
          Klik bunganya satu per satu. Masing-masing punya pesan kecil untuk kamu.
        </p>

        <div className="mt-14 flex flex-wrap items-end justify-center gap-5">
          {flowers.map((flower, index) => (
            <motion.button
              key={flower.title}
              whileHover={{ y: -10, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(index)}
              className="flex h-28 w-24 items-center justify-center rounded-t-full rounded-b-3xl border border-[#ead9c8] bg-white/70 text-5xl shadow-sm backdrop-blur"
            >
              {flower.emoji}
            </motion.button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="relative h-28 w-56">
            <div className="absolute left-1/2 top-0 h-24 w-4 -translate-x-1/2 bg-[#98a77b] rounded-full" />
            <div className="absolute left-[35%] top-4 h-20 w-3 rotate-[-10deg] bg-[#9dad7f] rounded-full" />
            <div className="absolute right-[35%] top-4 h-20 w-3 rotate-[10deg] bg-[#9dad7f] rounded-full" />

            <div className="absolute bottom-0 left-1/2 h-16 w-40 -translate-x-1/2 rounded-b-[3rem] rounded-t-2xl bg-[#e8d0b5]" />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {selected !== null && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="mx-auto mt-10 max-w-lg rounded-3xl border border-[#e7d5c3] bg-white/75 p-7 backdrop-blur"
            >
              <div className="text-4xl">
                {flowers[selected].emoji}
              </div>

              <h3 className="mt-3 font-serif text-2xl">
                {flowers[selected].title}
              </h3>

              <p className="mt-3 leading-relaxed text-[#846b57]">
                {flowers[selected].message}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}