import BooksPickSec from "./components/BooksPickSec/BooksPickSec";
import BooksSec from "./components/BooksSec/BooksSec";
import EmployeeSec from "./components/EmployeeSec/EmployeeSec";
import EventsSec from "./components/EventsSec/EventsSec";
import HeroSec from "./components/HeroSec/HeroSec";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function IndexPage() {
  const payload = await getPayload({ config });
  const homepage = await payload.findGlobal({ slug: "homepage", depth: 2 });

  return (
    <>
      {homepage.layout?.map((block) => {
        switch (block.blockType) {
          case "hero-block":
            return <HeroSec key={block.id} section={block} />;
          case "books-block":
            return <BooksSec key={block.id} section={block} />;
          case "book-picks-block":
            return <BooksPickSec key={block.id} section={block} />;
          case "employee-block":
            return <EmployeeSec key={block.id} section={block} />;
          case "event-block":
            return <EventsSec key={block.id} section={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
