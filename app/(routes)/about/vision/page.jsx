import BackButton from "@/components/elements/BackButton";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="max-w-4xl mx-auto space-y-12 px-4 md:px-0">
      <BackButton />

      {/* Visi dan Misi Section */}
      <div>
        {/* Logo Image */}
        <div className="flex justify-center">
          <Image
            src="/images/logo.jpg" 
            width={200}
            height={200}
            alt="Logo PKB Kota Pontianak"
          />
        </div>

        <h1 className="text-2xl font-bold text-primary my-6 text-center md:text-left">
          Visi dan Misi PKB
        </h1>

        {/* Visi */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-primary">Visi</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed text-justify">
            Mewujudkan masyarakat madani yang adil, makmur, sejahtera, dan
            beradab dalam kerangka Negara Kesatuan Republik Indonesia (NKRI),
            yang berdasarkan Pancasila dan UUD 1945 serta menjunjung tinggi
            nilai-nilai keislaman, kebangsaan, kemanusiaan, dan demokrasi.
          </p>
        </div>

        {/* Misi */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-primary">Misi</h2>
          <ul className="mt-4 list-decimal pl-6 text-lg text-gray-700 leading-relaxed space-y-2">
            <li>
              Menjaga keutuhan NKRI dan memperkuat nilai-nilai kebangsaan dalam
              bingkai Bhinneka Tunggal Ika.
            </li>
            <li>
              Mengembangkan nilai-nilai Islam yang moderat (wasathiyah),
              toleran, dan rahmatan lil 'alamin.
            </li>
            <li>
              Meningkatkan kesejahteraan rakyat, terutama kaum kecil, petani,
              nelayan, buruh, dan pelaku UMKM.
            </li>
            <li>
              Mendorong pemerintahan yang bersih dan berkeadilan, serta
              memperkuat demokrasi yang partisipatif dan beretika.
            </li>
            <li>
              Memperjuangkan pendidikan yang berkualitas dan terjangkau bagi
              seluruh rakyat Indonesia.
            </li>
            <li>
              Menegakkan keadilan sosial, perlindungan hak asasi manusia, serta
              kesetaraan gender.
            </li>
            <li>
              Membangun ekonomi nasional berbasis kerakyatan dan kemandirian.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Page;
