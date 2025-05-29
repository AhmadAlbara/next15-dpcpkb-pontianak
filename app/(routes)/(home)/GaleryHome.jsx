import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import GALLERY_ITEMS from '@/constants/gallery'; // Import gallery items

const GaleryHome = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      {/* Header section with link to full gallery */}
      <div className="mb-4 flex items-center justify-center gap-10">
        <Link href="/gallery" className="text-2xl font-bold text-primary text-center">
          Galeri Foto
        </Link>
      </div>

      {/* Gallery grid displaying the first three items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {GALLERY_ITEMS.slice(0, 4).map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full h-48 rounded-lg overflow-hidden"
            initial={{ opacity: 0 }} // Start with hidden opacity
            whileInView={{ opacity: 1 }} // Fade in to full opacity when in view
            transition={{ duration: 1 }} // Duration of the fade-in animation
          >
            {/* Image for each gallery item */}
            <Image
              src={item.src}
              alt={`foto`} // Improved alt text with index
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GaleryHome;
