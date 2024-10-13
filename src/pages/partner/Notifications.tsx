import { UserStore } from "@/store/UserStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import toast, { Toaster } from "react-hot-toast";
import { AxiosError } from "axios";

const Notifications = () => {
  const userType = UserStore.useState((s) => s.type);
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (userType === "super-admin" || userType === "admin") {
      navigate("/error");
    }
  }, []);

  const markAsRead = async () => {
    try {
      const res = await api.post("/notifications");

      if (res.status === 200) {
        toast.success("Notifications read successfully");
      }
    } catch (err) {
      toast.error("Error marking notifications as read");
    }
  };

  const fetchData = async () => {
    try {
      const res = await api.get("/notifications");

      if (res.status === 200) {
        setNotifications(res.data.data);
      }
    } catch (err) {
      const error = err as AxiosError;

      console.log(error);

      toast.error("Could not fetch notifications");
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 w-full h-full overflow-auto">
      <Toaster />
      <h1 className="text-[#FAFAFF] font-bold text-2xl">Notifications</h1>
      <div className="mt-5">
        <p
          className="text-[#56C7FF] font-medium flex justify-end"
          onClick={() => markAsRead()}
        >
          Mark all as read
        </p>
        <div className="mt-3 flex flex-col gap-1">
          {/* <div className='bg-[#2A2757] p-6 flex justify-between'>
            <div className='flex items-center gap-8'>
              <div className=''>
                <p className='text-white'><span className='text-[#FFB1B1]'>Late return:</span>{" "}You are billed $10 per day for each failed returns</p>
                <p className='mt-1 border-l-8 border-[#B4B4B4] px-2 text-[#B4B4B4]'>Saturday at 9:57 AM</p>
              </div>
            </div>
            <p className='text-white mr-10'>8h</p>
          </div>
          <div className='bg-[#2A2757] p-6 flex justify-between'>
            <div className='flex items-center gap-8'>
              <div className=''>
                <p className='text-white'><span className='text-[#FFB1B1]'>Late return:</span>{" "}You are billed $10 per day for each failed returns</p>
                <p className='mt-1 border-l-8 border-[#B4B4B4] px-2 text-[#B4B4B4]'>Saturday at 9:57 AM</p>
              </div>
            </div>
            <p className='text-white mr-10'>8h</p>
          </div>
          <div className='bg-[#2A2757] p-6 flex justify-between'>
            <div className='flex items-center gap-8'>
              <div className=''>
                <p className='text-white'><span className='text-[#FFB1B1]'>Late return:</span>{" "}You are billed $10 per day for each failed returns</p>
                <p className='mt-1 border-l-8 border-[#B4B4B4] px-2 text-[#B4B4B4]'>Saturday at 9:57 AM</p>
              </div>
            </div>
            <p className='text-white mr-10'>8h</p>
          </div> */}
          {notifications ? (
            <>
              {notifications.map((notification) => (
                <div className="bg-[#2A2757] p-6 flex justify-between">
                  <div className="flex items-center gap-8">
                    <div className="">
                      <p className="text-white">
                        {/* <span className="text-[#FFB1B1]">Late return:</span> You are
                    billed $10 per day for each failed returns */}
                        {notification}
                      </p>
                      {/* <p className="mt-1 border-l-8 border-[#B4B4B4] px-2 text-[#B4B4B4]">
                    Saturday at 9:57 AM
                  </p> */}
                    </div>
                  </div>
                  <p className="text-white mr-10">8h</p>
                </div>
              ))}
            </>
          ) : (
            <div className="text-white flex justify-center mt-10">You don't have any unread notifications</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
