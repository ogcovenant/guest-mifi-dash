import { Progress } from "@/components/ui/progress";
import { FaPhone, FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { BiExport } from "react-icons/bi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PiBroadcastFill } from "react-icons/pi";
import lagos from "@/assets/lagos.png"

const Partners = () => {
  return (
    <div className="p-6 w-full h-full overflow-auto">
      <h1 className="text-[#FAFAFF] font-bold text-2xl">Partners</h1>
      <div className="mt-3 flex flex-wrap md:flex-nowrap gap-6">
        <div className="border-2 border-[#23215B] bg-[#13113C] p-3 w-full md:w-[33%] rounded-lg">
          <div className="flex justify-between items-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF384] to-[#FFB979] font-bold">
              Top Countries
            </p>
            <p className="text-[#83E5FF]">View all</p>
          </div>
          <div className="mt-2 p-3 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-[#ECECFF]">Togo</p>
              <Progress value={87} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#ECECFF]">Nigeria</p>
              <Progress value={65} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#ECECFF]">Rwanda</p>
              <Progress value={73} />
            </div>
          </div>
        </div>
        <div className="border-2 border-[#23215B] bg-[#13113C] p-3 w-full md:w-[33%] rounded-lg">
          <div className="flex justify-between items-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF384] to-[#FFB979] font-bold">
              #1 Top City
            </p>
            <p className="text-[#83E5FF]">View all</p>
          </div>
          <div className="mt-2 p-3 flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <img src={lagos} alt="Lagos Bridge" />
              <div>
                <p className="text-[#FAFAFF] font-bold">Lagos</p>
                <p className="text-[#D0CFDE]">Nigeria</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-[#FAFAFF]">Sales</p>
                <p className="text-[#D0CFDE]">$10,000</p>
              </div>
              <div>
                <p className="text-[#FAFAFF]">Total Devices</p>
                <p className="text-[#D0CFDE]">240</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-[#23215B] bg-[#13113C] p-3 w-full md:w-[33%] rounded-lg">
          <div className="flex justify-between items-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF384] to-[#FFB979] font-bold">
              Top Partner
            </p>
            <p className="text-[#83E5FF]">View all</p>
          </div>
          <div className="mt-2 p-3 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img src={lagos} alt="Lagos Bridge" />
                <div>
                  <p className="text-[#FAFAFF] font-bold">Eko hotel</p>
                  <p className="text-[#D0CFDE]">Nigeria</p>
                </div>
              </div>
              <div className="text-[#23D4D4] bg-[#23D4D43F] h-10 w-10 p-3 rounded-full">
                <FaPhone />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-[#FAFAFF]">Sales</p>
                <p className="text-[#D0CFDE]">$10,000</p>
              </div>
              <div>
                <p className="text-[#FAFAFF]">Total Devices</p>
                <p className="text-[#D0CFDE]">240</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-col md:flex-row justify-start items-center md:justify-between">
          <h3 className="text-[#B1AFCD] text-xl font-bold">
            Partner Statistics
          </h3>
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
              <p>New Partner</p>
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
                  Partner ID
                </TableHead>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  Partner Name
                </TableHead>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  Earnings
                </TableHead>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  Total Devices
                </TableHead>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  Active Devices
                </TableHead>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  Inactive Devices
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
                  Eko hotel & Suites, V.I
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  $350
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                    <p>2000</p>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                      <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                    </div>
                    <p>1900</p>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                      <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                    </div>
                    <p>100</p>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
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
                  <div className="flex gap-3 items-center justify-center">
                    <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                    <p>2000</p>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                      <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                    </div>
                    <p>1900</p>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                      <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                    </div>
                    <p>100</p>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
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
                  <div className="flex gap-3 items-center justify-center">
                    <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                    <p>2000</p>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                      <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                    </div>
                    <p>1900</p>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                      <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                    </div>
                    <p>100</p>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
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
                  <div className="flex gap-3 items-center justify-center">
                    <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                    <p>2000</p>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                      <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                    </div>
                    <p>1900</p>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                      <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                    </div>
                    <p>100</p>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
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
                  <div className="flex gap-3 items-center justify-center">
                    <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                    <p>2000</p>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                      <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                    </div>
                    <p>1900</p>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                      <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                    </div>
                    <p>100</p>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
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
                  <div className="flex gap-3 items-center justify-center">
                    <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                    <p>2000</p>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                      <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                    </div>
                    <p>1900</p>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                      <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                    </div>
                    <p>100</p>
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

export default Partners;
