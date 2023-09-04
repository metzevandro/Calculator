
export default function Home() {
  return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col rounded-[40px] items-center justify-center w-[350px] h-[600px] bg-black shadow-2xl">
          <div className="flex w-[85%] h-[20%] flex-row text-white justify-end items-end mb-[15px]">
            123
          </div>
          <div className="w-[85%] flex flex-col gap-5 text-white">
            <ul className="flex w-full h-full flex-row gap-[8px] text-lg">
              <li className="cursor-pointer hover:bg-gray p-[20px] text-black font-bold flex items-center justify-center w-[25%]  bg-gray_light rounded-full">AC</li>
              <li className="cursor-pointer hover:bg-gray p-[20px] text-black font-bold flex items-center justify-center w-[25%]  bg-gray_light rounded-full">%</li>
              <li className="cursor-pointer hover:bg-gray p-[20px] text-black font-bold flex items-center justify-center w-[25%]  bg-gray_light rounded-full">%</li>
              <li className="cursor-pointer p-[20px] hover:bg-orange_light text-white font-bold flex items-center justify-center w-[25%] bg-orange rounded-full">&divide;</li>
            </ul>

            <ul className="flex w-full flex-row gap-[8px] text-lg">
              <li className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%] bg-gray_Dark rounded-full p-[20px] cursor-pointer">7</li>
              <li className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%] bg-gray_Dark rounded-full p-[20px] cursor-pointer">8</li>
              <li className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%] bg-gray_Dark rounded-full p-[20px] cursor-pointer">9</li>
              <li className="text-white font-bold hover:bg-orange_light flex items-center justify-center w-[25%] bg-orange rounded-full p-[20px] cursor-pointer">✖</li>
            </ul>

            <ul className="flex w-full flex-row gap-[8px] text-lg">
              <li className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%]  bg-gray_Dark rounded-full p-[20px] cursor-pointer">4</li>
              <li className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%]  bg-gray_Dark rounded-full p-[20px] cursor-pointer">5</li>
              <li className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%]  bg-gray_Dark rounded-full p-[20px] cursor-pointer">6</li>
              <li className="text-white font-bold hover:bg-orange_light flex items-center justify-center w-[25%]  bg-orange rounded-full p-[20px] cursor-pointer">-</li>
            </ul>

            <ul className="flex w-full flex-row gap-[8px] text-lg">
              <li className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%]  bg-gray_Dark rounded-full p-[20px] cursor-pointer">1</li>
              <li className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%]  bg-gray_Dark rounded-full p-[20px] cursor-pointer">2</li>
              <li className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%]  bg-gray_Dark rounded-full p-[20px] cursor-pointer">3</li>
              <li className="text-white font-bold flex items-center justify-center w-[25%]  bg-orange rounded-full p-[20px] cursor-pointer">+</li>
            </ul>

            <ul className="flex w-full flex-row gap-[8px] text-lg">
              <li className="text-white font-bold hover:bg-gray flex items-center justify-center w-[50%] bg-gray_Dark rounded-full p-[20px] cursor-pointer">0</li>
              <li className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%] bg-gray_Dark rounded-full p-[20px] cursor-pointer">,</li>
              <li className="text-white font-bold hover:bg-orange_light flex items-center justify-center w-[25%] bg-orange rounded-full p-[20px] cursor-pointer">=</li>
            </ul>
          </div>
        </div>
      </div>
  )
}
