'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EndingSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff8ec] px-6 py-24 text-[#6f513d]">
      
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
        className="absolute left-[8%] top-[12%] text-3xl opacity-40"
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
        className="absolute right-[10%] top-[18%] text-3xl opacity-40"
      >
        🌷
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-[18%] left-[12%] text-2xl opacity-30"
      >
        ✿
      </motion.div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.35em] text-[#b09074]"
        >
          With all my heart
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 font-serif text-5xl leading-tight sm:text-7xl"
        >
          May your life
          <span className="block italic text-[#b27d62]">
            always be filled
          </span>
          with flowers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-lg text-base leading-8 text-[#8a705d] sm:text-lg"
        >
          Happy birthday, Yustiana. May your days always be filled with love,
          happiness, laughter, and all the beautiful things you deserve.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 font-serif text-lg italic text-[#97745a]"
        >
          — With love that never runs out 🤍 —
        </motion.p>

        <motion.button
          type="button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowPopup(true)}
          className="mt-12 rounded-full bg-[#b78765] px-8 py-4 text-white transition"
        >
          One last thing 🎁
        </motion.button>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#5d4635]/50 px-6 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.82,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                type: 'spring',
                damping: 20,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-[2rem] border border-[#ead7c5] bg-[#fffaf2] p-8 text-center shadow-xl"
            >
              <div className="text-6xl">
                🎂
              </div>

              <h3 className="mt-6 font-serif text-4xl">
                Happy Birthday!
              </h3>

              <p className="mt-3 font-serif text-2xl text-[#a77d5d]">
                Yustiana Sari🤍
              </p>

              <p className="mt-6 leading-relaxed text-[#806a59]">
                I hope this little surprise makes your day feel even more special.
              </p>

              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="mt-8 rounded-full border border-[#d9c1ac] bg-[#f3e4d4] px-7 py-3 text-[#765943]"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}