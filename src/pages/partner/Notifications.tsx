import { UserStore } from "@/store/UserStore"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Notifications = () => {

  const userType = UserStore.useState((s) => s.type)
  const navigate = useNavigate()

  useEffect(() => {

    if(userType === "super-admin" || userType === "admin"){
      navigate("/error")
    }

  }, [])

  return (
    <div className="p-6 w-full h-full overflow-auto">
      <h1 className="text-[#FAFAFF] font-bold text-2xl">Notifications</h1>
      <div className='mt-5'>
        <p className='text-[#56C7FF] font-medium flex justify-end'>Mark all as read</p>
        <div className='mt-3 flex flex-col gap-1'>
          <div className='bg-[#2A2757] p-6 flex justify-between'>
            <div className='flex items-center gap-8'>
              <p className='bg-[#FFEFEC] h-16 w-16 rounded-full'></p>
              <div className=''>
                <p className='text-white'><span className='text-[#FFB1B1]'>Late return:</span>{" "}You are billed $10 per day for each failed returns</p>
                <p className='mt-1 border-l-8 border-[#B4B4B4] px-2 text-[#B4B4B4]'>Saturday at 9:57 AM</p>
              </div>
            </div>
            <p className='text-white mr-10'>8h</p>
          </div>
          <div className='bg-[#2A2757] p-6 flex justify-between'>
            <div className='flex items-center gap-8'>
              <p className='bg-[#FFEFEC] h-16 w-16 rounded-full'></p>
              <div className=''>
                <p className='text-white'><span className='text-[#FFB1B1]'>Late return:</span>{" "}You are billed $10 per day for each failed returns</p>
                <p className='mt-1 border-l-8 border-[#B4B4B4] px-2 text-[#B4B4B4]'>Saturday at 9:57 AM</p>
              </div>
            </div>
            <p className='text-white mr-10'>8h</p>
          </div>
          <div className='bg-[#2A2757] p-6 flex justify-between'>
            <div className='flex items-center gap-8'>
              <p className='bg-[#FFEFEC] h-16 w-16 rounded-full'></p>
              <div className=''>
                <p className='text-white'><span className='text-[#FFB1B1]'>Late return:</span>{" "}You are billed $10 per day for each failed returns</p>
                <p className='mt-1 border-l-8 border-[#B4B4B4] px-2 text-[#B4B4B4]'>Saturday at 9:57 AM</p>
              </div>
            </div>
            <p className='text-white mr-10'>8h</p>
          </div>
          <div className='bg-[#2A2757] p-6 flex justify-between'>
            <div className='flex items-center gap-8'>
              <p className='bg-[#FFEFEC] h-16 w-16 rounded-full'></p>
              <div className=''>
                <p className='text-white'><span className='text-[#FFB1B1]'>Late return:</span>{" "}You are billed $10 per day for each failed returns</p>
                <p className='mt-1 border-l-8 border-[#B4B4B4] px-2 text-[#B4B4B4]'>Saturday at 9:57 AM</p>
              </div>
            </div>
            <p className='text-white mr-10'>8h</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications;