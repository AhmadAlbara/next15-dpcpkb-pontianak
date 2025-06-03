"use client";

import BackButton from "@/components/elements/BackButton";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInZoom } from "@/utils/motionVariants";

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
        <motion.div className="flex justify-center" {...fadeInZoom(0.2)}>
          <Image
            src="/images/pendiripartai.jpeg"
            width={800}
            height={800}
            alt="Logo PKB Kota Pontianak"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.h1
          className="text-3xl font-extrabold text-primary my-6 text-center md:text-left"
          {...fadeInUp(0.3)}
        >
          Sejarah Berdirinya Partai Kebangkitan Bangsa (PKB)
        </motion.h1>

        {/* Quote */}
        <motion.blockquote
          className="border-l-4 border-primary pl-4 italic text-gray-600 text-lg"
          {...fadeInUp(0.4)}
        >
          “Politik adalah jalan pengabdian untuk kemaslahatan umat.” — KH. Abdurrahman Wahid (Gus Dur)
        </motion.blockquote>

    
     
          <motion.p
  
            className="text-lg text-gray-700 leading-relaxed text-justify"
            {...fadeInUp(0.5 )}
          >
           Pada tanggal <strong>21 Mei 1998</strong>, Presiden Soeharto resmi mengundurkan diri
          setelah 32 tahun berkuasa. Momen bersejarah ini menjadi titik awal dari Era Reformasi
          yang membuka kran demokrasi dan kebebasan politik di Indonesia.
          </motion.p>
          <motion.p
  
            className="text-lg text-gray-700 leading-relaxed text-justify"
            {...fadeInUp(0.6)}
          >
                  Hanya sehari setelahnya, <strong>Pengurus Besar Nahdlatul Ulama (PBNU)</strong> menerima
          berbagai usulan dari kalangan Nahdliyin yang menginginkan adanya wadah politik yang dapat
          mewakili aspirasi mereka secara langsung. Meski awalnya berhati-hati karena Muktamar NU
          sebelumnya melarang keterlibatan dalam politik praktis, desakan dari bawah semakin kuat.
          </motion.p>
  

        {/* Highlight Box */}
        <motion.div
          className="bg-gray-100 p-4 rounded-lg shadow-inner my-4"
          {...fadeInZoom(0.7)}
        >
          <p className="text-md text-gray-800 leading-relaxed">
            Beberapa kelompok NU bahkan secara independen mendeklarasikan partai baru seperti
            <strong> Partai Bintang Sembilan</strong> di Purwokerto dan
            <strong> Partai Kebangkitan Umat (Perkanu)</strong> di Cirebon, sebagai bentuk
            kegelisahan akan representasi politik.
          </p>
        </motion.div>

    
          <motion.p
         
            className="text-lg text-gray-700 leading-relaxed text-justify"
            {...fadeInUp(0.8 )}
          >
             Untuk merespon dinamika tersebut, PBNU membentuk <strong>Tim Lima</strong> pada 3 Juni
          1998, yang diketuai oleh <strong>KH. Ma’ruf Amin</strong>. Tim ini bertugas merumuskan
          pembentukan partai baru yang mampu menyalurkan aspirasi politik warga NU dengan cara yang
          sesuai dengan nilai-nilai Islam Ahlussunnah wal Jamaah.
          </motion.p>
   
          <motion.p
         
            className="text-lg text-gray-700 leading-relaxed text-justify"
            {...fadeInUp(0.8 )}
          >
               Puncaknya adalah pada <strong>23 Juli 1998</strong>, saat <strong>Partai Kebangkitan Bangsa (PKB) </strong>
          secara resmi dideklarasikan di Jakarta. Partai ini lahir sebagai wujud perlawanan terhadap
          kekuasaan yang otoriter dan sebagai harapan baru untuk membangun bangsa yang lebih adil,
          makmur, dan demokratis.
          </motion.p>
   

        {/* Core Values */}
        <motion.div
          className="bg-primary text-white p-6 rounded-lg space-y-3 mt-6"
          {...fadeInZoom(1)}
        >
          <h2 className="text-xl font-semibold">Nilai-Nilai Dasar PKB:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Kejuangan</li>
            <li>Kebangsaan</li>
            <li>Keterbukaan</li>
            <li>Demokrasi</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Page;
