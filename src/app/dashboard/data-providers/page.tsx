import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoIosSearch } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { BiExport } from "react-icons/bi";

const page = () => {
  return (
    <div className="p-6 w-full h-full overflow-auto">
      <h1 className="text-[#FAFAFF] font-bold text-2xl">Data Providers</h1>
      <div className="mt-3 flex gap-6">
        <div className="w-[25%] hover:bg-gradient-to-tr from-[#5AC8C8] to-[#4B00C8] p-[2px] rounded-xl">
          <div className="bg-[#13113C] rounded-lg p-5">
            <div className="flex gap-3 items-center">
              <img src="/mtn.png" alt="MTN logo" className="w-14 h-14" />
              <div className="">
                <p className="text-[#FAFAFF] font-bold">MTN</p>
                <p className="text-[#D0CFDE]">Telco</p>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <p className="text-[#FAFAFF] font-bold">Data bought</p>
                <p className="text-[#D0CFDE]">4.8TB</p>
              </div>
              <div>
                <p className="text-[#FAFAFF] font-bold">Data left</p>
                <p className="text-[#D0CFDE]">2.7TB</p>
              </div>
            </div>
            <p className="text-[#23D4D4] mt-4">View more</p>
          </div>
        </div>
        <div className="w-[25%] hover:bg-gradient-to-tr from-[#5AC8C8] to-[#4B00C8] p-[2px] rounded-xl">
          <div className="bg-[#13113C] rounded-lg p-5">
            <div className="flex gap-3 items-center">
              <img src="/airtel.png" alt="Airtel logo" className="w-14 h-14" />
              <div className="">
                <p className="text-[#FAFAFF] font-bold">AIRTEL</p>
                <p className="text-[#D0CFDE]">Telco</p>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <p className="text-[#FAFAFF] font-bold">Data bought</p>
                <p className="text-[#D0CFDE]">9.2TB</p>
              </div>
              <div>
                <p className="text-[#FAFAFF] font-bold">Data left</p>
                <p className="text-[#D0CFDE]">7.5TB</p>
              </div>
            </div>
            <p className="text-[#23D4D4] mt-4">View more</p>
          </div>
        </div>
        <div className="w-[25%] hover:bg-gradient-to-tr from-[#5AC8C8] to-[#4B00C8] p-[2px] rounded-xl">
          <div className="bg-[#13113C] rounded-lg p-5">
            <div className="flex gap-3 items-center">
              <img
                src="/9mobile.png"
                alt="9Mobile logo"
                className="w-14 h-14"
              />
              <div className="">
                <p className="text-[#FAFAFF] font-bold">9 Mobile</p>
                <p className="text-[#D0CFDE]">Telco</p>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <p className="text-[#FAFAFF] font-bold">Data bought</p>
                <p className="text-[#D0CFDE]">2.4TB</p>
              </div>
              <div>
                <p className="text-[#FAFAFF] font-bold">Data left</p>
                <p className="text-[#D0CFDE]">1.6TB</p>
              </div>
            </div>
            <p className="text-[#23D4D4] mt-4">View more</p>
          </div>
        </div>
        <div className="w-[25%] hover:bg-gradient-to-tr from-[#5AC8C8] to-[#4B00C8] p-[2px] rounded-xl">
          <div className="bg-[#13113C] rounded-lg p-5">
            <div className="flex gap-3 items-center">
              <img src="/glo.png" alt="Glo logo" className="w-14 h-14" />
              <div className="">
                <p className="text-[#FAFAFF] font-bold">GLO</p>
                <p className="text-[#D0CFDE]">Telco</p>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <p className="text-[#FAFAFF] font-bold">Data bought</p>
                <p className="text-[#D0CFDE]">120.8TB</p>
              </div>
              <div>
                <p className="text-[#FAFAFF] font-bold">Data left</p>
                <p className="text-[#D0CFDE]">102.36TB</p>
              </div>
            </div>
            <p className="text-[#23D4D4] mt-4">View more</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <div className="flex w-[50%] items-center gap-4">
            <h3 className="text-[#B1AFCD] text-xl font-bold">
              Data consumption
            </h3>
            <div className="text-[#ECECFF] flex items-center bg-[#2B275D] p-2 rounded-lg justify-between w-[60%]">
              <IoIosSearch className="w-[10%]" />
              <input
                type="text"
                className="bg-[#2B275D] border-none outline-none w-[80%]"
                placeholder="Search"
              />
              <VscSettings className="justify-between" />
            </div>
          </div>
          <div className="flex gap-3">
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
                  Data used
                </TableHead>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  Data remaining
                </TableHead>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  Data purchased
                </TableHead>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  Price purchased
                </TableHead>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  Network provider
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
                  20,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  30,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  50,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  $450
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  MTN
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  Nigeria
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  20,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  30,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  50,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  $450
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  MTN
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  Nigeria
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  20,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  30,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  50,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  $450
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  MTN
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  Nigeria
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  20,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  30,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  50,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  $450
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  MTN
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-[#ECECFF]">01</TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  Nigeria
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  20,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  30,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  50,000TB
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  $450
                </TableCell>
                <TableCell className="text-center text-[#ECECFF]">
                  MTN
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
