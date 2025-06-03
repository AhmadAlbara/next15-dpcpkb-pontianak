"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeOpacity } from "@/utils/motionVariants";

const JoinWithUs = () => {
  return (
    <motion.section className="px-4 text-center" {...fadeOpacity(0)}>
      <motion.h2 className="text-3xl font-bold text-primary mb-4" {...fadeInUp(0.2)}>
        Bergabung Bersama PKB
      </motion.h2>
      <motion.p className="text-lg text-gray-700 mb-6" {...fadeInUp(0.4)}>
        Bersama kita wujudkan Indonesia yang lebih adil, makmur, dan
        bermartabat.
      </motion.p>
      <motion.div {...fadeInUp(0.6)}>
        <Link
          href="https://pkb.id/"
          target="_blank"
          className="bg-primary text-white py-3 px-6 rounded-lg shadow hover:bg-green-700 transition"
        >
          Daftar Sekarang
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default JoinWithUs;
