'use client';

import { motion } from 'framer-motion';

export default function LoveLetter() {
  return (
    <section className="relative min-h-screen bg-[#fff8ec] px-6 py-24 text-[#6f513d]">
      <div className="mx-auto max-w-2xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#ab8c72]">
            From my heart to yours
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-6xl">
            A Letter For You
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-12 rounded-[2rem] border border-[#ead8c6] bg-[#fffdf8] p-7 sm:p-12 shadow-sm"
        >
          <div className="text-center text-sm italic text-[#b09379]">
            August 23, 2026
          </div>

          <div className="my-8 h-px bg-[#eadfd4]" />

          <h3 className="font-serif text-2xl sm:text-3xl">
            My dearest,
          </h3>

          <div className="mt-6 space-y-6 text-base leading-8 text-[#79614f] sm:text-lg">

            <p>
              Happy birthday. Another year of you, another chapter, and
              another version of yourself that I hope gets to experience
              even more good things than before.
            </p>

            <p>
              I hope this new age brings you closer to everything you have
              been working for. More calm days, more reasons to smile, more
              people who genuinely care about you, and more moments that
              make you think, “I&apos;m glad I got to experience this.”
            </p>

            <p>
              I know not every year is easy. There will always be things
              that don&apos;t go as planned, days that feel heavier than
              usual, and moments when you question where everything is
              going. But I hope you never forget how far you&apos;ve
              already come.
            </p>

            <p>
              I hope you keep becoming the person you want to be without
              feeling like you have to rush. You don&apos;t need to have
              everything figured out today. There&apos;s still so much
              time, so much life, and so many good things waiting for you.
            </p>

            <p className="font-serif text-xl italic text-[#9b7659]">
              So for your birthday, I&apos;m wishing you a year that feels
              lighter, kinder, and a little more exciting than the last.
            </p>

            <p>
              And most importantly, I hope you get to spend it being happy
              in your own way.
            </p>

          </div>

          <div className="mt-10 rounded-2xl bg-[#f9eee3] p-6">
            <p className="font-serif text-lg italic leading-relaxed text-[#896c55]">
              One more thing... Happy birthday once again. I hope this
              little website can be one small part of what makes today
              feel special. 🤍
            </p>
          </div>

          <div className="mt-10 text-right">
            <p className="text-sm italic text-[#a58972]">
              With all my heart,
            </p>

            <p className="mt-2 font-serif text-2xl">
              Apriandah
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}