"use client"

import BackButton from "@/components/elements/BackButton";
import GALLERY_ITEMS from "@/constants/gallery";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import motion for animations

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <BackButton />

      {/* Grid container with hover effect and animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden hover:scale-110"
            initial={{ opacity: 0, y: 20 }} // Initial state: hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Fade in and slide to position
            transition={{ duration: 0.8, delay: index * 0.1 }} // Stagger animations
           
          >
            <div className="relative w-full h-64">
              <Image
                src={item.src}
                alt={item.alt || "Gallery Image"}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default page;
