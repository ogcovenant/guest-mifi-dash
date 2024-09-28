// import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface ILogo {
  isDark: boolean;
}

export interface IAccordionItemType {
  title: string;
  link: string;
}
export interface ISidebarItem {
  active?: boolean;
  icon: IconType;
  title: string;
  link?: string;
  accordionItems?: IAccordionItemType[];
}
