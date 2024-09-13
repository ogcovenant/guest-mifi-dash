import Logo from "@/components/common/Logo";
import { GoSearch } from "react-icons/go";
import { FaBell } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex">
      <div className="w-[15%] bg-[#0F0D38] p-4 flex justify-center py-6">
        <Logo isDark={false} />
      </div>
      <div className="px-5 w-[85%] bg-[#211E48] flex justify-between items-center">
        <div className="flex bg-[#2B275D] items-center gap-1 h-12 px-5 rounded-full w-[40%] text-white">
          <GoSearch size={20} />
          <input
            type="text"
            placeholder="Search"
            name="search"
            id="search"
            className="border-none outline-none bg-[#2B275D] w-[90%]"
          />
        </div>
        <div className="flex gap-5">
          <div className="flex items-center text-white bg-gradient-to-b from-[#E49BFE] to-[#C41CFF] p-2 px-3 rounded-lg shadow-lg shadow-[#811DAB] cursor-pointer">
            <FaBell />
            <p>16</p>
          </div>
          <div className="flex text-white items-center gap-2">
            <img src="/profile.png" alt="Profile Picture" />
            <p>Eko hotels & Suites</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
