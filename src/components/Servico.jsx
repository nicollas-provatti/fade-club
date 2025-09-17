export default function Servico({imgUrl, title, description}) {
  return (
    <div className="flex flex-col gap-4 text-center aspect-square bg-[#1A1A1A] shadow-md p-3 rounded-md text-white">
      <img className="w-full h-full object-cover rounded-md" src={imgUrl} alt="Corte Masculino" />
      <h3 className="text-2xl text-[#C9A227] font-bold">{title}</h3>
      <p className="text-stone-300 italic">{description}</p>
      <button className="bg-[#C9A227] font-bold text-black self-center px-6 py-2 rounded-md cursor-pointer transition-all duration-300 ease-in hover:bg-[#f9c92b]">Agendar</button>
    </div>
  )
}