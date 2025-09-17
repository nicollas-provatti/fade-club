import sobreImg from "../assets/sobre.jpg";
import Section from "./Section";
import { FaAirFreshener } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";
import { GiSofa } from "react-icons/gi";
import { SiStylelint } from "react-icons/si";
import { RiUserCommunityFill } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";

import Card from "./Card";

export default function Sobre() {
  let sobreTexto =
    "Fundada há mais de 10 anos, a Barbearia Fade Club nasceu com o propósito de unir tradição e estilo em um só lugar. Desde os primeiros cortes, nossa missão tem sido oferecer experiências únicas, com atenção aos detalhes e cuidado com cada cliente, mantendo viva a arte clássica da barbearia.";

  return (
    <Section title="Sobre" descripition={sobreTexto}>
      <div className="flex flex-col justify-center items-center gap-15  text-center lg:flex-row lg:text-left">
        <div className="text-center self-start">
          <h3 className="text-2xl font-bold mb-5 lg:text-3xl">
            Valores e Missão
          </h3>
          <div className="grid grid-cols-2 justify-items-center gap-5">
            <Card
              title="Qualidade"
              description="Utilizamos produtos e técnicas que garantem cortes e barba
                impecáveis."
            >
              <FaAirFreshener />
            </Card>

            <Card title="Tradição" description="Valorizamos a essência da barbearia clássica, preservando o
                charme dos tempos antigos.">
              <FaBusinessTime />
            </Card>

            <Card title="Conforto" description="Criamos um ambiente acolhedor e agradável, onde cada visita é um
                momento de cuidado pessoal.">
              <GiSofa />
            </Card>

            <Card title="Estilo" description="Buscamos sempre atender às tendências, respeitando o estilo
                único de cada cliente.">
              <SiStylelint />
            </Card>

            <Card title="Comunidade" description="Valorizamos o relacionamento próximo com nossos clientes, criando um espaço de conexão e amizade.">
              <RiUserCommunityFill />
            </Card>

            <Card title="Inovação" description="Estamos sempre atentos às novidades para oferecer serviços modernos sem perder a essência clássica.">
              <FaRegLightbulb />
            </Card>
          </div>
        </div>

        <div className=" max-h-140 max-w-150 overflow-hidden rounded-2xl">
          <img
            className="w-full h-full object-cover object-center"
            src={sobreImg}
            alt="Sobre"
          />
        </div>
      </div>
    </Section>
  );
}
