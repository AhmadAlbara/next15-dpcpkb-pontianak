"use client";

import ACTIVITY_ITEMS from '@/constants/activity';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeOpacity } from '@/utils/motionVariants';

const ActivityHome = () => {
  const sortedActivityItems = useMemo(() => {
    return ACTIVITY_ITEMS.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  return (
    <motion.section className="py-12 px-4" {...fadeOpacity(0)}>
      <motion.div className="flex items-center justify-between mb-6" {...fadeInUp(0.1)}>
        <h2 className="text-base md:text-2xl font-bold text-primary">
          Kegiatan DPC PKB Pontianak
        </h2>
        <Link href={`/activity`} className="text-primary text-xs md:text-sm font-medium">
          Lihat semua →
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {sortedActivityItems.slice(0, 3).map((news, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            {...fadeInUp(index * 0.2)}
          >
            <div className="h-64 relative">
              <Image
                src={news.src}
                alt={news.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg text-primary">
                {news.title}
              </h3>
              <div className="text-gray-600 text-sm mt-2 line-clamp-3">
                {news.description}
              </div>
              <p className="text-xs text-gray-400 mt-1">{news.date}</p>
              <Link
                href={`/activity/${news.slug}`}
                className="text-primary text-sm font-medium mt-auto inline-block pt-2"
              >
                Baca selengkapnya →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ActivityHome;
