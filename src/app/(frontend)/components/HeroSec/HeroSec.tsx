import type { HeroBlockType } from "@/payload-types";

export default function HeroSec({ section }: { section: HeroBlockType } ) {
  return (
    <section className = "section section-yellow" >
      <div className="container grid one-plus-two-columns large-gap">
        <div>
          <img src={section["hero-img"]} alt="" />
        </div>
        <div className="stack">
          <h1 className="section-heading">{section.title}</h1>
          <p>
            {section.description}
          </p>
      
          <a className="button m-bs-xl" href="#">{section.cta}</a>
      
        </div>
      </div>
    </section >
  )
}
