import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NewPartner = () => {
  return (
    <div className="p-6 h-full w-full overflow-auto">
      <h1 className="text-[#FAFAFF] font-bold text-2xl">New Partner</h1>
      <div className="mt-8">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label htmlFor="fullName" className="text-white font-semibold">
                Full Name
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Eko hotels & suites"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label htmlFor="distType" className="text-white font-semibold">
                Distributor type
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <Select name="distType">
                  <SelectTrigger className="outline-none ring-0 border-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]">
                    <SelectValue placeholder="Select distributor type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#24214E] text-[#EFEFEF] border-none">
                    <SelectItem value="Hotel">Hotel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label htmlFor="address" className="text-white font-semibold">
                Address
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="No. 3, Example Street"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label htmlFor="email" className="text-white font-semibold">
                Email
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ekohotelandsuites@eko.com"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label htmlFor="phoneNo" className="text-white font-semibold">
                Phone number
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="text"
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="09086752541"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label
                htmlFor="pickLocation"
                className="text-white font-semibold"
              >
                Pick Location
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="text"
                  name="pickLocation"
                  id="pickLocation"
                  placeholder="Adekunbi Adelodun street, V.I"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label
                htmlFor="contactPerson"
                className="text-white font-semibold"
              >
                Contact person
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="text"
                  name="contactPerson"
                  id="contactPerson"
                  placeholder="Funmi Manchester"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label
                htmlFor="noOfAssignedDevices"
                className="text-white font-semibold"
              >
                Number of devices assigned
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="number"
                  name="noOfAssignedDevices"
                  id="noOfAssignedDevices"
                  placeholder="136"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label
                htmlFor="operatorName"
                className="text-white font-semibold"
              >
                Operator name
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="text"
                  name="operatorName"
                  id="operatorName"
                  placeholder="John Merach"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label
                htmlFor="operatorRole"
                className="text-white font-semibold"
              >
                Operator role
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <Select name="operatorRole">
                  <SelectTrigger className="outline-none ring-0 border-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]">
                    <SelectValue placeholder="Select operator role" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#24214E] text-[#EFEFEF] border-none">
                    <SelectItem value="Customer care representative">
                      Customer care representative
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label
                htmlFor="operatorPhoneNo"
                className="text-white font-semibold"
              >
                Operator phone number
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="text"
                  name="operatorPhoneNo"
                  id="operatorPhoneNo"
                  placeholder="09078912487"
                  className="outline-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[50%]">
              <label
                htmlFor="operatorEmail"
                className="text-white font-semibold"
              >
                Operator email
              </label>
              <div className="p-[1px] focus:bg-gradient-to-r from-[#5AC8C8] to-[#4B00C8] rounded-xl flex justify-center">
                <input
                  type="email"
                  name="operatorEmail"
                  id="operatorEmail"
                  placeholder="johnmerach@gmail.com"
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
  );
};

export default NewPartner;
