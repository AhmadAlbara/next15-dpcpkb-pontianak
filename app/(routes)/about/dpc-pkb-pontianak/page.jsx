import BackButton from '@/components/elements/BackButton';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <section className="max-w-4xl mx-auto space-y-12 px-4 md:px-0">
      <BackButton />

      <div className="space-y-6">
        {/* Logo Image */}
        <div className="flex justify-center">
          <Image
            src="/images/logo.jpg"
            width={200}
            height={200}
            alt="Logo PKB Kota Pontianak"
          
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-primary my-6 text-center md:text-left">
          Tentang PKB Kota Pontianak
        </h1>

        {/* Introduction Paragraph */}
        <p className="mt-4 text-lg text-gray-700 leading-relaxed text-justify">
          Dewan Pengurus Cabang (DPC) Partai Kebangkitan Bangsa (PKB) Kota Pontianak memiliki struktur organisasi yang solid,
          dengan 6 Dewan Pengurus Anak Cabang (DPAC) dan 29 Dewan Pengurus Anak Ranting (DPRt). Selain itu, DPC PKB Pontianak juga
          memiliki empat Badan Otonom yang aktif berperan dalam berbagai kegiatan sosial, politik, dan kemasyarakatan. Badan Otonom
          ini terdiri dari:
        </p>

        {/* List of Badan Otonom */}
        <ul className="mt-4 list-disc pl-6 space-y-2 text-justify">
          <li><strong>Garda Bangsa</strong></li>
          <li><strong>Perempuan Bangsa</strong></li>
          <li><strong>Gemasaba</strong></li>
          <li><strong>Gerbang Tani</strong></li>
          <li><strong>Panji Bangsa</strong></li>
        </ul>

        {/* Strategic Institutions */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
          PKB Kota Pontianak juga membentuk beberapa lembaga strategis guna mendukung tugas-tugas kepartaian, antara lain:
        </p>

        <ul className="mt-4 list-disc pl-6 space-y-2 text-justify">
          <li><strong>Lembaga Pemenangan Pemilu</strong> - Lembaga yang bertanggung jawab dalam merencanakan dan melaksanakan strategi pemenangan dalam setiap pemilu.</li>
          <li><strong>Lembaga Saksi Pemenangan</strong> - Lembaga yang mengawasi dan memastikan pemilu berlangsung dengan transparan dan adil.</li>
          <li><strong>Lembaga Kaderisasi</strong> - Lembaga yang fokus pada pembinaan dan pengembangan kader partai untuk mencetak pemimpin-pemimpin masa depan.</li>
        </ul>

        {/* City Information */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
          Sebagai kota yang dikenal dengan slogan <strong>"Kota Perdagangan dan Jasa"</strong>, Pontianak merupakan ibukota Provinsi Kalimantan Barat
          yang memiliki DPT (Daftar Pemilih Tetap) sebanyak 483.919 orang pada tahun 2024. DPT ini tersebar di 6 Kecamatan dan 29 Kelurahan, yang terbagi
          menjadi 5 Daerah Pemilihan (Dapil) sebagai berikut:
        </p>

        {/* Dapil List */}
        <ul className="mt-4 list-decimal pl-6 space-y-2 text-justify">
          <li><strong>Pontianak 1</strong> (Kecamatan Pontianak Kota)</li>
          <li><strong>Pontianak 2</strong> (Kecamatan Pontianak Barat)</li>
          <li><strong>Pontianak 3</strong> (Kecamatan Pontianak Utara)</li>
          <li><strong>Pontianak 4</strong> (Kecamatan Pontianak Timur)</li>
          <li><strong>Pontianak 5</strong> (Kecamatan Pontianak Selatan dan Tenggara)</li>
        </ul>

        {/* Election Results */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
          Pada Pemilu tahun 2014, PKB meraih 24.700 suara atau sekitar 11.13%. Pada Pemilu 2019, PKB memperoleh 26.952 suara atau 13%. Sedangkan pada
          Pemilu 2024, PKB mendapatkan 26.556 suara atau 14%, dengan perolehan 4 kursi. Data ini menunjukkan bahwa dalam tiga kali pemilu, suara PKB di Kota
          Pontianak menunjukkan loyalitas pemilih yang stabil meskipun banyak tokoh dari partai lain yang berusaha mengalihkan pilihan pemilih PKB. Hal ini
          menggambarkan betapa solidnya para pemilih PKB yang memiliki tingkat loyalitas tinggi terhadap partai.
        </p>

        {/* Closing Paragraph */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
          PKB Kota Pontianak tidak hanya berperan dalam politik, tetapi juga terus mengedepankan keberagaman, kebersamaan, dan pengabdian untuk masyarakat
          melalui berbagai program dan kegiatan yang bermanfaat bagi seluruh lapisan masyarakat Kota Pontianak.
        </p>
      </div>
    </section>
  );
};

export default Page;
