"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import GALLERY_ITEMS from "@/constants/gallery";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/motionVariants";

const GaleryHome = () => {
  const images = GALLERY_ITEMS.filter((item) => item.type === "image");

  return (
    <motion.section className="py-8 px-4 bg-gradient-to-b from-white to-primary/30" {...fadeInUp(0)}>
      <div className="flex w-full items-center md:justify-between md:flex-row flex-col gap-10">
        <div className="w-full md:w-[50%]">
          <motion.div className="mb-10 text-center" {...fadeInUp(0.1)}>
            <Link
              href="/gallery"
              className="text-2xl font-bold text-primary text-center"
            >
              E-Library
            </Link>
          </motion.div>

          <div className="gap-10 grid grid-cols-2 md:grid-cols-2 md:gap-6">
            {images.slice(0, 4).map((item, index) => (
              <motion.div
                key={index}
                className="relative w-full h-48 overflow-hidden hover:scale-110 rounded-lg"
                {...fadeInUp(0.1 * (index + 1))}
              >
                <Image
                  src={item.src}
                  alt={`Foto ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[50%]">
          <motion.h2 className="text-2xl font-bold text-primary mb-10 text-center" {...fadeInUp(0.2)}>
            Testimoni Dukungan
          </motion.h2>

          <div className="space-y-6">
            <motion.blockquote
              className="italic text-gray-700 max-w-2xl mx-auto text-center"
              {...fadeInUp(0.3)}
            >
              “PKB adalah harapan baru bagi rakyat kecil. Saya percaya
              kepemimpinan PKB akan membawa perubahan nyata.”
              <br />
              <span className="font-semibold text-primary">
                — Ahmad, Aktivis Laki-Laki
              </span>
            </motion.blockquote>

            <motion.blockquote
              className="italic text-gray-700 max-w-2xl mx-auto text-center"
              {...fadeInUp(0.4)}
            >
              “Saya bangga menjadi bagian dari PKB. Bersama kita bisa.”
              <br />
              <span className="font-semibold text-primary">
                — Siti, Aktivis Perempuan
              </span>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GaleryHome;
