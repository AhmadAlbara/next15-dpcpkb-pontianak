import { PROFILE_ITEMS_PONTIANAK } from "@/constants/profile";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Import motion

const Profile = () => {
  return (
    <>
      {PROFILE_ITEMS_PONTIANAK.slice(0, 1).map((item, i) => (
        // Wrap the entire section with motion.section for animation
        <motion.section
          className="bg-gray-50 py-12 px-4"
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }} // Control animation duration
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-full h-[300px] md:h-60 ">
              <Image
                src={item.image}
                alt="Ketua PKB"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                className="rounded-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">
                Ketua DPC PKB Pontianak
              </h2>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
              <Link
                href={"/administrator"}
                className="text-primary text-sm font-medium mt-auto inline-block pt-2"
              >
                Baca selengkapnya →
              </Link>
            </div>
          </div>
        </motion.section>
      ))}
    </>
  );
};

export default Profile;
