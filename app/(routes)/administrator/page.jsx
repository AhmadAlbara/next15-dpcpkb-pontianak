"use client"
import React from "react";
import Image from "next/image";
import BackButton from "@/components/elements/BackButton";
import { PROFILE_ITEMS_PONTIANAK } from "@/constants/profile";
import { motion } from "framer-motion"; // Import motion

const ProfilePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-0">
      <BackButton />
      <h1 className="text-2xl font-bold text-primary my-6 text-center md:text-left">
        Profil Kepengurusan DPC PKB Pontianak
      </h1>

      {PROFILE_ITEMS_PONTIANAK.map((profile, index) => (
        <motion.div
          key={index}
          className="mb-10"
          initial={{ opacity: 0, y: 20 }} // Initial state: hidden and slightly below
          animate={{ opacity: 1, y: 0 }} // Final state: fully visible and at its original position
          transition={{ duration: 0.8, delay: index * 0.2 }} // Stagger animations with delay based on index
        >
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6 mb-4">
            {profile.image && (
              <div className="relative w-40 h-52 md:w-48 md:h-48 overflow-hidden mb-4 md:mb-0 flex-shrink-0">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-primary">
                {profile.name}
              </h2>
              {profile.alias && (
                <p className="text-lg text-gray-700 italic">{profile.alias}</p>
              )}
              <p className="text-base text-gray-600">{profile.position}</p>
            </div>
          </div>

          <motion.p
            className="text-gray-800 mb-4 leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {profile.description}
          </motion.p>

          {profile.workExperience && profile.workExperience.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.4 }}
            >
              <h3 className="font-semibold text-primary">Pengalaman Kerja:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {profile.workExperience.map((work, i) => (
                  <li key={i} className="text-gray-600">
                    {work}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {profile.career && profile.career.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              <h3 className="font-semibold text-primary">Karir:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {profile.career.map((career, i) => (
                  <li key={i} className="text-gray-600">
                    {career}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {profile.achievements && profile.achievements.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.6 }}
            >
              <h3 className="font-semibold text-primary">Prestasi:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {profile.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-600">
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          <hr className="mt-6 border-t border-gray-300" />
        </motion.div>
      ))}
    </div>
  );
};

export default ProfilePage;
