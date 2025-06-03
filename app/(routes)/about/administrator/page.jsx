"use client";

import React from "react";
import Image from "next/image";
import BackButton from "@/components/elements/BackButton";
import { PROFILE_ITEMS_PONTIANAK } from "@/constants/profile";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/motionVariants";

const ProfilePage = () => {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-4 md:px-0"
      initial="initial"
      animate="animate"
    >
      <BackButton />

      <motion.h1
        className="text-3xl font-extrabold text-primary my-6 text-center md:text-left"
        {...fadeInUp(0.1)}
      >
        Profil Kepengurusan DPC PKB Kota Pontianak
      </motion.h1>

      {PROFILE_ITEMS_PONTIANAK.map((profile, index) => (
        <motion.div key={index} className="mb-12" {...fadeInUp(index * 0.2 + 0.2)}>
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6 mb-4">
            {profile.image && (
              <div className="relative w-40 h-52 md:w-48 md:h-48 overflow-hidden mb-4 md:mb-0 flex-shrink-0 rounded-xl">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
            )}

            <div className="text-center md:text-left space-y-1">
              <h2 className="text-2xl font-bold text-primary">{profile.name}</h2>
              {profile.alias && (
                <p className="text-lg text-gray-600 italic">{profile.alias}</p>
              )}
              <p className="text-lg text-gray-700">{profile.position}</p>
            </div>
          </div>

          {/* Description */}
          {profile.description && (
            <p className="text-gray-800 mb-4 leading-relaxed text-justify text-lg">
              {profile.description}
            </p>
          )}

          {/* Experience */}
          {profile.workExperience?.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold text-primary mb-1 text-lg">Pengalaman Kerja:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {profile.workExperience.map((work, i) => (
                  <li key={i}>{work}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Career */}
          {profile.career?.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold text-primary mb-1 text-lg">Karir:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {profile.career.map((career, i) => (
                  <li key={i}>{career}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Achievements */}
          {profile.achievements?.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold text-primary mb-1 text-lg">Prestasi:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {profile.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Social Media */}
          {(profile.socialMedia?.facebook || profile.socialMedia?.instagram) && (
            <div className="flex gap-4 justify-center md:justify-start mt-4">
              {profile.socialMedia?.facebook && (
                <a
                  href={profile.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={30} />
                </a>
              )}
              {profile.socialMedia?.instagram && (
                <a
                  href={profile.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={30} />
                </a>
              )}
            </div>
          )}

          {/* Divider */}
          <hr className="mt-8 border-t border-gray-300" />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default ProfilePage;
