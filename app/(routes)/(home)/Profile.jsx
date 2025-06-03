import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeOpacity, fadeInUp, fadeInRight } from "@/utils/motionVariants";

const Profile = () => {
  return (
    <motion.section
      {...fadeOpacity(0.1)}
      className="bg-gray-50 px-4"
      // Control animation duration
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        <Image
          src={"/images/huddin-no-bg.png"}
          alt="Ketua PKB"
          width={200}
          height={200}
        />
        <div>
          <motion.h2
            {...fadeInRight(0)}
            className="text-3xl font-bold text-primary mb-2"
          >
            Ketua DPC PKB Pontianak
          </motion.h2>
          <motion.h3
            {...fadeInUp(0)}
            className="text-xl font-semibold text-gray-800"
          >
            Huddin, S.E
          </motion.h3>
          <motion.p
            {...fadeInUp(0)}
            className="text-gray-700 mt-2 text-justify"
          >
            Huddin, S.E, atau yang lebih dikenal dengan nama Bang Wawan, adalah
            politisi senior Pontianak yang saat ini menjabat sebagai Ketua DPC
            PKB Kota Pontianak serta Ketua Fraksi PKB DPRD Kota Pontianak.
            Sebelumnya, Bang Wawan juga pernah menjabat sebagai Ketua DPAC PKB
            Kecamatan Pontianak Tenggara selama ...
          </motion.p>
          <motion.p  {...fadeInUp(0)} >
            <Link
              href={"/administrator"}
              className="text-primary text-sm font-medium mt-auto inline-block pt-2"
            >
              Baca selengkapnya →
            </Link>
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
