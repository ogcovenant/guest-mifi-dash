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
} from "../../../../../components/ui/table";

const page = () => {
  return (
    <div className="p-6 h-full w-full overflow-auto">
      <h1 className="text-[#FAFAFF] font-bold text-2xl">
        9Mobile Data Overview
      </h1>
      <div className="flex justify-between items-center mt-5">
        <div className="flex flex-col md:flex-row items-center w-[60%] gap-5">
          <h2 className="text-xl text-[#B1AFCD] font-bold">Data consumption</h2>
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
        <div>
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
                Data purchased
              </TableHead>
              <TableHead className="text-center text-[#FAFAFF] font-bold">
                Data used
              </TableHead>
              <TableHead className="text-center text-[#FAFAFF] font-bold">
                Data remaining
              </TableHead>
              <TableHead className="text-center text-[#FAFAFF] font-bold">
                Price purchased
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
                50,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                20,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                30,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">$450</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                50,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                20,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                30,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">$450</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                50,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                20,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                30,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">$450</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                50,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                20,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                30,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">$450</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-[#ECECFF]">01</TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                Nigeria
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                50,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                20,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">
                30,000TB
              </TableCell>
              <TableCell className="text-center text-[#ECECFF]">$450</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
