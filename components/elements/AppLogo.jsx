import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppLogo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-6">
      <Image src={"/images/logo.jpg"} alt="logo" width={70} height={70} />
      <div className="text-primary md:text-white  font-bold text-xl">
            <h2>Dewan Pimpinan Cabang</h2>
            <h2 className=" uppercase"> PKB Kota Pontianak</h2>
          </div>
    </Link>
  );
};

export default AppLogo;
