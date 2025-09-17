export default function Card({ title, description, children }) {
  return (
    <div className="flex flex-col items-center gap-2 max-w-[400px] bg-[#3E2C23] text-[#f0f0f0] p-5 rounded-2xl">
      <div className="flex items-center gap-4 text-lg text-[#C9A227] font-bold uppercase lg:text-xl">
        <h4>{title}</h4>
        {children}
      </div>
      <p className="text-stone-300">
        {description}
      </p>
    </div>
  );
}
