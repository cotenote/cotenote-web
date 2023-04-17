import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
}

function Logo({ width = 175, height = 20.45 }: LogoProps) {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      style={{ cursor: "pointer" }}
      className="main_logo"
      src="/assets/images/logo.svg"
      width={width}
      height={height}
      alt="logo"
      priority
    />
  );
}

export default Logo;
