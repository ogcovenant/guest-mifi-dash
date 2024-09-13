import ProgressStatisticsSideBar from "@/components/shared/dashboard/main/ProgressStatisticsSideBar"

const page = () => {
  return (
    <div className="flex w-full h-full">
      <div className="bg-[#151236] w-[20%] h-full overflow-auto">
        <ProgressStatisticsSideBar />
      </div>
      <div className="w-[80%]"></div>
    </div>
  )
}

export default page