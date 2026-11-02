import type { Book } from "@/payload-types";

type BookCardProps = {
  book: Book;
  className?: string;
};

export default function BookCard({ book, className = "box box-light-gray book-card" }: BookCardProps) {
  return (
    <article className={className}>
      <img className="book-card-cover" src={book.thumbnail} alt="" width="160" height="200" />

      <div className="stack">
        <h3 className="eyebrow-heading book-card-title">
          <a href="#">{book.title}</a>
        </h3>

        <p className="book-card-author">
          Skrevet av {book.author}
        </p>

        <p className="book-card-tags cluster">
          {book.tag.map((tag) => (
            typeof tag !== "number" && (
              <span key={tag.id} className="tag">{tag.title}</span>
            )
          ))}
        </p>
      </div>
      
      <a className="button block-button" href="#">Kjøp ({book.price},-)</a>
    </article>

  )
}