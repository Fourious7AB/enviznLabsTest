"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import testimonials from "../data/testimonials";

export default function Testimonials() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

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

    window.addEventListener("resize", updateCardsPerView);

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
    <section className="relative py-24 overflow-hidden">
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

        <div className="mt-20">
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
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    relative
                    rounded-3xl
                    overflow-hidden
                    cursor-pointer

                    h-[380px]
                    md:h-[450px]
                    lg:h-[520px]
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

                  <div className="absolute inset-0 bg-black/20" />

                  {/* Play Button */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <div
                      className="
                        w-16
                        h-16
                        md:w-20
                        md:h-20
                        rounded-full
                        bg-white/25
                        backdrop-blur-md
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Play
                        size={26}
                        fill="white"
                      />
                    </div>
                  </div>

                  {/* Name */}

                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-semibold">
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