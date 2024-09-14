"use client";

import { SidebarStore } from "@/stores/SidebarStore";
import { MdDashboard } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { TbChartBubbleFilled } from "react-icons/tb";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FcAddImage } from "react-icons/fc";
import SidebarItem from "../sidebar/SidebarItem";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPowerOutline } from "react-icons/io5";
import { IAccordionItemType } from "@/types/components";

const Sidebar = () => {

  const partnerPageLinks: IAccordionItemType[] = [
    {
      title: "Countries",
      link: "/dashboard/partners/countries"
    },
    {
      title: "City",
      link: "/dashboard/partners/cities"
    },
    {
      title: "Partner",
      link: "/dashboard/partners/partner"
    },
    {
      title: "New Distributor",
      link: "/dashboard/partners/new"
    }
  ]


  const active = SidebarStore.useState((s) => s.active);

  return (
    <div className="w-[15%] bg-[#211E48] flex flex-col justify-between overflow-auto">
      <ul className="">
        <li>
          <SidebarItem
            icon={MdDashboard}
            active={active === "dashboard" ? true : false}
            title="Dashboard"
            link="/dashboard"
          />
        </li>
        <li>
          <SidebarItem
            icon={MdPeople}
            active={active === "partners" ? true : false}
            title="Partners"
            link="/dashboard/partners"
            accordionItems={partnerPageLinks}
          />
        </li>
        <li>
          <SidebarItem
            icon={TbChartBubbleFilled}
            active={active === "data-providers" ? true : false}
            title="Data Providers"
            link="/dashboard/data-providers"
          />
        </li>
        <li>
          <SidebarItem
            icon={MdAccountBalanceWallet}
            active={active === "earnings" ? true : false}
            title="Earnings"
            link="/dashboard/earnings"
          />
        </li>
        <li>
          <SidebarItem
            icon={FcAddImage}
            active={active === "add-product" ? true : false}
            title="Add Product"
            link="/dashboard/add-product"
          />
        </li>
      </ul>
      <div className="border-t-[1px] border-[#3C3980]">
        <ul>
          <li>
            <SidebarItem icon={IoSettingsOutline} title="Settings" />
            <SidebarItem icon={IoPowerOutline} title="Logout" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
