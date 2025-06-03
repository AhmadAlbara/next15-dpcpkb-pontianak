"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import plugin datalabels

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ElectionsResults = () => {
  // Data perolehan suara dan persentase
  const results = [
    { year: 2014, totalVotes: 24700, percentage: 11.13 },
    { year: 2019, totalVotes: 26952, percentage: 13 },
    { year: 2024, totalVotes: 26556, percentage: 14 },
  ];

  // Data untuk grafik
  const chartData = {
    labels: results.map((result) => `Pemilu ${result.year}`),
    datasets: [
      {
        label: "Perolehan Suara (%)",
        data: results.map((result) => result.percentage),
        backgroundColor: "#16ad5f", // Warna hijau PKB
        borderColor: "#004d26", // Warna hijau lebih gelap untuk border
        borderWidth: 1,
        barThickness: 100, // Ukuran batang grafik lebih besar agar lebih menonjol
        datalabels: {
          align: "center", // Posisi label di tengah batang
          anchor: "center", // Posisi label di atas batang
          color: "#ffffff", // Warna teks label
          font: {
            weight: "bold", // Tebal font
            size: 12, // Ukuran font label
          },
          formatter: (value, context) => {
            const totalVotes = results[context.dataIndex].totalVotes;
            return `${totalVotes.toLocaleString()}`;
          },
        },
      },
    ],
  };

  // Opsi untuk grafik
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Menjaga agar grafik menyesuaikan ukuran layar
    plugins: {
   
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`,
        },
      },
    },
    scales: {
      x: {
        display: true, // Menghapus sumbu X
        grid: {
          display: false, // Menyembunyikan grid untuk sumbu X
        },
      },
      y: {
        display: false, // Menghapus sumbu Y
        grid: {
          display: false, // Menyembunyikan grid untuk sumbu Y
        },
        ticks: {
          beginAtZero: false,
        },
      },
    },
  };

  return (
    <section className="py-12 ">
      <h2 className="text-3xl font-bold text-center text-primary">
        Perolehan Suara PKB 
      </h2>
      <p className="text-center  text-lg  mb-8">Dalam Pemilihan Anggota Dewan Perwakilan Rakyat Daerah Kota Pontianak</p>
      <div className="max-w-4xl mx-auto">
        <Bar data={chartData} options={options} height={400} />
      </div>

      <div className="text-center mt-8">
        <p className="text-lg ">
          PKB telah menunjukkan peningkatan yang signifikan di setiap pemilu,{" "}
          <br />
          dengan pencapaian tertinggi di Pemilu 2024 dengan perolehan kursi
          sebanyak 4.
        </p>
      </div>
    </section>
  );
};

export default ElectionsResults;
