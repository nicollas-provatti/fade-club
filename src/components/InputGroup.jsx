export default function InputGroup({label, text, ...props}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label.toLowerCase()} className="font-bold text-white/80">{label}</label>
      {text ? (
        <textarea id={label.toLowerCase()} placeholder={text} rows="10" className="p-2 border-1 border-[#3E2C23] rounded-sm resize-none outline-none bg-white/90 lg:h-70"></textarea>
      ) : (
        <input {...props} className="p-2 border-1 border-[#3E2C23] outline-none rounded-sm bg-white/90 lg:h-15" />
      )}
    </div>
  )
}