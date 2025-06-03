
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Import motion

const Profile = () => {
  return (
    <motion.section
      className="bg-gray-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Control animation duration
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
         <Image
            src={"/images/huddin-no-bg.png"}
            alt="Ketua PKB"
       
            width={200}
              height={200}
          
          />
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">
            Ketua DPC PKB Pontianak
          </h2>
          <h3 className="text-xl font-semibold text-gray-800">Huddin, S.E</h3>
          <p className="text-gray-700 mt-2 text-justify">
            Huddin, S.E, atau yang lebih dikenal dengan nama Bang Wawan, adalah
            politisi senior Pontianak yang saat ini menjabat sebagai Ketua DPC
            PKB Kota Pontianak serta Ketua Fraksi PKB DPRD Kota Pontianak.
            Sebelumnya, Bang Wawan juga pernah menjabat sebagai Ketua DPAC PKB
            Kecamatan Pontianak Tenggara selama ...
          </p>
          <Link
            href={"/administrator"}
            className="text-primary text-sm font-medium mt-auto inline-block pt-2"
          >
            Baca selengkapnya →
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
