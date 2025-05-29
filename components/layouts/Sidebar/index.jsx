"use client";

import NEWS_ITEMS from "@/constants/activity";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import GALLERY_ITEMS from "@/constants/gallery";
import { usePathname } from "next/navigation"; // Import usePathname hook

const Sidebar = () => {
  const pathname = usePathname(); // Get the current path

  // Check if the user is on the homepage
  if (pathname === "/" || pathname ==="/gallery") {
    return null; // Return null to hide the sidebar on the homepage
  }

  return (
    <aside className="w-full md:w-80 h-fit px-4 py-4 md:px-0 md:py-0">
      <div className="mb-10">
        <h2 className="text-lg uppercase tracking-wide text-primary mb-4">
          Kegiatan Terbaru
        </h2>
        <ul className="space-y-4">
          {NEWS_ITEMS.slice(0, 2).map((item, index) => (
            <li key={index} className="border-b pb-3 last:border-none">
              <div className="w-full h-40 overflow-hidden rounded-md">
                <Image
                  src={item.src || "/placeholder.jpg"}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <Link
                  href={`/activity/${item.slug}`}
                  className="block font-medium text-gray-800 hover:text-primary hover:underline transition-colors"
                >
                  {item.title}
                </Link>
                <p className="text-xs text-gray-500">
                  {new Date(item.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Foto Galeri */}
      <div>
        <h2 className="text-lg uppercase tracking-wide text-primary mb-4">
          Foto
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {GALLERY_ITEMS.slice(0, 2).map((item, i) => (
            <div
              key={i}
              className="relative w-full h-24 rounded-md overflow-hidden"
            >
              <Image
                src={item.src}
                alt={`foto`}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
