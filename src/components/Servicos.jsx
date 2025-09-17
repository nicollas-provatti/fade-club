import servico1 from "../assets/servico-1.jpg";
import servico2 from "../assets/servico-2.jpg";
import servico3 from "../assets/servico-3.jpg";
import servico4 from "../assets/servico-4.jpg";
import Section from "./Section";
import Servico from "./Servico";

export default function Servicos() {
  let servicoTexto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste nam consequatur natus temporibus quis rerum unde fugiat, quae est voluptatibus veritatis, sapiente sint delectus in illo rem, sequi esse!";

  return (
    <Section title="Serviços" descripition={servicoTexto} bgColor="e0d4c8fd">
      <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 md:px-[5%] xl:px-[10%]">
        <Servico imgUrl={servico1} title="Corte Masculino" description="Cortes modernos e clássicos adaptados ao estilo de cada cliente."/>
        <Servico imgUrl={servico2} title="Barba e Bigode" description="Design, hidratação e acabamento perfeito para valorizar seu visual."/>
        <Servico imgUrl={servico3} title="Tratamentos e Estilo" description="Hidratação, styling e cuidados com cabelo e barba para manter o look impecável."/>
        <Servico imgUrl={servico4} title="Corte Infantil" description="Cortes divertidos e confortáveis para os pequenos, com atenção especial."/>
      </div>
    </Section>
  );
}
