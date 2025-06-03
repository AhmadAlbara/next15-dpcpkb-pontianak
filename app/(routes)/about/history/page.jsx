import BackButton from "@/components/elements/BackButton";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="max-w-4xl mx-auto space-y-12 px-4 md:px-0">
      <BackButton />
      <div className="space-y-6">
        {/* Logo Image */}
        <div className="flex justify-center">
          <Image
            src="/images/pendiripartai.jpeg"
            width={800}
            height={800}
            alt="Logo PKB Kota Pontianak"
          />
        </div>

        <h1 className="text-2xl font-bold text-primary my-6 text-center md:text-left">
          Sejarah PKB
        </h1>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
          Pada tanggal 21 Mei 1998, Presiden Soeharto mengundurkan diri akibat
          desakan arus reformasi yang kuat, yang mengarah pada lahirnya Era
          Reformasi. Sehari setelahnya, Pengurus Besar Nahdlatul Ulama (PBNU)
          menerima banyak usulan dari warga NU, sebagian besar terkait dengan
          pembentukan partai politik (parpol) untuk mewadahi aspirasi politik
          mereka. PBNU awalnya berhati-hati dan merespon secara tidak langsung,
          mengingat keputusan Muktamar NU ke-27 yang tidak mengizinkan NU
          terlibat dalam politik praktis.
          <br />
          Namun, banyak warga NU yang tidak sabar dan mendeklarasikan
          pembentukan parpol sendiri, seperti Partai Bintang Sembilan di
          Purwokerto dan Partai Kebangkitan Umat (Perkanu) di Cirebon. PBNU
          kemudian membentuk Tim Lima pada tanggal 3 Juni 1998 untuk menanggapi
          usulan tersebut. Tim Lima diketuai oleh KH Ma'ruf Amin dan diberikan
          tugas untuk memenuhi aspirasi politik warga NU.
          <br />
          Pada 20 Juni 1998, PBNU memberi surat tugas kepada Tim Lima untuk
          memperkuat posisi dan kerja mereka. Tim Asistensi dibentuk untuk
          membantu menginventarisasi usulan dan merancang pembentukan parpol
          baru. Pada 26-28 Juni 1998, konsinyering diadakan di Cipanas, yang
          menghasilkan lima rancangan terkait pembentukan parpol.
          <br />
          Gus Dur, sebagai inisiator pembentukan parpol berbasis ahlussunah wal
          jamaah, awalnya ragu, namun akhirnya mendukung pembentukan partai
          tersebut. Deklarasi Partai Kebangkitan Bangsa (PKB) dilakukan pada 23
          Juli 1998 di Jakarta, dengan tujuan untuk menciptakan bangsa yang
          merdeka, bersatu, adil, makmur, dan demokratis, serta melaksanakan
          cita-cita proklamasi kemerdekaan Indonesia. PKB didirikan sebagai
          partai yang bersifat kejuangan, kebangsaan, terbuka, dan demokratis.
        </p>
      </div>
    </section>
  );
};

export default page;
