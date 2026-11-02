import { RichText } from "@payloadcms/richtext-lexical/react";
import type { BookPicksBlockType } from "@/payload-types";
import BookCard from "../BookCard/BookCard";

type BooksPickSecProps = {
  section: BookPicksBlockType;
};

export default function BooksPickSec({ section }: BooksPickSecProps) {
  return (
    <section className="m-b-xl stack stack-large">
      <h2 className="section-heading">{section.title}</h2>
      <div className="section section-yellow">
        {section.picks.map((pick, index) => (
          <div
            key={pick.id ?? index}
            className={`container grid large-gap recommendation-section ${
              index % 2 === 0
                ? "two-plus-one-columns product-on-right"
                : "one-plus-two-columns product-on-left"
            }`}
          >
            <div className="recommendation-section-text stack">
              <h3 className="section-subheading">{pick.title}</h3>
              <RichText data={pick.introduction} />
              <blockquote className="big-quote">{pick.quote}</blockquote>
              <RichText data={pick.review} />
            </div>
            {typeof pick.book !== "number" && (
              <BookCard
                book={pick.book}
                className="recommendation-section-product box box-white book-card"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
