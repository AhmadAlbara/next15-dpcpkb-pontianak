"use client";

import React from "react";
import Image from "next/image";
import BackButton from "@/components/elements/BackButton";
import { PROFILE_ITEMS_PONTIANAK } from "@/constants/profile";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons

const ProfilePage = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-0">
      <BackButton />
      <h1 className="text-2xl font-bold text-primary my-6 text-center md:text-left">
        Profil Kepengurusan DPC PKB Pontianak
      </h1>

      {PROFILE_ITEMS_PONTIANAK.map((profile, index) => (
        <div key={index} className="mb-10">
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

          <p className="text-gray-800 mb-4 leading-relaxed text-justify">
            {profile.description}
          </p>

          {/* Display Work Experience */}
          {profile.workExperience && profile.workExperience.length > 0 && (
            <div>
              <h3 className="font-semibold text-primary">Pengalaman Kerja:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {profile.workExperience.map((work, i) => (
                  <li key={i} className="text-gray-600">
                    {work}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Display Career */}
          {profile.career && profile.career.length > 0 && (
            <div>
              <h3 className="font-semibold text-primary">Karir:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {profile.career.map((career, i) => (
                  <li key={i} className="text-gray-600">
                    {career}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Display Achievements */}
          {profile.achievements && profile.achievements.length > 0 && (
            <div>
              <h3 className="font-semibold text-primary">Prestasi:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {profile.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-600">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Display Social Media Links */}
          <div className="flex gap-4 justify-center md:justify-start my-4">
            {profile.socialMedia?.facebook && (
              <a
                href={profile.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
                aria-label="Go To Facebook"
              >
                <FaFacebook size={24} />
              </a>
            )}
            {profile.socialMedia?.instagram && (
              <a
                href={profile.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
                aria-label="Go To Instagram"
              >
                <FaInstagram size={24} />
              </a>
            )}
          </div>

          <hr className="mt-6 border-t border-gray-300" />
        </div>
      ))}
    </section>
  );
};

export default ProfilePage;
