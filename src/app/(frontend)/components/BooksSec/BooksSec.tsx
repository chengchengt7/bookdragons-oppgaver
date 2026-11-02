import BookCard from "../BookCard/BookCard";
import type { BooksBlockType } from "@/payload-types";

type BooksSecProps = {
  section: BooksBlockType;
};

export default function BooksSec({ section }: BooksSecProps) {
  return (
    <section className="m-b-xl stack stack-large">
      <h2 className="section-heading">{section.title}</h2>
      <div className="reel">
        {section.books.map((book) => (
          typeof book !== "number" && <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
