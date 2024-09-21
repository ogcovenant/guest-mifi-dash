import React from "react";
import { FaPlus } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  return (
    <div className="p-6 w-full h-full overflow-auto">
      <h1 className="text-[#FAFAFF] font-bold text-2xl">New product</h1>
      <div className="mt-3 bg-[#211E48] border-2 border-[#23215B] rounded-lg">
        <div className="p-4 flex justify-between border-b-[1px] border-[#979797]">
          <p className="text-white font-semibold">Product type</p>
          <p className="flex items-center text-white gap-2">
            <FaPlus />
            <span className="block">Add Category</span>
          </p>
        </div>
        <div className="p-6 flex">
          <div className="bg-gradient-to-tr from-[#5AC8C8] to-[#5AC8C8] p-[2px] rounded-lg">
            <div className="bg-[#13113C] p-6 rounded-lg flex gap-5">
              <div className="flex flex-col justify-between">
                <p className="text-[#FAFAFF] font-black">MIFI</p>
                <div>
                  <p className="text-[#FAFAFF]">Total number</p>
                  <p className="text-[#FAFAFF] font-bold">10,000</p>
                </div>
              </div>
              <div>
                <img src="/mifi.png" alt="Mifi Picture" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-[#211E48] border-2 border-[#23215B] rounded-lg">
        <div className="p-4 border-b-[1px] border-[#979797]">
          <p className="text-white font-semibold">Product Details</p>
        </div>
        <div className="p-3">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
              <div className="flex flex-col gap-2 w-full md:w-[50%]">
                <label htmlFor="modelName" className="text-white font-semibold">
                  Model name
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <input
                    type="text"
                    name="modelName"
                    id="modelName"
                    placeholder="LTE MIFI"
                    className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[50%]">
                <label htmlFor="modelNo" className="text-white font-semibold">
                  Model number
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <Select name="modelNo">
                    <SelectTrigger className="outline-none ring-0 border-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]">
                      <SelectValue placeholder="Select model number" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#24214E] text-[#EFEFEF] border-none">
                      <SelectItem value="SMF1818">SMF1818</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
              <div className="flex flex-col gap-2 w-full md:w-[50%]">
                <label htmlFor="manufacturersName" className="text-white font-semibold">
                  Manufacturer Name
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <input
                    type="text"
                    name="manufacturersName"
                    id="manufacturersName"
                    placeholder="Huawei"
                    className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[50%]">
                <label htmlFor="network" className="text-white font-semibold">
                  Network
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <input
                    type="text"
                    name="network"
                    id="network"
                    placeholder="MTN"
                    className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
              <div className="flex flex-col gap-2 w-full md:w-[50%]">
                <label htmlFor="simType" className="text-white font-semibold">
                  SIM Type
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <input
                    type="text"
                    name="simType"
                    id="simType"
                    placeholder="E-SIM"
                    className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[50%]">
                <label
                  htmlFor="battery"
                  className="text-white font-semibold"
                >
                  Battery
                </label>
                <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                  <input
                    type="text"
                    name="battery"
                    id="battery"
                    placeholder="2000MAH"
                    className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-[35%] md:self-end">
              <button className="bg-[#7C4CFF] text-white font-bold p-4 w-full rounded-xl">
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
