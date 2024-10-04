// import wifiSymbol from "@/assets/wifi-symbol-transparent.png"

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center p-8">
      <div className="flex items-center justify-center">
        <p className="text-7xl font-bold text-[#2B275D]">4</p>
        {/* <img src={wifiSymbol} alt="Wifi Illustration" className="w-52"/> */}
        <p className="text-7xl font-bold text-[#2B275D]">0</p>
        <p className="text-7xl font-bold text-[#2B275D]">4</p>
      </div>
      <p className="text-center">Ooops, looks like the page you are trying to access does not exists</p>
    </div>
  )
}

export default ErrorPage