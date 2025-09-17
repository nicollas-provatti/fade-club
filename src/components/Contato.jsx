import InputGroup from "./InputGroup";
import Section from "./Section";

export default function Contato() {

  let contatoTexto =
    "Entre em contato conosco para agendar seu horário ou tirar dúvidas. Estamos prontos para oferecer um atendimento rápido e personalizado para você.";

  return <Section title="Contato" descripition={contatoTexto}>
    <form className="flex  flex-col gap-4 mx-[5%] bg-[#3E2C23] p-5 rounded-md lg:mx-[15%]" >
      <InputGroup label="Nome" type="text" id="nome" placeholder="Digite seu nome"/>
      <InputGroup label="Email" type="email" id="email" placeholder="Digite seu email"/>
      <InputGroup label="Mensagem" text="Digite sua mensagem"/>
      <button className="self-center bg-[#C9A227] px-6 py-3 rounded-md cursor-pointer font-bold transition-all duration-200 ease-in hover:bg-[#f9c92b]">Enviar</button>
    </form>
  </Section>
}