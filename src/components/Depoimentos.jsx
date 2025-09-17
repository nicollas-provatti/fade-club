import Depoimento from "./Depoimento";
import Section from "./Section";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import cliente1 from "../assets/cliente01.jpg";
import cliente2 from "../assets/cliente02.jpg";
import cliente3 from "../assets/cliente03.jpg";
import cliente4 from "../assets/cliente04.jpg";

export default function Depoimentos() {
  let depoimentosTexto =
    "Veja o que nossos clientes têm a dizer sobre a experiência na nossa barbearia. Histórias reais que refletem cuidado, estilo e satisfação.";

  return (
    <Section
      title="Depoimentos"
      descripition={depoimentosTexto}
      bgColor="e0d4c8fd"
    >
      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <Depoimento
            imgUrl={cliente1}
            name="João Silva"
            feedback="Excelente atendimento! Meu corte ficou perfeito."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Depoimento
            imgUrl={cliente2}
            name="Lucas Pereira"
            feedback="Sempre que venho à barbearia, saio com um corte impecável e um atendimento incrível. Recomendo demais!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Depoimento
            imgUrl={cliente3}
            name="Carlos Henrique"
            feedback="Serviço de primeira, barbearia com tradição e estilo. Cada visita é uma experiência única."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Depoimento
            imgUrl={cliente4}
            name="Jorge Amado"
            feedback="O ambiente é super acolhedor e os profissionais são muito atentos aos detalhes. Adoro meu corte!"
          />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
}
