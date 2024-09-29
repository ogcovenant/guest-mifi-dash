"use client";

import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../../components/ui/chart";
import { UserStore } from "../../../../stores/UserStore";

const ProgressStatisticsSideBar = () => {
  const chartData = [
    {
      status: "active",
      stats: 60,
      fill: "#DEFF99",
    },
    {
      status: "inactive",
      stats: 40,
      fill: "#D83BFF",
    },
  ];

  const chartConfig = {
    status: {
      label: "Status",
    },
    active: {
      label: "Active",
      color: "#DEFF99",
    },
    inactive: {
      label: "inactive",
      color: "#D83BFF",
    },
  } satisfies ChartConfig;

  const userType = UserStore.useState((s) => s.type);

  return (
    <div className="p-8 px-4 text-white">
      <div>
        <h1>
          {userType === "admin"
            ? "Progress statistics"
            : "Today's rental statistics"}
        </h1>
        <p className="text-[#B1AFCD]">Mon 19 August, 2024</p>
      </div>
      {userType === "admin" && (
        <div className="mt-8 flex flex-col gap-8">
          <div className="border-2 border-[#1A1E4D] bg-[#24214E] rounded-lg">
            <div className="border-b-[1px] border-[#626263] p-2 flex items-center text-sm justify-between">
              <p className="font-bold text-[#FAFAFF]">Income</p>
              <p className="font-semibold text-[#ECECFF]">Today</p>
            </div>
            <div className="p-3">
              <p className="font-black">$14,200.00</p>
              <p className="my-3 text-xs flex gap-1 items-center">
                <IoIosTrendingDown color="#E03535" />
                <span>
                  <span className="text-[#E03535]">2.5%</span>
                  <span>more than yesterday</span>
                </span>
              </p>
            </div>
            <div className="flex justify-between items-center text-[#ECECFF] text-xs p-3">
              <p className="">Yesterday&apos;s income</p>
              <p className="">$1028</p>
            </div>
          </div>
          <div className="border-2 border-[#1A1E4D] bg-[#24214E] rounded-lg">
            <div className="border-b-[1px] border-[#626263] p-2 flex items-center text-sm justify-between">
              <p className="font-bold text-[#FAFAFF]">Expenses</p>
              <p className="font-semibold text-[#ECECFF]">Today</p>
            </div>
            <div className="p-3">
              <p className="font-black">$100</p>
              <p className="my-3 text-xs flex gap-1 items-center">
                <IoIosTrendingUp color="#00B69B" />
                <span>
                  <span className="text-[#00B69B]">2.5%</span>
                  <span>more than yesterday</span>
                </span>
              </p>
            </div>
            <div className="flex justify-between items-center text-[#ECECFF] text-xs p-3">
              <p className="">Yesterday&apos;s expense</p>
              <p className="">$450</p>
            </div>
          </div>
          <div className="border-2 border-[#1A1E4D] bg-[#24214E] rounded-lg">
            <div className="border-b-[1px] border-[#626263] p-2 flex items-center text-sm justify-between">
              <p className="font-bold text-[#FAFAFF]">Active vs Inactive</p>
              <p className="font-semibold text-[#ECECFF]">Today</p>
            </div>
            <div className="p-3">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="stats"
                    nameKey="status"
                    innerRadius={40}
                  />
                </PieChart>
              </ChartContainer>
            </div>
            <div className="p-3">
              <div className="flex justify-between">
                <p className="flex items-center gap-1">
                  <span className="block w-1 h-1 p-2 rounded-full bg-[#DEFF99]"></span>
                  <span>Active</span>
                </p>
                <p className="flex items-center gap-1 text-[#00B69B]">
                  <IoIosTrendingUp />
                  <span>60%</span>
                </p>
              </div>
              <div className="flex justify-between mt-1">
                <p className="flex items-center gap-1">
                  <span className="block w-1 h-1 p-2 rounded-full bg-[#D83BFF]"></span>
                  <span>Inactive</span>
                </p>
                <p className="flex items-center gap-1 text-[#E03535]">
                  <IoIosTrendingDown />
                  <span>40%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {userType === "partner" && (
        <div className="mt-8 flex flex-col gap-8">
          <div className="border-2 border-[#1A1E4D] bg-[#24214E] rounded-lg">
            <div className="border-b-[1px] border-[#626263] p-2 flex items-center text-sm justify-between">
              <p className="font-bold text-[#FAFAFF]">Due for pickup</p>
              <p className="font-semibold text-[#ECECFF]">Today</p>
            </div>
            <div className="p-3">
              <p className="font-black">10</p>
              <p className="my-3 text-xs flex gap-1 items-center">
                <IoIosTrendingDown color="#E03535" />
                <span>
                  <span className="text-[#E03535]">2.5%</span>
                  <span>more than yesterday</span>
                </span>
              </p>
            </div>
            <div className="text-[#ECECFF] text-xs p-3">
              Reach out to the renters on the booking page.
            </div>
          </div>
          <div className="border-2 border-[#1A1E4D] bg-[#24214E] rounded-lg">
            <div className="border-b-[1px] border-[#626263] p-2 flex items-center text-sm justify-between">
              <p className="font-bold text-[#FAFAFF]">Due for return</p>
              <p className="font-semibold text-[#ECECFF]">Today</p>
            </div>
            <div className="p-3">
              <p className="font-black">5</p>
              <p className="my-3 text-xs flex gap-1 items-center">
                <IoIosTrendingUp color="#00B69B" />
                <span>
                  <span className="text-[#00B69B]">10%</span>
                  <span>more than yesterday</span>
                </span>
              </p>
            </div>
            <div className="text-[#ECECFF] text-xs p-3">
              Reach out to the renters on the booking page.
            </div>
          </div>
          <div className="border-2 border-[#1A1E4D] bg-[#24214E] rounded-lg">
            <div className="border-b-[1px] border-[#626263] p-2 flex items-center text-sm justify-between">
              <p className="font-bold text-[#FAFAFF]">Late returns</p>
              <p className="font-semibold text-[#ECECFF]">Today</p>
            </div>
            <div className="p-3">
              <p className="font-black">1</p>
              <p className="my-3 text-xs flex gap-1 items-center">
                <IoIosTrendingDown color="#E03535" />
                <span>
                  <span className="text-[#E03535]">19%</span>
                  <span>more than yesterday</span>
                </span>
              </p>
            </div>
            <div className="text-[#ECECFF] text-xs p-3">
              Reach out to the renters on the booking page.
            </div>
          </div>
          <div className="border-2 border-[#1A1E4D] bg-[#24214E] rounded-lg">
            <div className="border-b-[1px] border-[#626263] p-2 flex items-center text-sm justify-between">
              <p className="font-bold text-[#FAFAFF]">Damaged</p>
              <p className="font-semibold text-[#ECECFF]">Today</p>
            </div>
            <div className="p-3">
              <p className="font-black">3</p>
              <p className="my-3 text-xs flex gap-1 items-center">
                <IoIosTrendingUp color="#00B69B" />
                <span>
                  <span className="text-[#00B69B]">10%</span>
                  <span>more than yesterday</span>
                </span>
              </p>
            </div>
            <div className="text-[#ECECFF] text-xs p-3">
              Reach out to the renters on the booking page.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressStatisticsSideBar;
