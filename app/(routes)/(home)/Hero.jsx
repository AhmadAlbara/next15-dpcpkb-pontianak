"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Hero = () => {
  return (
    <section className="relative h-96 md:h-[500px]">
      <Image
        src="/images/Hero1.jpeg"
        alt="Partai PKB"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        {/* Add motion.div here for animations */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
        >
          Bangkit Bersama PKB
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.2 }} 
        >
          Partai Kebangkitan Bangsa untuk Indonesia Maju
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
