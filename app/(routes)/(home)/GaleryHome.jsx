import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import GALLERY_ITEMS from "@/constants/gallery"; // Import gallery items

const GaleryHome = () => {
  // Pisahkan foto dan video
  const images = GALLERY_ITEMS.filter((item) => item.type === "image");
  const videos = GALLERY_ITEMS.filter((item) => item.type === "video");

  return (
    <section className="py-8 px-4 bg-gradient-to-b from-white to-primary/30">
      <div className="flex w-full items-center md:justify-between md:flex-row flex-col gap-10">
        <div className=" w-full md:w-[50%]">
          <div className=" mb-10 text-center">
            <Link
              href="/gallery"
              className="text-2xl font-bold text-primary text-center"
            >
              E-Library
            </Link>
          </div>
          <div className="gap-10 grid grid-cols-2 md:grid-cols-2 md:gap-6">
            {images.slice(0, 4).map((item, index) => (
              <motion.div
                key={index}
                className="relative w-full h-48  overflow-hidden hover:scale-110 rounded-lg"
                initial={{ opacity: 0, y: 20 }} // Initial state: hidden and slightly below
                animate={{ opacity: 1, y: 0 }} // Fade in and slide to position
                transition={{ duration: 0.8, delay: index * 0.1 }} // Stagger animations
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

        <motion.div
          className="w-full md:w-[50%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-10 text-center">
            Testimoni Dukungan
          </h2>

          <div className="space-y-6">
            <motion.blockquote
              className="italic text-gray-700 max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              “PKB adalah harapan baru bagi rakyat kecil. Saya percaya
              kepemimpinan PKB akan membawa perubahan nyata.”
              <br />
              <span className="font-semibold text-primary">
                — Ahmad, Aktivis Laki-Laki
              </span>
            </motion.blockquote>

            {/* Animated blockquote for the second testimonial */}
            <motion.blockquote
              className="italic text-gray-700 max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }} // Start with hidden and slightly lower
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
              transition={{ duration: 0.8, delay: 0.2 }} // Stagger animation slightly
            >
              “Saya bangga menjadi bagian dari PKB. Bersama kita bisa.”
              <br />
              <span className="font-semibold text-primary">
                — Siti, Aktivis Perempuan
              </span>
            </motion.blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GaleryHome;
