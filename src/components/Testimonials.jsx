"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonials from "../data/testimonials";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

export default function Testimonials() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  // Play/Pause State
  const [playingId, setPlayingId] = useState(null);

  const togglePlay = (id) => {
    setPlayingId((prev) =>
      prev === id ? null : id
    );
  };

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();

    window.addEventListener(
      "resize",
      updateCardsPerView
    );

    return () =>
      window.removeEventListener(
        "resize",
        updateCardsPerView
      );
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) =>
      (prev + cardsPerView) % testimonials.length
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev - cardsPerView < 0
        ? Math.max(
            testimonials.length - cardsPerView,
            0
          )
        : prev - cardsPerView
    );
  };

  const visibleCards = [];

  for (let i = 0; i < cardsPerView; i++) {
    visibleCards.push(
      testimonials[
        (startIndex + i) % testimonials.length
      ]
    );
  }

  return (
    <section className="relative py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-orange-500">
              Success Stories
            </span>{" "}
            that
            <br />
            Speak Volumes
          </h2>

          <p className="text-white/70 mt-5 max-w-2xl mx-auto text-sm md:text-base">
            Hear from participants who transformed
            their sales careers with Sales Mastery.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 px-16 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
              "
            >
             {visibleCards.map((item) => (
  <motion.div
    key={item.id}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.25 }}
    className="
  relative
  rounded-3xl
  overflow-hidden
  cursor-pointer

  gap-6

  h-[320px]
  md:h-[320px]
  lg:h-[420px]
  md:w-[310px]
"
  >
    <img
      src={item.image}
      alt={item.name}
      className="
        w-full
        h-full
        object-cover
      "
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/30" />

    {/* Glass Play Button - Always Visible */}
    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        z-20
      "
    >
      <button
  onClick={() => togglePlay(item.id)}
  className="
    relative

    w-16
    h-16

    md:w-20
    md:h-20

    rounded-full

    bg-white/[0.04]
    backdrop-blur-3xl

    border
    border-white/15

    flex
    items-center
    justify-center

    transition-all
    duration-300

    hover:scale-110
    hover:bg-white/[0.08]

    shadow-[0_8px_30px_rgba(255,255,255,0.08)]
  "
>
  {/* Glass reflection */}
  <div
    className="
      absolute
      inset-x-2
      top-2
      h-[35%]

      rounded-full

      bg-gradient-to-b
      from-white/30
      via-white/10
      to-transparent
    "
  />

  {playingId === item.id ? (
    <Pause
      size={26}
      strokeWidth={2.5}
      className="relative z-10 text-white"
    />
  ) : (
    <Play
      size={26}
      strokeWidth={2.5}
      className="relative z-10 text-white ml-1"
      fill="white"
    />
  )}
</button>
    </div>

    {/* Name */}
    <div className="absolute bottom-4 left-4 z-20">
      <h3 className="text-white font-semibold text-lg">
        {item.name}
      </h3>
    </div>
  </motion.div>
))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="
                w-14
                h-14
                rounded-full
                bg-white/10
                hover:bg-orange-500
                transition-all
                duration-300
                flex
                items-center
                justify-center
              "
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              className="
                w-14
                h-14
                rounded-full
                bg-white/10
                hover:bg-orange-500
                transition-all
                duration-300
                flex
                items-center
                justify-center
              "
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}