import BookCard from "../BookCard/BookCard";

export default function BookShelf() {
  return (
    <section className="m-b-xl stack stack-large">
      <h2 className="section-heading">Lagertømming!</h2>
      <div className="reel">
        <BookCard/>
      </div>
    </section>
  )
}