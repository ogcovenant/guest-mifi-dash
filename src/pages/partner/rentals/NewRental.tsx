import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserStore } from "@/store/UserStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewRentals = () => {
  const userType = UserStore.useState((s) => s.type);
  const navigate = useNavigate();

  const [newGuest, setNewGuest] = useState(false);

  useEffect(() => {
    if (userType === "super-admin" || userType === "admin") {
      navigate("/error");
    }
  }, []);

  return (
    <div className="p-6 w-full h-full overflow-auto">
      <h1 className="text-[#FAFAFF] font-bold text-2xl">New rental</h1>
      <div className="mt-6">
        <form>
          {newGuest && (
            <>
              <div className="flex items-center justify-between gap-8">
                <div className="flex flex-col gap-2 w-[50%]">
                  <label htmlFor="firstName" className="text-white/80">
                    First Name
                  </label>
                  <div className="flex gap-6">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="bg-[#24214E] p-3 outline-none text-white w-full rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-[50%]">
                  <label htmlFor="lastName" className="text-white/80">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="bg-[#24214E] p-3 outline-none text-white rounded-lg"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-8 mt-8">
                <div className="flex flex-col gap-2 w-[50%]">
                  <label htmlFor="email" className="text-white/80">
                    Email
                  </label>
                  <div className="flex gap-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-[#24214E] p-3 outline-none text-white w-full rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-[50%]">
                  <label htmlFor="phone" className="text-white/80">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="bg-[#24214E] p-3 outline-none text-white rounded-lg"
                  />
                </div>
              </div>
            </>
          )}
          <div className="flex items-center justify-between gap-8 mt-8">
            <div className={`${newGuest ? "hidden" : "flex"} flex-col gap-2 w-[50%]`}>
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
                <div className="bg-[#56C7FF] p-3 rounded-lg cursor-pointer" onClick={() => {
                  setNewGuest(true)
                }}>
                  New Guest
                </div>
              </div>
            </div>
            <div className={`${newGuest ? "w-full" : "w-[50%]"} flex flex-col gap-2`}>
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
          </div>
          <div className="flex items-center justify-between gap-8 mt-8">
            <div className="flex flex-col gap-2 w-[50%]">
              <label htmlFor="currency" className="text-white/80">
                Currency
              </label>
              <Select name="dataProvider" onValueChange={(e) => {}}>
                <SelectTrigger className="outline-none ring-0 border-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]">
                  <SelectValue placeholder="Select payment currency" />
                </SelectTrigger>
                <SelectContent className="bg-[#24214E] text-[#EFEFEF] border-none">
                  <SelectItem key={1} value={"USD"}>
                    US Dollar
                  </SelectItem>
                  <SelectItem key={2} value={"NGN"}>
                    Naira
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 w-[50%]">
              <label htmlFor="paymentMethod" className="text-white/80">
                Payment Method
              </label>
              <Select name="dataProvider" onValueChange={(e) => {}}>
                <SelectTrigger className="outline-none ring-0 border-none p-5 rounded-xl w-full bg-[#24214E] text-[#EFEFEF]">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent className="bg-[#24214E] text-[#EFEFEF] border-none">
                  <SelectItem key={1} value={"card"}>
                    Card
                  </SelectItem>
                  <SelectItem key={2} value={"transfer"}>
                    Transfer
                  </SelectItem>
                  <SelectItem key={3} value={"paystack"}>
                    Paystack
                  </SelectItem>
                  <SelectItem key={4} value={"wallet"}>
                    Wallet
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-3">
            <Checkbox id="insurance" />
            <label htmlFor="insurance" className="text-[#ECECFF]/60">
              Device Insurance is charged $2/day
            </label>
          </div>
          <div className="w-full flex justify-end mt-8">
            <button
              className="bg-[#7C4CFF] text-white p-4 w-[40%] rounded-lg font-bold"
              type="submit"
            >
              New Rental
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRentals;
