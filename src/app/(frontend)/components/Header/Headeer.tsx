import type { Header as HeaderData } from "@/payload-types";

export default function Header({ header }: { header: HeaderData }) {
  return (
    <header className="site-header">
        <a href="/" className="logo">{header.siteName}</a>
        <nav>
          {header.links?.map((link) => (
            <a key={link.id ?? link.url} href={link.url}>{link.label}</a>
          ))}
        </nav>
    </header>
  )
}
