'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractionFlow({
  onFlowComplete,
}: {
  onFlowComplete: () => void;
}) {
  const [step, setStep] = useState<'loading' | 'passcode' | 'gift'>('loading');
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  // GANTI PASSCODE DI SINI
  const correctCode = '2803';

  useEffect(() => {
    if (step !== 'loading') return;

    const timer = setTimeout(() => {
      setStep('passcode');
    }, 2500);

    return () => clearTimeout(timer);
  }, [step]);

  const handleNumber = (number: string) => {
    if (code.length >= 4) return;

    const newCode = code + number;
    setCode(newCode);
    setError(false);

    if (newCode.length === 4) {
      setTimeout(() => {
        if (newCode === correctCode) {
          setStep('gift');
          setCode('');
        } else {
          setError(true);

          setTimeout(() => {
            setCode('');
            setError(false);
          }, 900);
        }
      }, 300);
    }
  };

  const handleDelete = () => {
    setCode((prev) => prev.slice(0, -1));
    setError(false);
  };

  useEffect(() => {
    if (step !== 'gift') return;

    const timer = setTimeout(() => {
      onFlowComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [step, onFlowComplete]);

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#fff8ec] text-[#74563d]">
      <BackgroundDecoration />

      <AnimatePresence mode="wait">

        {/* ================= LOADING ================= */}

        {step === 'loading' && (
          <motion.section
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-4, 4, -4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mb-8 text-6xl"
            >
              🌷
            </motion.div>

            <h1 className="font-serif text-3xl sm:text-4xl">
              Preparing something special for you...
            </h1>

            <p className="mt-4 text-sm tracking-[0.25em] text-[#a1846a] uppercase">
              Just a little moment
            </p>

            <div className="mt-8 flex gap-2">
              {[0, 1, 2].map((item) => (
                <motion.span
                  key={item}
                  animate={{
                    y: [0, -7, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: item * 0.15,
                  }}
                  className="h-2 w-2 rounded-full bg-[#a77c5d]"
                />
              ))}
            </div>
          </motion.section>
        )}

        {/* ================= PASSCODE ================= */}

        {step === 'passcode' && (
          <motion.section
            key="passcode"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="absolute inset-0 flex items-center justify-center px-6"
          >
            <div className="w-full max-w-sm text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring' }}
                className="mb-5 text-5xl"
              >
                💌
              </motion.div>

              <p className="text-sm uppercase tracking-[0.3em] text-[#b2987e]">
                A little secret
              </p>

              <h1 className="mt-3 font-serif text-4xl">
                For You, My Love
              </h1>

              <p className="mt-3 text-sm text-[#9d8068]">
                Enter our special date
              </p>

              {/* code dots */}

              <motion.div
                animate={
                  error
                    ? {
                        x: [-8, 8, -6, 6, 0],
                      }
                    : {}
                }
                className="mt-8 flex justify-center gap-4"
              >
                {[0, 1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all ${
                      code.length > item
                        ? 'border-[#9f7352] bg-[#9f7352] text-white'
                        : 'border-[#d8c7b6] bg-white/60'
                    }`}
                  >
                    {code.length > item ? '♥' : ''}
                  </div>
                ))}
              </motion.div>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-sm text-red-400"
                  >
                    Hmm... coba ingat lagi 🤍
                  </motion.p>
                )}
              </AnimatePresence>

              {/* keypad */}

              <div className="mx-auto mt-8 grid max-w-[280px] grid-cols-3 gap-3">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(
                  (number) => (
                    <button
                      key={number}
                      onClick={() => handleNumber(number)}
                      className="aspect-square rounded-full border border-[#e0d0bf] bg-white/70 text-xl transition hover:scale-105 hover:bg-white active:scale-95"
                    >
                      {number}
                    </button>
                  )
                )}

                <div />

                <button
                  onClick={() => handleNumber('0')}
                  className="aspect-square rounded-full border border-[#e0d0bf] bg-white/70 text-xl transition hover:scale-105 hover:bg-white active:scale-95"
                >
                  0
                </button>

                <button
                  onClick={handleDelete}
                  className="aspect-square rounded-full text-sm text-[#9b816a] transition hover:bg-white/50"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.section>
        )}

        {/* ================= GIFT ================= */}

        {step === 'gift' && (
          <motion.section
            key="gift"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          >
            <motion.div
              initial={{
                scale: 0,
                rotate: -15,
              }}
              animate={{
                scale: [0, 1.15, 1],
                rotate: [-15, 5, 0],
                y: [0, -8, 0],
              }}
              transition={{
                scale: {
                  duration: 0.8,
                  ease: 'easeOut',
                },
                rotate: {
                  duration: 0.8,
                },
                y: {
                  duration: 1.6,
                  repeat: Infinity,
                  delay: 0.8,
                },
              }}
              className="text-8xl"
            >
              🎁
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 font-serif text-4xl"
            >
              Opening your gift...
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-3 text-[#a08770]"
            >
              Something made just for you 🤍
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '180px' }}
              transition={{
                duration: 2.5,
                delay: 0.5,
                ease: 'easeInOut',
              }}
              className="mt-8 h-[3px] rounded-full bg-[#ad8262]"
            />
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}


/* ================= DECORATION ================= */

function BackgroundDecoration() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [-6, 6, -6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-[8%] top-[12%] text-4xl opacity-50"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [8, -8, 8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-[10%] top-[18%] text-3xl opacity-40"
      >
        🌷
      </motion.div>

      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-[12%] left-[14%] text-3xl opacity-30"
      >
        ✿
      </motion.div>

      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#f1d9bd]/30 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#e7c7b1]/30 blur-3xl" />
    </div>
  );
}