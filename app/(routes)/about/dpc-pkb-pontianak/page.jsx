"use client";

import BackButton from "@/components/elements/BackButton";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, scaleUp } from "@/utils/motionVariants";

const Page = () => {
  return (
    <motion.section
      className="max-w-4xl mx-auto space-y-12 px-4 md:px-0"
      initial="initial"
      animate="animate"
    >
      <BackButton />

      <motion.div className="space-y-6" {...fadeInUp(0.1)}>
        {/* Logo Image */}
        <motion.div className="flex justify-center" {...scaleUp(0.2)}>
          <Image
            src="/images/logo.jpg"
            width={200}
            height={200}
            alt="Logo PKB Kota Pontianak"
            className="shadow-md"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl font-extrabold text-primary my-6 text-center md:text-left"
          {...fadeInLeft(0.3)}
        >
          Tentang PKB Kota Pontianak
        </motion.h1>

        {/* Opening Narrative */}
        <motion.p className="text-lg text-gray-700 leading-relaxed text-justify" {...fadeInUp(0.4)}>
             Sebagai bagian dari kekuatan politik nasional, <strong>PKB Kota Pontianak</strong> hadir untuk menjadi
          penyalur aspirasi rakyat, terutama warga Nahdliyin dan kelompok akar rumput lainnya. Dengan struktur
          organisasi yang kuat dan berorientasi pada pelayanan masyarakat, PKB Pontianak terus menunjukkan eksistensinya
          sebagai partai yang solid, progresif, dan berintegritas.
        </motion.p>

        {/* Struktur Organisasi */}
        <motion.div {...fadeInUp(0.5)}>
          <h2 className="text-2xl font-semibold text-primary mt-8 border-b border-primary pb-2">
            Struktur Organisasi
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed text-justify">
            DPC PKB Kota Pontianak membawahi <strong>6 Dewan Pengurus Anak Cabang (DPAC)</strong> dan
            <strong> 29 Dewan Pengurus Ranting (DPRt)</strong>. Organisasi ini juga didukung oleh lima Badan Otonom
            yang memiliki peran aktif dalam kegiatan sosial, politik, dan keumatan:
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-justify">
            <li><strong>Garda Bangsa</strong></li>
            <li><strong>Perempuan Bangsa</strong></li>
            <li><strong>Gemasaba</strong></li>
            <li><strong>Gerbang Tani</strong></li>
            <li><strong>Panji Bangsa</strong></li>
          </ul>
        </motion.div>

        {/* Lembaga Strategis */}
        <motion.div {...fadeInUp(0.6)}>
          <h2 className="text-2xl font-semibold text-primary mt-8 border-b border-primary pb-2">
            Lembaga Strategis
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed text-justify">
            Untuk mendukung program dan strategi politik, DPC PKB membentuk:
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-justify">
            <li><strong>Lembaga Pemenangan Pemilu</strong> – menyusun strategi kampanye dan pemenangan</li>
            <li><strong>Lembaga Saksi Pemenangan</strong> – memastikan integritas dan pengawasan pemilu</li>
            <li><strong>Lembaga Kaderisasi</strong> – mencetak kader ideologis dan siap pakai di berbagai lini</li>
          </ul>
        </motion.div>

        {/* Info Kota */}
        <motion.div {...fadeInUp(0.7)}>
          <h2 className="text-2xl font-semibold text-primary mt-8 border-b border-primary pb-2">
            Konteks Kota Pontianak
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed text-justify">
              Pontianak dikenal sebagai <strong>"Kota Perdagangan dan Jasa"</strong> serta ibukota Provinsi Kalimantan Barat.
            Pada tahun 2024, kota ini memiliki <strong>DPT sebanyak 483.919 pemilih</strong> yang tersebar di
            <strong> 6 kecamatan dan 29 kelurahan</strong>, dibagi menjadi 5 Daerah Pemilihan (Dapil):
          </p>
          <ul className="mt-4 list-decimal pl-6 space-y-2 text-justify">
           <li><strong>Pontianak 1</strong> – Kecamatan Pontianak Kota</li>
            <li><strong>Pontianak 2</strong> – Kecamatan Pontianak Barat</li>
            <li><strong>Pontianak 3</strong> – Kecamatan Pontianak Utara</li>
            <li><strong>Pontianak 4</strong> – Kecamatan Pontianak Timur</li>
            <li><strong>Pontianak 5</strong> – Kecamatan Pontianak Selatan & Tenggara</li>
          </ul>
        </motion.div>

        {/* Hasil Pemilu Box */}
        <motion.div
          className="bg-green-50 border-l-4 border-primary p-6 mt-8 rounded-lg shadow-sm"
          {...scaleUp(0.8)}
        >
          <h3 className="text-xl font-semibold text-primary mb-2">Perjalanan Elektoral PKB</h3>
          <p className="text-gray-700 text-justify">PKB menunjukkan tren dukungan stabil:</p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li><strong>2014:</strong> 24.700 suara (11.13%)</li>
            <li><strong>2019:</strong> 26.952 suara (13%)</li>
            <li><strong>2024:</strong> 26.556 suara (14%) – <strong>4 kursi</strong></li>
          </ul>
          <p className="mt-4 text-gray-700 text-justify">
             Data ini menunjukkan tingkat loyalitas pemilih PKB yang tinggi di tengah gempuran tokoh dari partai lain.
          </p>
        </motion.div>

        {/* Closing Paragraph */}
        <motion.p className="text-lg text-gray-700 leading-relaxed text-justify mt-8" {...fadeInUp(0.9)}>
        PKB Kota Pontianak berkomitmen untuk terus menjadi pilar demokrasi dan perekat keberagaman,
          melalui kerja nyata dan program-program yang menyentuh langsung kebutuhan masyarakat.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Page;
