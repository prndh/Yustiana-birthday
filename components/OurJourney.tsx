'use client';

import { motion } from 'framer-motion';

const journey = [
  {
    icon: '✨',
    label: 'THE VERY BEGINNING',
    title: 'First Time We Met',
    description:
      'The day everything started to feel a little different.',
  },
  {
    icon: '💬',
    label: 'A MAGICAL MOMENT',
    title: 'Our First Conversation',
    description:
      'The first words, the first laugh, and the beginning of so many stories.',
  },
  {
    icon: '🌿',
    label: 'A BEAUTIFUL MEMORY',
    title: 'Our First Outing',
    description:
      'A simple day that somehow became one of the memories I still remember.',
  },
  {
    icon: '🌷',
    label: 'ANOTHER CHAPTER',
    title: 'A Day I Will Always Remember',
    description:
      'One of those moments that looked ordinary at first, but became special because it was with you.',
  },
  {
    icon: '🤍',
    label: 'OUR STORY CONTINUES',
    title: 'Still Writing Our Story',
    description:
      'There are still so many places to go, stories to tell, and memories waiting for us.',
  },
];

export default function OurJourney() {
  return (
    <section className="relative min-h-screen bg-[#fff8ec] px-5 py-24 text-[#6f513d] overflow-hidden">

      {/* Decorative flowers */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-[8%] top-[8%] text-3xl opacity-40"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-[8%] top-[16%] text-3xl opacity-40"
      >
        🌷
      </motion.div>


      <div className="relative mx-auto max-w-2xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#b09074]">
            Our Story So Far
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-6xl">
            Our Journey
          </h2>

          <p className="mx-auto mt-5 max-w-md leading-relaxed text-[#8c725e]">
            Some moments stay with us longer than we ever expected.
          </p>
        </motion.div>


        {/* Timeline */}
        <div className="relative mt-16">

          {/* Line */}
          <div className="absolute bottom-4 left-[12px] top-4 w-px bg-[#d9bda7]" />

          <div className="space-y-12">

            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="relative pl-12"
              >

                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    delay: index * 0.08,
                  }}
                  className="absolute left-[4px] top-8 flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#d6a183]"
                >
                  <div className="h-[6px] w-[6px] rounded-full bg-white" />
                </motion.div>


                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="rounded-[1.8rem] border border-[#ead7c5] bg-white/65 p-6 backdrop-blur-sm sm:p-8"
                >

                  <div className="text-3xl">
                    {item.icon}
                  </div>

                  <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-[#b28b70]">
                    {item.label}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-[#856c58]">
                    {item.description}
                  </p>

                </motion.div>

              </motion.div>
            ))}

          </div>

        </div>


        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="mt-20 text-center"
        >
          <p className="font-serif text-xl italic text-[#9c795d]">
            And there are still so many chapters left to write. 🤍
          </p>
        </motion.div>

      </div>

    </section>
  );
}