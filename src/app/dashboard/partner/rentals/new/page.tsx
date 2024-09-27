import { Checkbox } from "@/components/ui/checkbox";

const page = () => {
  return (
    <div className="p-6 w-full h-full overflow-auto">
      <h1 className="text-[#FAFAFF] font-bold text-2xl">Rentals</h1>
      <div className="mt-6">
        <form>
          <div className="flex items-center justify-between gap-8">
            <div className="flex flex-col gap-2 w-[50%]">
              <label htmlFor="guest-id" className="text-white/80">
                Guest ID
              </label>
              <div className="flex gap-6">
                <input
                  type="text"
                  name="guest-id"
                  id="guest-id"
                  className="bg-[#24214E] p-3 outline-none text-white w-[70%] rounded-lg"
                />
                <button className="bg-[#56C7FF] p-3 rounded-lg">
                  New Guest
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-[50%]">
              <label htmlFor="no-of-days" className="text-white/80">
                Number of Days
              </label>
              <input
                type="text"
                name="no-of-days"
                id="no-of-days"
                className="bg-[#24214E] p-3 outline-none text-white rounded-lg"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 mt-8">
            <div className="flex flex-col gap-2 w-[50%]">
              <label htmlFor="device-id" className="text-white/80">
                Device ID
              </label>
              <input
                type="text"
                name="device-id"
                id="device-id"
                className="bg-[#24214E] p-3 outline-none text-white rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 w-[50%]">
              <label htmlFor="room-number" className="text-white/80">
                Room number
              </label>
              <input
                type="text"
                name="room-number"
                id="room-number"
                className="bg-[#24214E] p-3 outline-none text-white rounded-lg"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-3">
            <Checkbox id="insurance" />
            <label htmlFor="insurance" className="text-[#ECECFF]/60">
              Device Insurance is charged $2/day
            </label>
          </div>
          <div className="w-full flex justify-end mt-8">
            <button className="bg-[#7C4CFF] text-white p-4 w-[40%] rounded-lg font-bold">Start Rental</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
