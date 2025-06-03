import React from "react";
import AppLogo from "../elements/AppLogo";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full relative bg-primary-dark hidden md:block">
      {/* Overlay gelap untuk latar belakang */}
      <div
        className="absolute inset-0 bg-black opacity-[5%]" // Memberikan overlay gelap
        style={{
          backgroundImage: "url('/images/batik.jpg')", // Ganti dengan path gambar batik
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Konten Header */}
      <div className="md:max-w-6xl md:mx-auto flex justify-between items-center relative z-10">
        <AppLogo />

        <div className="flex items-center gap-4">
          <div className="text-white">
            <h2 className="font-bold text-xl">
              Dr (HC). Drs. A. Muhaimin Iskandar, M.Si
            </h2>
            <p>Ketua Umum Partai Kebangkitan Bangsa (PKB)</p>
          </div>
          <Image
            src={"/images/muhaimin-no-bg.png"}
            width={150}
            height={200}
            alt="muhaimin-picture"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
