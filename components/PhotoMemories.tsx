'use client';

import { motion } from 'framer-motion';

const photos = [
  {
    image: '/photo1.jpg',
    caption: 'You being cute as usual, and me obviously taking the picture',
    rotate: -4,
  },
  {
    image: '/photo2.jpg',
    caption: 'Just us, coffee, and another day I had happily repeat',
    rotate: 3,
  },
  {
    image: '/photo3.jpg',
    caption: 'A little adventure, and us somehow surviving it together',
    rotate: -2,
  },
];

export default function PhotoMemories() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff8ec] px-5 py-24 text-[#6f513d]">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-[#b09074]">
          Pieces of our story
        </p>

        <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
          Little Memories
        </h2>

        <p className="mx-auto mt-5 max-w-md text-[#8c725e]">
          A few moments I would gladly keep forever.
        </p>
      </motion.div>

      {/* Polaroids */}
      <div className="mx-auto mt-16 flex max-w-md flex-col items-center gap-12 sm:gap-16">

        {photos.map((photo, index) => (
          <motion.div
            key={photo.image}
            initial={{
              opacity: 0,
              y: 50,
              rotate: photo.rotate,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: photo.rotate,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            whileHover={{
              rotate: 0,
              scale: 1.02,
            }}
            className="relative w-[85%] sm:w-[360px]"
          >

            {/* Tape */}
            <div
              className="
                absolute
                left-1/2
                top-[-13px]
                z-20
                h-8
                w-24
                -translate-x-1/2
                rotate-[-3deg]
                bg-[#e6d4b7]/80
                backdrop-blur-sm
              "
            />

            {/* Polaroid */}
            <div
              className="
                bg-[#fffdf7]
                p-3
                pb-7
                shadow-[0_14px_35px_rgba(91,63,42,0.16)]
              "
            >

              {/* Photo */}
              <div className="aspect-[4/3] overflow-hidden bg-[#eee2d6]">
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Caption */}
              <p className="mt-5 px-2 text-center font-serif text-lg italic leading-relaxed text-[#7e6653]">
                {photo.caption}
              </p>

            </div>

            {/* Small flower */}
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`absolute ${
                index % 2 === 0
                  ? '-right-4 bottom-6'
                  : '-left-4 bottom-8'
              } text-2xl`}
            >
              {index === 0 ? '🌼' : index === 1 ? '🌸' : '🌷'}
            </motion.div>

          </motion.div>
        ))}

      </div>

      {/* Closing */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto mt-20 max-w-md text-center font-serif text-xl italic text-[#9c795d]"
      >
        Some memories deserve more than just a place in the camera roll. 🤍
      </motion.p>

    </section>
  );
}