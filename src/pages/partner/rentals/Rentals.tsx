import { FaTruck, FaTaxi, FaPlus } from "react-icons/fa6";
import {
  IoIosSearch,
  IoIosTrendingDown,
  IoIosTrendingUp,
} from "react-icons/io";
import { RiFileDamageFill } from "react-icons/ri";
import { LuHistory } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BiExport } from "react-icons/bi";
import { IoCalendar } from "react-icons/io5";
import { UserStore } from "@/store/UserStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Rentals = () => {

  const userType = UserStore.useState((s) => s.type)
  const navigate = useNavigate()

  useEffect(() => {

    if(userType === "super-admin" || userType === "admin"){
      navigate("/error")
    }

  }, [])

  return (
    <div className="p-6 w-full h-full overflow-auto">
      <h1 className="text-[#FAFAFF] font-bold text-2xl">Rentals</h1>
      <div className="mt-5 flex flex-wrap xl:flex-nowrap gap-4">
        <div className="p-4 border-2 border-[#23215B] bg-[#13113C] rounded-lg w-full lg:w-[45%] xl:w-[25%]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="text-[#FAFAFF]/70">Due for pickup</p>
              <p className="text-white font-black">10</p>
            </div>
            <div className="text-[#50E356] bg-[#50E3563F] p-1 flex items-center justify-center rounded-full h-12 w-12">
              <FaTruck size={20} />
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <p className="flex items-center text-white gap-1">
              <span className="text-[#00B69B] flex items-center gap-1">
                <IoIosTrendingUp />
                <span>25</span>
              </span>
              daily rental credits
            </p>
          </div>
        </div>
        <div className="p-4 border-2 border-[#23215B] bg-[#13113C] rounded-lg w-full lg:w-[45%] xl:w-[25%]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="text-[#FAFAFF]/70">Due for return</p>
              <p className="text-white font-black">5</p>
            </div>
            <div className="bg-[#E3CB503F] p-1 flex items-center justify-center rounded-full h-12 w-12">
              <FaTaxi size={20} color="#E3CB50" />
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <p className="flex items-center text-white gap-1">
              <span className="text-[#E03535] flex items-center gap-1">
                <IoIosTrendingDown />
                <span>8.5%</span>
              </span>
              daily rental credits
            </p>
          </div>
        </div>
        <div className="p-4 border-2 border-[#23215B] bg-[#13113C] rounded-lg w-full lg:w-[45%] xl:w-[25%]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="text-[#FAFAFF]/70">Damaged</p>
              <p className="text-white font-black">1</p>
            </div>
            <div className="text-[#D45C4F] bg-[#D45C4F3F] p-1 flex items-center justify-center rounded-full h-12 w-12">
              <RiFileDamageFill size={20} />
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <p className="flex items-center text-white gap-1">
              <span className="text-[#00B69B] flex items-center gap-1">
                <IoIosTrendingUp />
                <span>8.5%</span>
              </span>
              down from yesterday
            </p>
          </div>
        </div>
        <div className="p-4 border-2 border-[#23215B] bg-[#13113C] rounded-lg w-full lg:w-[45%] xl:w-[25%]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="text-[#FAFAFF]/70">Late return</p>
              <p className="text-white font-black">1</p>
            </div>
            <div className="text-[#E39F50] bg-[#E39F503F] p-1 flex items-center justify-center rounded-full h-12 w-12">
              <LuHistory size={20} />
            </div>
          </div>
          <div className="mt-8 flex items-center">
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
      <div className="mt-8">
        <div className="flex flex-col md:flex-row justify-start items-center md:justify-between">
          <h3 className="text-[#B1AFCD] text-xl font-bold">Live Mifi Status</h3>
          <div className="text-[#ECECFF] flex items-center bg-[#2B275D] p-2 rounded-lg justify-between w-full md:w-[30%] mt-2">
            <IoIosSearch className="w-[10%]" />
            <input
              type="text"
              className="bg-[#2B275D] border-none outline-none w-[80%]"
              placeholder="Search"
            />
            <VscSettings className="justify-between" />
          </div>
          <div className="flex gap-3 mt-3">
            <button className="flex items-center justify-between p-4 gap-2 bg-[#2B275D] text-white rounded-lg">
              <p>New Rental</p>
              <FaPlus />
            </button>
            <button className="flex items-center justify-between p-4 gap-2 bg-[#83E5FF] rounded-lg">
              <p>Export</p>
              <BiExport />
            </button>
          </div>
        </div>
        <div className="mt-8">
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
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
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
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
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
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
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
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
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
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
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
  );
};

export default Rentals;
