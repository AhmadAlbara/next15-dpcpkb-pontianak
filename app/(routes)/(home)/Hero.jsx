"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-96 md:h-[500px]">
      <div className="relative h-full">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          layout="fill"
          objectFit="cover"
          className="brightness-[35%] "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {texts[currentIndex].title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {texts[currentIndex].subtitle}
          </motion.p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        <button
          className="text-white bg-black bg-opacity-50 p-2 rounded-full"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="text-white bg-black bg-opacity-50 p-2 rounded-full"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Hero;
