"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      src="/logo2.avif"
      alt="logo"
      height={34}
      width={170}
      className="cursor-pointer"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
