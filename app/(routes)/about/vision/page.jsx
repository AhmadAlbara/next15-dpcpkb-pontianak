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

      {/* Visi dan Misi Section */}
      <motion.div {...fadeInUp(0.1)}>
        {/* Logo Image */}
        <motion.div className="flex justify-center" {...fadeInZoom(0.2)}>
          <Image
            src="/images/logo.jpg"
            width={200}
            height={200}
            alt="Logo PKB Kota Pontianak"
            className="shadow-md"
          />
        </motion.div>

        <motion.h1
          className="text-3xl font-extrabold text-primary my-6 text-center md:text-left"
          {...fadeInUp(0.3)}
        >
          Visi & Misi Partai Kebangkitan Bangsa (PKB)
        </motion.h1>
      </motion.div>

      {/* Visi */}
      <motion.div {...fadeInUp(0.4)}>
        <h2 className="text-2xl font-semibold text-primary border-b border-primary pb-2">
          Visi
        </h2>
        <ul className="mt-4 list-disc pl-6 text-lg text-gray-700 leading-relaxed space-y-3">
          <motion.li {...fadeInUp(0.5)}>
            Mewujudkan cita-cita kemerdekaan Republik Indonesia sebagaimana dituangkan dalam
            Pembukaan Undang-Undang Dasar 1945;
          </motion.li>
          <motion.li {...fadeInUp(0.6)}>
            Mewujudkan masyarakat yang adil dan makmur secara lahir dan batin, material dan spiritual;
          </motion.li>
          <motion.li {...fadeInUp(0.7)}>
            Mewujudkan tatanan politik nasional yang demokratis, terbuka, bersih dan berakhlakul karimah.
          </motion.li>
        </ul>
      </motion.div>

      {/* Misi */}
      <motion.div {...fadeInUp(0.8)}>
        <h2 className="text-2xl font-semibold text-primary border-b border-primary pb-2">
          Misi
        </h2>
        <ul className="mt-4 list-disc pl-6 text-lg text-gray-700 leading-relaxed space-y-4">
          <motion.li {...fadeInUp(0.9)}>
            <strong>Bidang Ekonomi:</strong> menegakkan dan mengembangkan kehidupan ekonomi kerakyatan yang adil dan demokratis;
          </motion.li>
          <motion.li {...fadeInUp(1.0)}>
            <strong>Bidang Hukum:</strong> berusaha menegakkan dan mengembangkan negara hukum yang beradab, mampu mengayomi seluruh rakyat, menjunjung tinggi hak-hak asasi manusia, dan berkeadilan sosial;
          </motion.li>
          <motion.li {...fadeInUp(1.1)}>
            <strong>Bidang Sosial Budaya:</strong> berusaha membangun budaya yang maju dan modern dengan tetap memelihara jatidiri bangsa yang baik demi meningkatkan harkat dan martabat bangsa;
          </motion.li>
          <motion.li {...fadeInUp(1.2)}>
            <strong>Bidang Pendidikan:</strong> berusaha meningkatkan kualitas sumber daya manusia yang berakhlak mulia, mandiri, terampil, profesional dan kritis terhadap lingkungan sosial di sekitarnya, mengusahakan terwujudnya sistem pendidikan nasional yang berorientasi kerakyatan, murah dan berkesinambungan;
          </motion.li>
          <motion.li {...fadeInUp(1.3)}>
            <strong>Bidang Pertahanan:</strong> membangun kesadaran setiap warga negara terhadap kewajiban untuk turut serta dalam usaha pertahanan negara; mendorong terwujudnya swabela masyarakat terhadap perlakuan-perlakuan yang menimbulkan rasa tidak aman, baik yang datang dari pribadi-pribadi maupun institusi tertentu dalam masyarakat.
          </motion.li>
        </ul>

          <p className="text-sm mt-4 text-center">
          Sumber:{" "}
          <a
            href="https://pkb.id/page/visi-misi/"
            className="underline "
            target="_blank"
            rel="noopener noreferrer"
          >
            DPP PKB
          </a>
        </p>
      </motion.div>

      {/* Highlight Box */}
      <motion.div
        className="bg-primary text-white p-6 rounded-xl shadow-lg mt-12"
        {...fadeInZoom(1.5)}
      >
        <p className="text-lg text-center font-medium">
          PKB bukan sekadar partai politik — ia adalah gerakan moral dan sosial yang menjembatani
          nilai keislaman, kebangsaan, dan kemanusiaan demi kemajuan Indonesia.
        </p>
      
      </motion.div>
    </motion.section>
  );
};

export default Page;
