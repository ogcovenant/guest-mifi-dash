import { ILogo } from "@/types/components";
import React from "react";

const Logo = ({ isDark }: ILogo) => {
  return (
    <div className="font-extrabold text-3xl">
      <span className={`${isDark ? "text-black" : "text-white"}`}>Guest</span>
      <span className={`${isDark ? "text-black" : "text-[#56C7FF]"}`}>Mifi</span>
    </div>
  );
};

export default Logo;
