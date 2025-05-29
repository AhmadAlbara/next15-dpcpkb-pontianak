"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NEWS_ITEMS from "@/constants/activity";
import BackButton from "@/components/elements/BackButton";
import { motion } from "framer-motion";

const ActivityPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-0">
      <BackButton />
      <h1 className="text-2xl font-bold text-primary my-6 text-center md:text-left">
        Kegiatan DPC PKB Pontianak
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {NEWS_ITEMS.map((news, index) => (
          <Link
            key={index}
            href={`/activity/${news.slug}`}
            className="group relative block rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden w-full"
          >
            <motion.div
              className="relative w-full h-64"
              initial={{ opacity: 0, y: 20 }} // Initial state: hidden and slightly below
              animate={{ opacity: 1, y: 0 }} // Fade in and move to the original position
              transition={{
                duration: 0.8,
                delay: index * 0.1, // Stagger animation for each item
              }}
            >
              <Image
                src={news.src}
                alt={news.alt}
                layout="fill"
                objectFit="cover"
              />
              <div>{news.description}</div>
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-80 flex items-center justify-center transition">
                <h2 className="text-lg font-semibold text-white text-center px-2">
                  {news.title}
                </h2>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ActivityPage;
