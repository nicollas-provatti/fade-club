import { FaStar } from "react-icons/fa";

export default function Depoimento({imgUrl, name, feedback}) {
  return (
    <div className="flex flex-col items-center gap-4 bg-white/70 p-5 py-10 rounded-md mx-[10%] lg:mx-[15%]">
      <div className="aspect-square w-80 h-80 rounded-full overflow-hidden border-4 border-transparent outline-4 outline-[#3E2C23]">
        <img className="w-full h-full object-cover object-top" src={imgUrl} alt="" />
      </div>
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-lg text-stone-700 text-center">"{feedback}"</p>
      <div className="flex gap-2 text-[#cea008] text-xl">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  )
}