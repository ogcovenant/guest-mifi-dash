import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Billings = () => {
  return (
    <div className="p-6 w-full h-full overflow-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-[#FAFAFF] font-bold text-2xl">Billings</h1>
        <div className="p-[2px] rounded-lg bg-gradient-to-tr from-[#5AC8C8] to-[#4B00C8]">
          <button className="rounded-md flex items-center text-white gap-1 bg-[#2B275D] p-2 px-5">
            <p>Edit</p>
            <HiOutlinePencilAlt />
          </button>
        </div>
      </div>
      <div className="bg-[#24214E] flex justify-evenly items-center rounded-md px-5 py-0 mt-3">
        <div className="flex flex-col gap-3 p-5">
          <p className="text-white/80">Company Name</p>
          <p className="text-white">Eko hotels and suites</p>
        </div>
        <div className="flex flex-col gap-3 border-x-[1px] border-[#3E3A80] p-5">
          <p className="text-white/80">City</p>
          <p className="text-white">Lagos</p>
        </div>
        <div className="flex flex-col gap-3 p-5">
          <p className="text-white/80">Country</p>
          <p className="text-white">Nigeria</p>
        </div>
        <div className="flex flex-col gap-3 border-x-[1px] border-[#3E3A80] p-5">
          <p className="text-white/80">Address</p>
          <p className="text-white">Adetokunbo Ademola street</p>
        </div>
        <div className="flex flex-col gap-3 p-5">
          <p className="text-white/80">Zipcode</p>
          <p className="text-white">101241</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-[#FAFAFF] font-bold text-xl">Payment details</h2>
          <button className="flex bg-[#83E5FF] text-[#19173D] items-center gap-2 rounded-md p-3">
            <p>Save</p>
            <IoMdLock />
          </button>
        </div>
        <div className="mt-5">
          <RadioGroup defaultValue="credit-card">
            <div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <label htmlFor="credit-card" className="text-white">
                  Credit Card
                </label>
              </div>
              <div className="p-3 mt-3">
                <div className="flex flex-col text-white gap-2">
                  <label htmlFor="card-owner-name">Card Owner Name</label>
                  <div className="bg-gradient-to-tr from-[#5AC8C8] to-[#4B00C8] rounded-lg p-[2px] w-full">
                    <input
                      type="text"
                      name="card-owner-name"
                      id="card-owner-name"
                      className="outline-none rounded-md p-3 bg-[#24214E] w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-white gap-2 mt-5">
                  <label htmlFor="card-number">Card Number</label>
                  <div className="bg-gradient-to-tr from-[#5AC8C8] to-[#4B00C8] rounded-lg p-[2px] w-full">
                    <input
                      type="text"
                      name="card-number"
                      id="card-number"
                      className="outline-none rounded-md p-3 bg-[#24214E] w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-5 mt-5 ">
                  <div className="flex flex-col text-white gap-2 w-[50%]">
                    <label htmlFor="expiration-date">Expiration Date</label>
                    <div className="bg-gradient-to-tr from-[#5AC8C8] to-[#4B00C8] rounded-lg p-[2px] w-full">
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        className="outline-none rounded-md p-3 bg-[#24214E] w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-white gap-2 w-[50%]">
                    <label htmlFor="security-code">Security Code</label>
                    <div className="bg-gradient-to-tr from-[#5AC8C8] to-[#4B00C8] rounded-lg p-[2px] w-full">
                      <input
                        type="text"
                        name="security-code"
                        id="security-code"
                        className="outline-none rounded-md p-3 bg-[#24214E] w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-5">
              <RadioGroupItem value="bank-transfer" id="bank-transfer" />
              <label htmlFor="bank-transfer" className="text-white">
                Bank Transfer
              </label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Billings;
