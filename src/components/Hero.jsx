import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="Home"
      className="relative flex flex-col justify-center items-center text-white text-center h-[calc(100vh-96px)] bg-cover bg-center bg-no-repeat scroll-mt-[96px]"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <h2 className="text-6xl font-bold mb-10">Cortes que combinam com você!</h2>
        <button className="bg-[#C9A227] hover:bg-[#b89523] text-white font-bold py-3 px-6 rounded-md transition cursor-pointer">
          Agende seu horário
        </button>
      </div>
    </section>
  );
}
