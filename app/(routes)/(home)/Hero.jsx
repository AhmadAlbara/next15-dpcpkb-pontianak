"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, fadeOpacity } from "@/utils/motionVariants";

const Hero = () => {
  const images = [
    "/images/Hero1.jpeg",
    "/images/Hero2.jpeg",
    "/images/Hero3.jpg",
  ];

  const texts = [
    { title: "Bangkit Bersama PKB", subtitle: "Partai Kebangkitan Bangsa untuk Indonesia Maju" },
    { title: "Maju Bersama PKB", subtitle: "Bersama PKB Menuju Indonesia Sejahtera" },
    { title: "Solidaritas PKB", subtitle: "Kita Bersatu untuk Keadilan Sosial" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Background image with motion */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          {...fadeOpacity()}
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            layout="fill"
            objectFit="cover"
            className="brightness-[35%]"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
        <motion.h1
          key={`title-${currentIndex}`}
          className="text-3xl md:text-6xl font-bold mb-3"
          {...fadeInUp(0)}
        >
          {texts[currentIndex].title}
        </motion.h1>
        <motion.p
          key={`subtitle-${currentIndex}`}
          className="text-md md:text-xl max-w-2xl"
          {...fadeInUp(0.2)}
        >
          {texts[currentIndex].subtitle}
        </motion.p>
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 hover:bg-opacity-70 transition p-3 rounded-full text-white"
        onClick={prevSlide}
        aria-label="Sebelumnya"
      >
        &larr;
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 hover:bg-opacity-70 transition p-3 rounded-full text-white"
        onClick={nextSlide}
        aria-label="Berikutnya"
      >
        &rarr;
      </button>
    </section>
  );
};

export default Hero;
