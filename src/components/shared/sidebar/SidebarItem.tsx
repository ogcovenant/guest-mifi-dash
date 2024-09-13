import { ISidebarItem } from "@/types/components";
import React from "react";

const SidebarItem = ({ active, icon: Icon, title }: ISidebarItem) => {
  return (
    <div
      className={`w-full flex items-center p-5 gap-2 cursor-pointer ${
        active
          ? "bg-[#2A2757] text-[#56C7FF] border-l-4 border-[#56C7FF]"
          : "text-white"
      }`}
    >
      <div>
        <Icon />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default SidebarItem;
