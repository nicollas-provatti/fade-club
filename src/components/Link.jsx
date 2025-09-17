export default function Link({text, cor}) {

  return (
    <li
      className={`transition-all duration-300 hover:text-${cor}`}
      style={{color: cor ? cor : undefined}}
    >
      <a href={`#${text}`}>{text}</a>
    </li>
  );
}
