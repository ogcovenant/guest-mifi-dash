import { BiExport } from "react-icons/bi";
import { FaFileUpload } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";

const Settings = () => {
  return (
    <div className="p-6 w-full h-full overflow-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-[#FAFAFF] font-bold text-2xl">Profile Settings</h1>
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 bg-[#83E5FF] p-3 rounded-md">
            <p>Export</p>
            <BiExport />
          </button>
          <button className="bg-[#2B275D] text-white p-4 px-6 rounded-lg">
            Save
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <div className="bg-[#2A2757] p-6">
          <div>
            <h3 className="text-white font-bold">Profile name</h3>
            <p className="text-[#B4B4B4]">
              This is the main profile name that will be visible for everyone
            </p>
          </div>
          <input
            type="text"
            name="profile-name"
            id="profile-name"
            className="mt-3 bg-[#19173D] border-2 border-[#2B275D] rounded-lg outline-none p-3 w-[60%] text-white"
            placeholder="Eko hotels & suites"
          />
        </div>
        <div className="bg-[#2A2757] p-6">
          <div>
            <h3 className="text-white font-bold">Profile picture</h3>
            <p className="text-[#B4B4B4]">
              This is the image that represents your company.
            </p>
          </div>
          <label
            htmlFor="profile-picture"
            className="flex flex-col items-center justify-center bg-[#19173D] border-[1px] border-dashed rounded-xl p-6 cursor-pointer mt-3 w-[40%]"
          >
            <div className="text-[#56C7FF] bg-black w-14 h-14 p-1 rounded-full items-center flex justify-center">
              <FaFileUpload size={20} />
            </div>
            <div className="flex flex-col items-center mt-3">
              <p className="text-[#D1D1D1]">
                <span className="text-[#56C7FF] font-bold">Click here</span> to
                upload your file or drag.
              </p>
              <p className="text-[#94A3B8] ">
                Supported Format: SVG, JPG, PNG (10mb each)
              </p>
            </div>
          </label>
          <input
            type="file"
            name="profile-picture"
            id="profile-picture"
            className="hidden"
          />
        </div>
        <div className="bg-[#2A2757] p-6">
          <div>
            <h3 className="text-white font-bold">Notifications</h3>
            <p className="text-[#B4B4B4]">
              This is where you will receive notifications
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <div className="items-top flex space-x-2">
              <Checkbox id="reports" />
              <div className="grid gap-1.5 leading-none">
                <label htmlFor="reports" className="text-white">
                  Reports
                </label>
                <p className="text-[#D0CFDE]">Enable reports notifications</p>
              </div>
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox id="reports" />
              <div className="grid gap-1.5 leading-none">
                <label htmlFor="reports" className="text-white">
                  Sound
                </label>
                <p className="text-[#D0CFDE]">Enable sound notifications</p>
              </div>
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox id="reports" />
              <div className="grid gap-1.5 leading-none">
                <label htmlFor="reports" className="text-white">
                  Vibrations
                </label>
                <p className="text-[#D0CFDE]">Enable vibrations effect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
