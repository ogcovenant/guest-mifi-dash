import ProgressStatisticsSideBar from "../../../components/shared/dashboard/main/ProgressStatisticsSideBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Box1 } from "iconsax-react";
import { BsFillDeviceSsdFill } from "react-icons/bs";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { RiWalletFill } from "react-icons/ri";
import { IoCalendar } from "react-icons/io5";

const page = () => {
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
                  <p className="text-[#FAFAFF]">Wallet Balance</p>
                  <p className="text-white font-black">$100</p>
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
                  <p className="text-[#FAFAFF]">Available devices</p>
                  <p className="text-white font-black">12</p>
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
                  <p className="text-[#FAFAFF]">Rented Devices</p>
                  <p className="text-white font-black">48</p>
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
          <h2 className="text-[#B1AFCD] font-bold text-2xl">
            Live Mifi Status
          </h2>
          <div className="mt-3">
            <Table>
              <TableHeader>
                <TableRow className="border-none bg-[#2B275D] hover:bg-[#2B275D]">
                  <TableHead className="text-center text-[#FAFAFF] font-bold">
                    No.
                  </TableHead>
                  <TableHead className="text-center text-[#FAFAFF] font-bold">
                    Rental ID
                  </TableHead>
                  <TableHead className="text-center text-[#FAFAFF] font-bold">
                    Customer Name
                  </TableHead>
                  <TableHead className="text-center text-[#FAFAFF] font-bold">
                    Pick-up Details
                  </TableHead>
                  <TableHead className="text-center text-[#FAFAFF] font-bold">
                    Drop-off Details
                  </TableHead>
                  <TableHead className="text-center text-[#FAFAFF] font-bold">
                    Status
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
                    Rebecca Funsho
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    Eko hotel- 14/07/24
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    <div className="flex justify-center items-center gap-2">
                      <IoCalendar color="#AB50E3" />
                      <p>Airport - 29/07/24 </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    <div className="flex gap-3 items-center justify-center">
                      <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                        <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                      </div>
                      <p>Completed</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-[#ECECFF]">
                    01
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    #44578M
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    Rebecca Funsho
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    Eko hotel- 14/07/24
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    <div className="flex justify-center items-center gap-2">
                      <IoCalendar color="#AB50E3" />
                      <p>Airport - 29/07/24 </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    <div className="flex gap-3 items-center justify-center">
                      <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                        <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                      </div>
                      <p>Completed</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-[#ECECFF]">
                    01
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    #44578M
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    Rebecca Funsho
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    Eko hotel- 14/07/24
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    <div className="flex justify-center items-center gap-2">
                      <IoCalendar color="#AB50E3" />
                      <p>Airport - 29/07/24 </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    <div className="flex gap-3 items-center justify-center">
                      <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                        <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                      </div>
                      <p>Completed</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-[#ECECFF]">
                    01
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    #44578M
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    Rebecca Funsho
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    Eko hotel- 14/07/24
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    <div className="flex justify-center items-center gap-2">
                      <IoCalendar color="#AB50E3" />
                      <p>Airport - 29/07/24 </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    <div className="flex gap-3 items-center justify-center">
                      <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                        <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                      </div>
                      <p>Completed</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-[#ECECFF]">
                    01
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    #44578M
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    Rebecca Funsho
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    Eko hotel- 14/07/24
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    <div className="flex justify-center items-center gap-2">
                      <IoCalendar color="#AB50E3" />
                      <p>Airport - 29/07/24 </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-[#ECECFF]">
                    <div className="flex gap-3 items-center justify-center">
                      <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                        <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                      </div>
                      <p>Completed</p>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
