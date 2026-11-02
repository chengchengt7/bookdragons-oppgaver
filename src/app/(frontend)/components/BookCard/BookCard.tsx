import "./BookCard.css";

export default function BookCard() {
  return (
    <article className="box box-light-gray book-card">
      <img className="book-card-cover" src="https://www.norli.no/cdn/1791378057/Produktbilder/Bokbasen/9788202943646.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover" alt="" width="160" height="200" />

      <div className="stack">
        <h3 className="eyebrow-heading book-card-title">
          <a href="#">Bakeskolen</a>
        </h3>

        <p className="book-card-author">
          Skrevet av Wenche Andersen
        </p>

        <p className="book-card-tags cluster">
          <span className="tag">Kokebok</span>
          <span className="tag">Baking</span>
          <span className="tag">Matlaging</span>
        </p>
      </div>
      
      <a className="button block-button" href="#">Kjøp (399,-)</a>
    </article>

  )
}