import Link from "./Link";

export default function NavMenu({ navStyle, ulStyle, aColor }) {
  return (
    <nav className={navStyle}>
      <ul className={ulStyle}>
        <Link text="Home" cor={aColor}/>
        <Link text="Sobre" cor={aColor}/>
        <Link text="Serviços" cor={aColor}/>
        <Link text="Galeria" cor={aColor}/>
        <Link text="Depoimentos" cor={aColor}/>
        <Link text="Contato" cor={aColor}/>
      </ul>
    </nav>
  );
}
