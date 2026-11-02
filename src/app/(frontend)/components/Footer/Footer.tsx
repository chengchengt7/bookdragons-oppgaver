import type { Footer as FooterData } from "@/payload-types";

export default function Footer({ footer }: { footer: FooterData }) {
  return (
    <footer className="site-footer">
      <p>{footer.copyightName}</p>
      <p>{footer.text}</p>
    </footer>
  )
}
