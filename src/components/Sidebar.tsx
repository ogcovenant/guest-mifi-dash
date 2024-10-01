import { SidebarStore } from "@/store/SidebarStore";
import { MdDashboard } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { TbChartBubbleFilled } from "react-icons/tb";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FcAddImage } from "react-icons/fc";
import SidebarItem from "./SidebarItem";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPowerOutline } from "react-icons/io5";
import { IAccordionItemType } from "@/types/components";
import { UserStore } from "@/store/UserStore";
import { FaWifi } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { RiHistoryFill } from "react-icons/ri";

const Sidebar = () => {
  const partnerPageLinks: IAccordionItemType[] = [
    {
      title: "Countries",
      link: "/dashboard/admin/partners/countries",
    },
    {
      title: "City",
      link: "/dashboard/admin/partners/cities",
    },
    {
      title: "Partner",
      link: "/dashboard/admin/partners/partner",
    },
    {
      title: "New Distributor",
      link: "/dashboard/admin/partners/new",
    },
  ];

  const dataProviderPageLinks: IAccordionItemType[] = [
    {
      title: "MTN",
      link: "/dashboard/admin/data-providers/mtn",
    },
    {
      title: "AIRTEL",
      link: "/dashboard/admin/data-providers/airtel",
    },
    {
      title: "9 MOBILE",
      link: "/dashboard/admin/data-providers/9mobile",
    },
    {
      title: "GLO",
      link: "/dashboard/admin/data-providers/glo",
    },
  ];

  const rentalsPageLinks: IAccordionItemType[] = [
    {
      title: "New Rental",
      link: "/dashboard/partner/rentals/new",
    },
    {
      title: "Due for pickup",
      link: "/dashboard/partner/rentals/due-for-pickup",
    },
    {
      title: "Due for returns",
      link: "/dashboard/partner/rentals/due-for-return",
    },
    {
      title: "Late returns",
      link: "/dashboard/partner/rentals/late-returns",
    },
    {
      title: "Damaged",
      link: "/dashboard/partner/rentals/damaged",
    },
  ];
  const active = SidebarStore.useState((s) => s.active);
  const isOpen = SidebarStore.useState((s) => s.IsOpen);
  const userType = UserStore.useState((s) => s.type);

  return (
    <div
      className={`${
        isOpen
          ? "bg-[#211E48] absolute h-full w-full z-10 overflow-auto flex flex-col"
          : "hidden h-full lg:w-[30%] xl:w-[15%] bg-[#211E48] lg:flex flex-col justify-between overflow-auto"
      }`}
    >
      {userType === "admin" && (
        <ul className="">
          <li>
            <SidebarItem
              icon={MdDashboard}
              active={active === "dashboard" ? true : false}
              title="Dashboard"
              link="/dashboard/admin"
            />
          </li>
          <li>
            <SidebarItem
              icon={MdPeople}
              active={active === "partners" ? true : false}
              title="Partners"
              link="/dashboard/admin/partners"
              accordionItems={partnerPageLinks}
            />
          </li>
          <li>
            <SidebarItem
              icon={TbChartBubbleFilled}
              active={active === "data-providers" ? true : false}
              title="Data Providers"
              link="/dashboard/admin/data-providers"
              accordionItems={dataProviderPageLinks}
            />
          </li>
          <li>
            <SidebarItem
              icon={MdAccountBalanceWallet}
              active={active === "earnings" ? true : false}
              title="Earnings"
              link="/dashboard/admin/earnings"
            />
          </li>
          <li>
            <SidebarItem
              icon={FcAddImage}
              active={active === "add-product" ? true : false}
              title="Add Product"
              link="/dashboard/admin/add-product"
            />
          </li>
        </ul>
      )}
      {userType === "partner" && (
        <ul className="">
          <li>
            <SidebarItem
              icon={MdDashboard}
              active={active === "dashboard" ? true : false}
              title="Dashboard"
              link="/dashboard/partner"
            />
          </li>
          <li>
            <SidebarItem
              icon={IoCard}
              active={active === "billings" ? true : false}
              title="Billings"
              link="/dashboard/partner/billings"
            />
          </li>
          <li>
            <SidebarItem
              icon={FaWifi}
              active={active === "rentals" ? true : false}
              title="Rentals"
              link="/dashboard/partner/rentals"
              accordionItems={rentalsPageLinks}
            />
          </li>
          <li>
            <SidebarItem
              icon={FaBell}
              active={active === "notifications" ? true : false}
              title="Notifications"
              link="/dashboard/partner/notifications"
            />
          </li>
          <li>
            <SidebarItem
              icon={RiHistoryFill}
              active={active === "history" ? true : false}
              title="History"
              link="/dashboard/partner/history"
            />
          </li>
        </ul>
      )}
      <div className="border-t-[1px] border-[#3C3980] mt-5 md:mt-0">
        <ul>
          <li>
            <SidebarItem
              icon={IoSettingsOutline}
              title="Settings"
              active={active === "settings" ? true : false}
              link={userType === "partner" ? "/dashboard/partner/settings" : ""}
            />
            <SidebarItem icon={IoPowerOutline} title="Logout" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
