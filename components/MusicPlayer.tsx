'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { motion } from 'framer-motion';


const playlist = [
  {
    title: 'Monolog',
    artist: 'Pamungkas',
    src: '/music/monolog.mp3',
  },
  {
    title: 'Kita Buat Menyenangkan',
    artist: 'Bernadya',
    src: '/music/kita-buat-menyenangkan.mp3',
  },
  {
    title: '2001x',
    artist: 'Adrian Khalif',
    src: '/music/2001x.mp3',
  },
];


export default function MusicPlayer({
  onEnterPlayer,
}: {
  onEnterPlayer?: () => void;
}) {

  const sectionRef = useRef<HTMLElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const alreadyEnteredRef = useRef(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


  const currentSong = playlist[currentIndex];


  // =========================
  // DETECT MUSIC PLAYER SECTION
  // =========================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

 const observer = new IntersectionObserver(
  ([entry]) => {
    if (
      entry.isIntersecting &&
      !alreadyEnteredRef.current
    ) {
      alreadyEnteredRef.current = true;

      onEnterPlayer?.();
    }
  },
  {
    threshold: 0.05,
  }
);
    observer.observe(section);

    return () => observer.disconnect();

  }, [onEnterPlayer]);


  // =========================
  // LOAD SONG
  // =========================

useEffect(() => {
  const audio = audioRef.current;

  if (!audio) return;

  audio.pause();
  audio.load();

  setCurrentTime(0);
  setDuration(0);
}, [currentIndex]);


  // =========================
  // PLAY / PAUSE
  // =========================

  const togglePlay = async () => {

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


  // =========================
  // PREVIOUS
  // =========================

  const previousSong = () => {

    setCurrentIndex((prev) =>
      prev === 0
        ? playlist.length - 1
        : prev - 1
    );
  };


  // =========================
  // NEXT
  // =========================

  const nextSong = () => {

    setCurrentIndex((prev) =>
      prev === playlist.length - 1
        ? 0
        : prev + 1
    );
  };


  // =========================
  // SELECT SONG
  // =========================

  const selectSong = (index: number) => {

    setCurrentIndex(index);

    setIsPlaying(true);

    setTimeout(() => {

      audioRef.current
        ?.play()
        .catch(() => {});

    }, 100);
  };


  // =========================
  // PROGRESS
  // =========================

  const handleProgressChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const audio = audioRef.current;

    if (!audio) return;

    const newTime = Number(
      event.target.value
    );

    audio.currentTime = newTime;

    setCurrentTime(newTime);
  };


  // =========================
  // TIME FORMAT
  // =========================

  const formatTime = (
    seconds: number
  ) => {

    if (!Number.isFinite(seconds)) {
      return '0:00';
    }

    const minutes = Math.floor(
      seconds / 60
    );

    const secs = Math.floor(
      seconds % 60
    );

    return `${minutes}:${secs
      .toString()
      .padStart(2, '0')}`;
  };


  return (

    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#fff8ec] px-5 py-24 text-[#6f513d]"
    >

      {/* FLOWER */}

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
          y: [0, 14, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-[8%] top-[17%] text-3xl opacity-40"
      >
        🌷
      </motion.div>


      <div className="relative mx-auto max-w-xl">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >

          <p className="text-xs uppercase tracking-[0.35em] text-[#b09074]">
            Our Little Soundtrack
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Songs That Remind Me of You
          </h2>

          <p className="mx-auto mt-5 max-w-md leading-relaxed text-[#8c725e]">
            A few songs that somehow became part of our story.
          </p>

        </motion.div>


        {/* PLAYER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-12 rounded-[2rem] border border-[#e6d1bd] bg-white/60 p-7 backdrop-blur-sm"
        >


          {/* VINYL */}

          <motion.div
            animate={{
              rotate: isPlaying
                ? 360
                : 0,
            }}
            transition={{
              duration: 5,
              repeat: isPlaying
                ? Infinity
                : 0,
              ease: 'linear',
            }}
            className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-[#d9c0aa] bg-[#ead8c6]"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#bd8d6b]">

              <div className="h-5 w-5 rounded-full bg-[#fff8ec]" />

            </div>

          </motion.div>


          {/* SONG NAME */}

          <div className="mt-8 text-center">

            <h3 className="font-serif text-3xl">
              {currentSong.title}
            </h3>

            <p className="mt-2 text-sm text-[#a18670]">
              {currentSong.artist}
            </p>

          </div>


          {/* AUDIO */}

          <audio
            ref={audioRef}
            src={currentSong.src}

            onTimeUpdate={(event) =>
              setCurrentTime(
                event.currentTarget.currentTime
              )
            }

            onLoadedMetadata={(event) =>
              setDuration(
                event.currentTarget.duration
              )
            }

            onPlay={() =>
              setIsPlaying(true)
            }

            onPause={() =>
              setIsPlaying(false)
            }

            onEnded={nextSong}
          />


          {/* PROGRESS */}

          <div className="mt-8">

            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full accent-[#b78765]"
            />

            <div className="mt-2 flex justify-between text-xs text-[#a68a74]">

              <span>
                {formatTime(currentTime)}
              </span>

              <span>
                {formatTime(duration)}
              </span>

            </div>

          </div>


          {/* CONTROLS */}

          <div className="mt-8 flex items-center justify-center gap-7">

            <button
              type="button"
              onClick={previousSong}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e0cbb7] bg-white/70 text-xl transition hover:scale-105 active:scale-95"
            >
              ⏮
            </button>


            <button
              type="button"
              onClick={togglePlay}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#b78765] text-2xl text-white transition hover:scale-105 active:scale-95"
            >

              {isPlaying
                ? '⏸'
                : '▶'
              }

            </button>


            <button
              type="button"
              onClick={nextSong}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e0cbb7] bg-white/70 text-xl transition hover:scale-105 active:scale-95"
            >
              ⏭
            </button>

          </div>

        </motion.div>


        {/* PLAYLIST */}

        <div className="mt-6 space-y-3">

          {playlist.map(
            (song, index) => {

              const active =
                currentIndex === index;

              return (

                <motion.button
                  key={`${song.artist}-${song.title}`}
                  type="button"

                  onClick={() =>
                    selectSong(index)
                  }

                  whileHover={{
                    y: -2,
                  }}

                  whileTap={{
                    scale: 0.99,
                  }}

                  className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                    active
                      ? 'border-[#c49b7a] bg-[#f3e2d1]'
                      : 'border-[#ead8c6] bg-white/50'
                  }`}
                >

                  <span className="w-6 text-sm text-[#a0846c]">
                    {index + 1}
                  </span>


                  <div className="flex-1">

                    <p className="font-serif text-lg">
                      {song.title}
                    </p>

                    <p className="mt-1 text-xs text-[#9d826d]">
                      {song.artist}
                    </p>

                  </div>


                  <span className="text-xl">

                    {active && isPlaying
                      ? '🎶'
                      : '🎵'
                    }

                  </span>

                </motion.button>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}