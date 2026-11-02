import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
        <a href="#" className="logo">BookDragons</a>
        <nav>
          <a href="#">Om oss</a>
          <a href="#">Salg!</a>
          <a href="#">Logg inn</a>
        </nav>
    </header>
  )
}