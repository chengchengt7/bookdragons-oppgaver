import BookPick from "../BookPick/BookPick";

export default function BookPickSec() {
  return (
    <section className="m-b-xl stack stack-large">
          <h2 className="section-heading">Hva de ansatte leser akkurat nå</h2>
          <article className="section section-yellow">

            
            <BookPick/>  

            <div className="container grid one-plus-two-columns large-gap recommendation-section product-on-left">
              <div className="recommendation-section-text stack">
                <h3 className="section-subheading">Månedens lydbok for Christian er skrevet av Adam Kay</h3>

                <p>
                  Jeg har alltid vært glad i dagbokformatet i bøker helt siden jeg leste Berts Dagbok som gutt, og denne boken skuffer absolutt ikke, selv som lydbok! Jeg har lyttet til den i noen uker når jeg har funnet en ledig stund, og det er en slik bok som er lett å plukke opp når jeg har ti minutter ledig her og der.
                </p>
                
                <blockquote className="big-quote">
                  Du kommer til å le, gråte, og le så du gråter i en salig røre. Anbefales varmt!
                </blockquote>

                <p>
                  Boken er ikke for pyser — scener, lyder, lukter og syn er ofte overdrevent beskrevet, og du kommer til å ha en helt annen respekt for helsevesenet når du er ferdig med Adam Kays fortelling. Stor kudos for en fortelling med stort spenn i innhold, du kommer til å le, gråte, og le så du gråter om hverandre!
                </p>
              </div>
              <div className="recommendation-section-product box box-white book-card">
                <img className="book-card-cover" src="https://www.norli.no/cdn/1762431004/Produktbilder/FS/Book/Bonnier%20Norsk%20Forlag%20AS/9788284192369.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover" alt="" width="160" height="200" />

                <div className="stack">
                  <h3 className="eyebrow-heading book-card-title">
                    <a href="#">Dette kommer til å gjøre vondt</a>
                  </h3>

                  <p className="book-card-author">
                    Skrevet av Adam Kay
                  </p>

                  <p className="book-card-tags cluster">
                    <span className="tag">Humor</span>
                    <span className="tag">Helsevesenet</span>
                    <span className="tag">Drama</span>
                    <span className="tag">Dagbok</span>
                    <span className="tag">Lydbok</span>
                  </p>
                </div>
                
                <a className="button block-button" href="#">Kjøp (299,-)</a>
              </div>
            </div>
          </article>
        </section>




  )
}
