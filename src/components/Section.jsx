export default function Section({title, descripition, bgColor, children,}) {


  return <section id={title} className="px-6 p-12 scroll-mt-[96px]" style={{backgroundColor: bgColor ? `#${bgColor}` : undefined}}>
    <div className="text-center max-w-250 mx-auto mb-12">
        <h2 className="text-3xl font-bold text-[#1A1A1A] lg:text-5xl">{title}</h2>
        <div className="h-1 bg-[#C9A227] w-16 m-auto mt-2 mb-4"></div>
        <p className="lg:text-xl">{descripition}</p>
    </div>
    {children}
  </section>
}