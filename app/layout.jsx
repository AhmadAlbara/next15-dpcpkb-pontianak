import { Raleway } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/layouts";

const raleway = Raleway({ subsets: ["latin"], preload: false });

export const metadata = {
  title: "DPC PKB Pontianak | Partai Kebangkitan Bangsa untuk Indonesia Maju",
  description: "Berkomitmen untuk menciptakan perubahan positif melalui pendidikan, pemberdayaan ekonomi, dan pembangunan infrastruktur demi kemajuan Indonesia.",
  icons: {
    icon: [
      {
        url: "/images/logo.jpg",
        href: "/images/logo.jpg",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
