"use client"
import { use } from "react";
import BackButton from "@/components/elements/BackButton";
import NEWS_ITEMS from "@/constants/activity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion for animations

export default function ActivityDetail({ params }) {
  const { slug } = use(params);

  const newsItem = NEWS_ITEMS.find((item) => item.slug === slug);

  if (!newsItem) {
    return (
      <p className="p-4 text-center text-lg font-semibold">
        Kegiatan tidak ditemukan.
      </p>
    );
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 md:px-0"
      initial={{ opacity: 0 }} // Initially hidden
      animate={{ opacity: 1 }} // Fade in on load
      transition={{ duration: 0.8 }} // Animation duration
    >
      <BackButton />

      {/* Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-primary my-6"
        initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and slide to position
        transition={{ duration: 0.8 }}
      >
        {newsItem.title}
      </motion.h1>

      {/* Author Info */}
      <motion.div
        className="flex items-center space-x-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-12 h-12 rounded-full bg-gray-300">
          <img src="/images/logo.jpg" alt="Sahabat PKB" />
        </div>
        <div>
          <p className="font-semibold">Sahabat PKB</p>
          <p className="text-sm text-gray-600">Penulis | DPC PKB Pontianak</p>
          <p className="text-sm text-gray-500">
            {new Date(newsItem.date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </motion.div>

      {/* Featured Image */}
      <motion.div
        className="relative w-full h-80 mb-8 rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image
          src={newsItem.src}
          alt={newsItem.alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="text-lg text-gray-700 space-y-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {newsItem.description}
      </motion.div>

      {/* Related News */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
          Kegiatan Terkait
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {NEWS_ITEMS.slice(1, 4).map((relatedNews, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            >
              <div className="relative w-full h-48">
                <Image
                  src={relatedNews.src}
                  alt={relatedNews.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg text-primary">
                  {relatedNews.title}
                </h3>
                <Link
                  href={`/activity/${relatedNews.slug}`}
                  className="text-primary text-sm font-medium mt-4 inline-block"
                >
                  Baca selengkapnya →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Back to News List */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Link href="/activity" className="text-primary text-lg font-semibold">
          Kembali ke Kegiatan Lainnya →
        </Link>
      </motion.div>
    </motion.div>
  );
}
