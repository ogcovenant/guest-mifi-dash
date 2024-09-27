import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoCalendar } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const page = () => {
  return (
    <div className="p-6 w-full h-full overflow-auto">
      <h1 className="text-[#FAFAFF] font-bold text-2xl">Rentals</h1>
      <div className="mt-5">
        <h2 className="text-[#B1AFCD] text-xl font-bold">Damaged</h2>
        <div className="mt-5">
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
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  Days
                </TableHead>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  Billed
                </TableHead>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  Call
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
                <TableCell className="text-center text-[#ECECFF]">
                  12
                </TableCell>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  $10
                </TableHead>
                <TableCell className="text-center text-[#ECECFF]">
                  <FaPhone />
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
                <TableCell className="text-center text-[#ECECFF]">
                  12
                </TableCell>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  $10
                </TableHead>
                <TableCell className="text-center text-[#ECECFF]">
                  <FaPhone />
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
                <TableCell className="text-center text-[#ECECFF]">
                  12
                </TableCell>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  $10
                </TableHead>
                <TableCell className="text-center text-[#ECECFF]">
                  <FaPhone />
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
                <TableCell className="text-center text-[#ECECFF]">
                  12
                </TableCell>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  $10
                </TableHead>
                <TableCell className="text-center text-[#ECECFF]">
                  <FaPhone />
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
                <TableCell className="text-center text-[#ECECFF]">
                  12
                </TableCell>
                <TableHead className="text-center text-[#FAFAFF] font-bold">
                  $10
                </TableHead>
                <TableCell className="text-center text-[#ECECFF]">
                  <FaPhone />
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
