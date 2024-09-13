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

const Sidebar = () => {
  const active = SidebarStore.useState((s) => s.active);

  return (
    <div className="w-[15%] bg-[#211E48] flex flex-col justify-between">
      <ul className="">
        <li>
          <a href="/dashboard">
            <SidebarItem
              icon={MdDashboard}
              active={active === "dashboard" ? true : false}
              title="Dashboard"
            />
          </a>
        </li>
        <li>
          <a href="/dashboard/partners">
            <SidebarItem
              icon={MdPeople}
              active={active === "partners" ? true : false}
              title="Partners"
            />
          </a>
        </li>
        <li>
          <a href="/dashboard/data-providers">
            <SidebarItem
              icon={TbChartBubbleFilled}
              active={active === "data-providers" ? true : false}
              title="Data Providers"
            />
          </a>
        </li>
        <li>
          <a href="/dashboard/earnings">
            <SidebarItem
              icon={MdAccountBalanceWallet}
              active={active === "earnings" ? true : false}
              title="Earnings"
            />
          </a>
        </li>
        <li>
          <a href="/dashboard/add-product">
            <SidebarItem
              icon={FcAddImage}
              active={active === "add-product" ? true : false}
              title="Add Product"
            />
          </a>
        </li>
      </ul>
      <div className="border-t-[1px] border-[#3C3980]">
        <ul>
          <li>
            <SidebarItem icon={IoSettingsOutline} title="Settings"/>
            <SidebarItem icon={IoPowerOutline} title="Logout"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
