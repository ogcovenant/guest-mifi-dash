import { VscSettings } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
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

const page = () => {
  return (
    <div className="p-6 h-full w-full overflow-auto">
      <h1 className="text-[#FAFAFF] font-bold text-2xl">Countries</h1>
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-center mt-5 w-full">
        <div className="flex flex-col md:flex-row items-center w-full md:w-[60%] gap-5">
          <h2 className="text-xl text-[#B1AFCD] font-bold">
            Countries Statistics
          </h2>
          <div className="text-[#ECECFF] flex items-center bg-[#2B275D] p-2 rounded-lg justify-between w-full md:w-[50%]">
            <IoIosSearch className="w-[10%]" />
            <input
              type="text"
              className="bg-[#2B275D] border-none outline-none w-[80%]"
              placeholder="Search"
            />
            <VscSettings className="justify-between" />
          </div>
        </div>
        <div className="mt-3">
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
                Countries
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
              <TableHead className="text-center text-[#FAFAFF] font-bold">
                Damaged
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                $100,000
              </TableCell>
              <TableCell className="text-center text-[#ECECFF] flex gap-3 items-center justify-center">
                <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                <p>50,000</p>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                    <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>41900</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                    <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>7200</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FEB7B73F]">
                    <p className="bg-[#FEB7B7] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>10</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                $100,000
              </TableCell>
              <TableCell className="text-center text-[#ECECFF] flex gap-3 items-center justify-center">
                <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                <p>50,000</p>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                    <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>41900</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                    <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>7200</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FEB7B73F]">
                    <p className="bg-[#FEB7B7] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>10</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                $100,000
              </TableCell>
              <TableCell className="text-center text-[#ECECFF] flex gap-3 items-center justify-center">
                <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                <p>50,000</p>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                    <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>41900</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                    <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>7200</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FEB7B73F]">
                    <p className="bg-[#FEB7B7] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>10</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                $100,000
              </TableCell>
              <TableCell className="text-center text-[#ECECFF] flex gap-3 items-center justify-center">
                <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                <p>50,000</p>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                    <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>41900</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                    <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>7200</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FEB7B73F]">
                    <p className="bg-[#FEB7B7] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>10</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                $100,000
              </TableCell>
              <TableCell className="text-center text-[#ECECFF] flex gap-3 items-center justify-center">
                <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                <p>50,000</p>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                    <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>41900</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                    <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>7200</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FEB7B73F]">
                    <p className="bg-[#FEB7B7] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>10</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                $100,000
              </TableCell>
              <TableCell className="text-center text-[#ECECFF] flex gap-3 items-center justify-center">
                <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                <p>50,000</p>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                    <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>41900</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                    <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>7200</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FEB7B73F]">
                    <p className="bg-[#FEB7B7] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>10</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                $100,000
              </TableCell>
              <TableCell className="text-center text-[#ECECFF] flex gap-3 items-center justify-center">
                <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                <p>50,000</p>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                    <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>41900</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                    <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>7200</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FEB7B73F]">
                    <p className="bg-[#FEB7B7] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>10</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                $100,000
              </TableCell>
              <TableCell className="text-center text-[#ECECFF] flex gap-3 items-center justify-center">
                <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                <p>50,000</p>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                    <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>41900</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                    <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>7200</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FEB7B73F]">
                    <p className="bg-[#FEB7B7] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>10</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                $100,000
              </TableCell>
              <TableCell className="text-center text-[#ECECFF] flex gap-3 items-center justify-center">
                <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                <p>50,000</p>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                    <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>41900</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                    <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>7200</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FEB7B73F]">
                    <p className="bg-[#FEB7B7] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>10</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                $100,000
              </TableCell>
              <TableCell className="text-center text-[#ECECFF] flex gap-3 items-center justify-center">
                <PiBroadcastFill className="text-[#AB50E3] text-xl" />
                <p>50,000</p>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#C0FF703F]">
                    <p className="bg-[#C0FF70] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>41900</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FFC37C3F]">
                    <p className="bg-[#FFC37C] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>7200</p>
                </div>
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                <div className="flex gap-3 items-center justify-center">
                  <div className="h-4 w-4 rounded-full flex justify-center items-center bg-[#FEB7B73F]">
                    <p className="bg-[#FEB7B7] h-2 w-2 rounded-full"></p>
                  </div>
                  <p>10</p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
