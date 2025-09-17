import Section from "./Section";

import corte1 from "../assets/corte-1.jpg";
import corte2 from "../assets/corte-2.jpg";
import corte3 from "../assets/corte-3.jpg";
import corte4 from "../assets/corte-4.jpg";
import corte5 from "../assets/corte-5.jpg";
import corte6 from "../assets/corte-6.jpg";

export default function Galeria() {

  let galeriaTexto =
    "Confira alguns dos cortes e estilos que já transformamos em nossa barbearia. Inspirações que mostram nosso cuidado e dedicação em cada detalhe.";

  return <Section title="Galeria" descripition={galeriaTexto}>
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:px-[10%]">
      <div className="aspect-square">
        <img className="w-full h-full object-cover rounded-md" src={corte1} alt="Primeiro Corte" />
      </div>
      <div className="aspect-square">
        <img className="w-full h-full object-cover rounded-md" src={corte2} alt="Segundo Corte" />
      </div>
      <div className="aspect-square">
        <img className="w-full h-full object-cover rounded-md" src={corte3} alt="Terceiro Corte" />
      </div>
      <div className="aspect-square">
        <img className="w-full h-full object-cover rounded-md" src={corte4} alt="Quarto Corte" />
      </div>
      <div className="aspect-square">
        <img className="w-full h-full object-cover rounded-md" src={corte5} alt="Quinto Corte" />
      </div>
      <div className="aspect-square">
        <img className="w-full h-full object-cover rounded-md" src={corte6} alt="Sexto Corte" />
      </div>
    </div>
  </Section>
}