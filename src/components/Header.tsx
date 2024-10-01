import Logo from "./Logo";
import { GoSearch } from "react-icons/go";
import { FaBars, FaBell } from "react-icons/fa6";
import { SidebarStore } from "@/store/SidebarStore";
import profilePicture from "@/assets/profile.png"

const Header = () => {
  const isOpen = SidebarStore.useState((s) => s.IsOpen);

  const handleSidebarOpen = () => {
    SidebarStore.update((s) => {
      s.IsOpen = !isOpen;
    });
  };

  return (
    <div className="flex h-full items-center">
      <div className="w-[50%] lg:w-[30%] xl:w-[15%] bg-[#0F0D38] p-4 flex justify-center items-center py-6 h-full">
        <Logo isDark={false} />
      </div>
      <div className="px-5 w-[70%] xl:w-[85%] bg-[#211E48] md:flex justify-between items-center h-full">
        <div className="hidden lg:flex bg-[#2B275D] items-center gap-1 h-12 px-5 rounded-full w-[40%] text-white">
          <GoSearch size={20} />
          <input
            type="text"
            placeholder="Search"
            name="search"
            id="search"
            className="border-none outline-none bg-[#2B275D] w-[90%]"
          />
        </div>
        <div className="hidden lg:flex gap-5">
          <div className="flex items-center text-white bg-gradient-to-b from-[#E49BFE] to-[#C41CFF] p-2 px-3 rounded-lg shadow-lg shadow-[#811DAB] cursor-pointer">
            <FaBell />
            <p>16</p>
          </div>
          <div className="flex text-white items-center gap-2">
            <img src={profilePicture} alt="Profile Picture" />
            <p>Eko hotels & Suites</p>
          </div>
        </div>
        <div className="text-white text-4xl w-full h-full flex items-center justify-end lg:hidden">
          <FaBars onClick={() => handleSidebarOpen()} />
        </div>
      </div>
    </div>
  );
};

export default Header;
