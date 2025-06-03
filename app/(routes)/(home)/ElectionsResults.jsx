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
import ChartDataLabels from "chartjs-plugin-datalabels";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/motionVariants";

// Register components and plugins
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
  const results = [
    { year: 2014, totalVotes: 24700, percentage: 11.13 },
    { year: 2019, totalVotes: 26952, percentage: 13 },
    { year: 2024, totalVotes: 26556, percentage: 14 },
  ];

  const chartData = {
    labels: results.map((result) => `Pemilu ${result.year}`),
    datasets: [
      {
        label: "Perolehan Suara (%)",
        data: results.map((result) => result.percentage),
        backgroundColor: "#16ad5f",
        borderColor: "#004d26",
        borderWidth: 1,
        barThickness: 100,
        datalabels: {
          align: "center",
          anchor: "center",
          color: "#ffffff",
          font: {
            weight: "bold",
            size: 12,
          },
          formatter: (value, context) => {
            const totalVotes = results[context.dataIndex].totalVotes;
            return `${totalVotes.toLocaleString()}`;
          },
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`,
        },
      },
    },
    scales: {
      x: {
        display: true,
        grid: { display: false },
      },
      y: {
        display: false,
        grid: { display: false },
        ticks: { beginAtZero: false },
      },
    },
  };

  return (
    <motion.section className="py-12" {...fadeInUp(0)}>
      <motion.h2 className="text-3xl font-bold text-center text-primary" {...fadeInUp(0.1)}>
        Perolehan Suara PKB 
      </motion.h2>
      <motion.p className="text-center text-lg mb-8" {...fadeInUp(0.2)}>
        Dalam Pemilihan Anggota Dewan Perwakilan Rakyat Daerah Kota Pontianak
      </motion.p>

      <motion.div className="max-w-4xl mx-auto" {...fadeInUp(0.3)}>
        <Bar data={chartData} options={options} height={400} />
      </motion.div>

      <motion.div className="text-center mt-8" {...fadeInUp(0.4)}>
        <p className="text-lg">
          PKB telah menunjukkan peningkatan yang signifikan di setiap pemilu, <br />
          dengan pencapaian tertinggi di Pemilu 2024 dengan perolehan kursi sebanyak 4.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ElectionsResults;
