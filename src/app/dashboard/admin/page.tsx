"use client";

import ProgressStatisticsSideBar from "../../../components/shared/dashboard/main/ProgressStatisticsSideBar";
import { RiWalletFill } from "react-icons/ri";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { Box1 } from "iconsax-react";
import { BsFillDeviceSsdFill } from "react-icons/bs";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { useState } from "react";

const Page = () => {
  const chartData = [
    { date: "2024-04-21", sales: 137 },
    { date: "2024-04-22", sales: 224 },
    { date: "2024-04-23", sales: 138 },
    { date: "2024-04-24", sales: 387 },
    { date: "2024-04-25", sales: 215 },
    { date: "2024-04-26", sales: 75 },
    { date: "2024-04-27", sales: 383 },
    { date: "2024-04-28", sales: 122 },
    { date: "2024-04-29", sales: 315 },
    { date: "2024-04-30", sales: 454 },
    { date: "2024-05-01", sales: 165 },
    { date: "2024-05-02", sales: 293 },
    { date: "2024-05-03", sales: 247 },
    { date: "2024-05-04", sales: 385 },
    { date: "2024-05-05", sales: 481 },
    { date: "2024-05-06", sales: 498 },
    { date: "2024-05-07", sales: 388 },
    { date: "2024-05-08", sales: 149 },
    { date: "2024-05-09", sales: 227 },
    { date: "2024-05-10", sales: 293 },
    { date: "2024-05-11", sales: 335 },
    { date: "2024-05-12", sales: 197 },
    { date: "2024-05-13", sales: 197 },
    { date: "2024-05-14", sales: 448 },
    { date: "2024-05-15", sales: 473 },
    { date: "2024-05-16", sales: 338 },
    { date: "2024-05-17", sales: 499 },
    { date: "2024-05-18", sales: 315 },
    { date: "2024-05-19", sales: 235 },
    { date: "2024-05-20", sales: 177 },
    { date: "2024-05-21", sales: 82 },
    { date: "2024-05-22", sales: 81 },
    { date: "2024-05-23", sales: 252 },
    { date: "2024-05-24", sales: 294 },
    { date: "2024-05-25", sales: 201 },
    { date: "2024-05-26", sales: 213 },
    { date: "2024-05-27", sales: 420 },
    { date: "2024-05-28", sales: 233 },
    { date: "2024-05-29", sales: 78 },
    { date: "2024-05-30", sales: 340 },
    { date: "2024-05-31", sales: 178 },
    { date: "2024-06-01", sales: 178 },
    { date: "2024-06-02", sales: 470 },
    { date: "2024-06-03", sales: 103 },
    { date: "2024-06-04", sales: 439 },
    { date: "2024-06-05", sales: 88 },
    { date: "2024-06-06", sales: 294 },
    { date: "2024-06-07", sales: 323 },
    { date: "2024-06-08", sales: 385 },
    { date: "2024-06-09", sales: 438 },
    { date: "2024-06-10", sales: 155 },
    { date: "2024-06-11", sales: 92 },
    { date: "2024-06-12", sales: 492 },
    { date: "2024-06-13", sales: 81 },
    { date: "2024-06-14", sales: 426 },
    { date: "2024-06-15", sales: 307 },
    { date: "2024-06-16", sales: 371 },
    { date: "2024-06-17", sales: 475 },
    { date: "2024-06-18", sales: 107 },
    { date: "2024-06-19", sales: 341 },
    { date: "2024-06-20", sales: 408 },
    { date: "2024-06-21", sales: 169 },
    { date: "2024-06-22", sales: 317 },
    { date: "2024-06-23", sales: 480 },
    { date: "2024-06-24", sales: 132 },
    { date: "2024-06-25", sales: 141 },
    { date: "2024-06-26", sales: 434 },
    { date: "2024-06-27", sales: 448 },
    { date: "2024-06-28", sales: 149 },
    { date: "2024-06-29", sales: 103 },
    { date: "2024-06-30", sales: 446 },
  ];

  const chartConfig = {
    sales: {
      label: "Sales",
      color: "#3EC0DC",
    },
  } satisfies ChartConfig;

  const [timeRange, setTimeRange] = useState("90d");
  // const filteredData = chartData.filter((item) => {
  //   const date = new Date(item.date);
  //   const now = new Date();
  //   let daysToSubtract = 90;
  //   if (timeRange === "30d") {
  //     daysToSubtract = 30;
  //   } else if (timeRange === "7d") {
  //     daysToSubtract = 7;
  //   }
  //   now.setDate(now.getDate() - daysToSubtract);
  //   return date >= now;
  // });

  return (
    <div className="flex w-full h-full">
      <div className="bg-[#151236] w-[30%] xl:w-[20%] h-full overflow-auto hidden md:block">
        <ProgressStatisticsSideBar />
      </div>
      <div className="w-full md:w-[70%] xl:w-[80%] p-6 overflow-auto">
        <div>
          <h1 className="text-[#FAFAFF] font-bold text-2xl">Dashboard</h1>
          <div className="mt-5 flex flex-wrap xl:flex-nowrap gap-4">
            <div className="p-4 border-2 border-[#23215B] bg-[#13113C] rounded-lg w-full lg:w-[45%] xl:w-[33%]">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-[#FAFAFF]">On Account</p>
                  <p className="text-white font-black">$75,000</p>
                </div>
                <div className="text-[#50E356] bg-[#50E3563F] p-1 flex items-center justify-center rounded-full h-12 w-12">
                  <RiWalletFill size={20} />
                </div>
              </div>
              <div className="mt-3 flex items-center">
                <p className="flex items-center text-white gap-1">
                  <span className="text-[#00B69B] flex items-center gap-1">
                    <IoIosTrendingUp />
                    <span>25</span>
                  </span>
                  daily rental credits
                </p>
              </div>
            </div>
            <div className="p-4 border-2 border-[#23215B] bg-[#13113C] rounded-lg w-full lg:w-[45%] xl:w-[33%]">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-[#FAFAFF]">Partners</p>
                  <p className="text-white font-black">43</p>
                </div>
                <div className="bg-[#E3CB503F] p-1 flex items-center justify-center rounded-full h-12 w-12">
                  <Box1 size="32" color="#E3CB50" variant="Bulk" />
                </div>
              </div>
              <div className="mt-3 flex items-center">
                <p className="flex items-center text-white gap-1">
                  <span className="text-[#E03535] flex items-center gap-1">
                    <IoIosTrendingDown />
                    <span>8.5%</span>
                  </span>
                  daily rental credits
                </p>
              </div>
            </div>
            <div className="p-4 border-2 border-[#23215B] bg-[#13113C] rounded-lg w-full lg:w-[45%] xl:w-[33%]">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-[#FAFAFF]">Active Devices</p>
                  <p className="text-white font-black">1,139</p>
                </div>
                <div className="text-[#D45C4F] bg-[#D45C4F3F] p-1 flex items-center justify-center rounded-full h-12 w-12">
                  <BsFillDeviceSsdFill size={20} />
                </div>
              </div>
              <div className="mt-3 flex items-center">
                <p className="flex items-center text-white gap-1">
                  <span className="text-[#00B69B] flex items-center gap-1">
                    <IoIosTrendingUp />
                    <span>8.5%</span>
                  </span>
                  down from yesterday
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-[#B1AFCD] font-bold text-2xl">Network Status</h2>
          <div className="mt-3">
            <Table>
              <TableHeader>
                <TableRow className="border-none bg-[#2B275D] hover:bg-[#2B275D]">
                  <TableHead className="text-center text-[#FAFAFF] font-bold">
                    No.
                  </TableHead>
                  <TableHead className="text-center text-[#FAFAFF] font-bold">
                    Partner ID
                  </TableHead>
                  <TableHead className="text-center text-[#FAFAFF] font-bold">
                    Partner Name
                  </TableHead>
                  <TableHead className="text-center text-[#FAFAFF] font-bold">
                    Earnings
                  </TableHead>
                  <TableHead className="text-center text-[#FAFAFF] font-bold">
                    Devices
                  </TableHead>
                  <TableHead className="text-center text-[#FAFAFF] font-bold">
                    Active
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center text-[#ECECFF]">
                    01
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    #44578M
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    Eko hotel & Suites, V.I
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    $350
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    50
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    29
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-[#ECECFF]">
                    02
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    #23456F
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    Marriot Hotel, Kigali
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    $9000
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    1004
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    340
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-[#ECECFF]">
                    03
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    #44578M
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    Four points hotel, Oniru
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    $400
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    35
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    26
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-[#B1AFCD] font-bold text-2xl">Sales Details</h2>
          <div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger
                className="w-[160px] rounded-lg sm:ml-auto bg-gradient-to-r from-[#26D2FF] to-[#00A5D0] border-none"
                aria-label="Select a value"
              >
                <SelectValue placeholder="Last 3 months" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="90d" className="rounded-lg">
                  Last 3 months
                </SelectItem>
                <SelectItem value="30d" className="rounded-lg">
                  Last 30 days
                </SelectItem>
                <SelectItem value="7d" className="rounded-lg">
                  Last 7 days
                </SelectItem>
              </SelectContent>
            </Select>
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[250px] w-full mt-2"
            >
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3EC0DC" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3EC0DC" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });
                      }}
                      indicator="dot"
                    />
                  }
                />
                <Area
                  dataKey="sales"
                  type="natural"
                  fill="url(#fillSales)"
                  stroke="#3EC0DC"
                  stackId="a"
                />
                <ChartLegend
                  className="text-white"
                  content={<ChartLegendContent />}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
