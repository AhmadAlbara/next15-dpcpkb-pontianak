"use client"
import React from "react";
import { VISI_ITEMS, MISI_ITEMS, STORY_ITEMS } from "@/constants/about";
import BackButton from "@/components/elements/BackButton";
import Image from "next/image";
import { PROFILE_ITEMS_PUSAT } from "@/constants/profile";
import { motion } from "framer-motion"; // Import motion for animations

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 px-4 md:px-0">
      <BackButton />

      {/* KETUA UMUM */}
      {PROFILE_ITEMS_PUSAT.slice(0, 1).map((item, index) => (
        <motion.section
          key={`ketua-${index}`}
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="relative w-full h-48 rounded-lg overflow-hidden">
            <Image
              src={item.image ?? "/images/placeholder.png"}
              alt={`Foto ${item.name}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-primary mb-2">KETUA DPP PKB</h2>
            <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-700 mt-4 leading-relaxed whitespace-pre-line">
              {item.description}
            </p>
          </div>
        </motion.section>
      ))}

      {/* VISI */}
      {VISI_ITEMS.map((item, index) => (
        <motion.section
          key={`visi-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4">{item.title}</h2>
          <p className="text-gray-700 leading-relaxed">{item.text}</p>
        </motion.section>
      ))}

      {/* MISI */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary mb-4">Misi</h2>
        <ul className="list-decimal list-inside space-y-2 text-gray-700">
          {MISI_ITEMS.map((item, index) => (
            <li key={`misi-${index}`} className="text-lg">
              {item.text.replace(/^\d+\.\s/, "")}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* SEJARAH */}
      {STORY_ITEMS.map((item, index) => (
        <motion.section
          key={`story-${index}`}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.4 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4">{item.title}</h2>
          <div className="relative w-full h-48">
            <Image
              src="/images/pendiripartai.jpeg"
              alt="Pendiri Partai"
              layout="fill"
              objectFit="cover"
              className="rounded-lg mb-4"
            />
          </div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {item.text}
          </p>
        </motion.section>
      ))}
    </div>
  );
};

export default AboutPage;
