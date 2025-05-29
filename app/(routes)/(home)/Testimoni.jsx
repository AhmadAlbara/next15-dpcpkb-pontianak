import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations

const Testimoni = () => {
  return (
    // Wrap the section with motion.section for background animation
    <motion.section
      className="py-12 px-4 text-center bg-gradient-to-b from-gray-50 to-primary/30"
      initial={{ opacity: 0, y: 20 }} // Initial opacity and position
      animate={{ opacity: 1, y: 0 }} // Final state when in view
      transition={{ duration: 1 }} // Duration of animation
    >
      <h2 className="text-2xl font-bold text-primary mb-4">
        Testimoni Dukungan
      </h2>

      <div className="space-y-6">
        {/* Animated blockquote for the first testimonial */}
        <motion.blockquote
          className="italic text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }} // Start with hidden and slightly lower
          whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
          transition={{ duration: 0.8 }}
        >
          “PKB adalah harapan baru bagi rakyat kecil. Saya percaya
          kepemimpinan PKB akan membawa perubahan nyata.”
          <br />
          <span className="font-semibold text-primary">— Ahmad, Aktivis Laki-Laki</span>
        </motion.blockquote>

        {/* Animated blockquote for the second testimonial */}
        <motion.blockquote
          className="italic text-gray-700 max-w-2xl mx-auto"
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
    </motion.section>
  );
};

export default Testimoni;
