"use client"

import { ISidebarItem } from "@/types/components";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";

const SidebarItem = ({
  active,
  icon: Icon,
  title,
  link,
  accordionItems,
}: ISidebarItem) => {

  
  const pathname = usePathname()

  return (
    <>
      {/* @ts-ignore */}
      {accordionItems?.length > 0 ? (
        <Accordion type="single" collapsible>
          <AccordionItem value={link || ""}>
            <AccordionTrigger
              className={`w-full p-5 cursor-pointer ${
                active
                  ? "bg-[#2A2757] text-[#56C7FF] border-l-4 border-[#56C7FF]"
                  : "text-white"
              }`}
            >
              <a href={link}>
                <div className="flex items-center gap-2">
                  <div>
                    <Icon />
                  </div>
                  <p>{title}</p>
                </div>
              </a>
            </AccordionTrigger>
            <AccordionContent className="px-8 mt-2">
              <ul>
                {accordionItems?.map((item) => (
                  <a href={item.link} key={item.title}>
                    <li className={`p-3 ${pathname === item.link ? "text-[#56C7FF] font-bold bg-[#2A2757]" : "text-[#CFCFD1]"}`}>{item.title}</li>
                  </a>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <>
          <a href={link}>
            <div
              className={`w-full p-5 cursor-pointer ${
                active
                  ? "bg-[#2A2757] text-[#56C7FF] border-l-4 border-[#56C7FF]"
                  : "text-white"
              } flex items-center gap-2`}
            >
              <div className="flex items-center gap-2">
                <div>
                  <Icon />
                </div>
                <p>{title}</p>
              </div>
            </div>
          </a>
        </>
      )}
    </>
  );
};

export default SidebarItem;
