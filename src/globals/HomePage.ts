import { BookPicksBlock } from "@/blocks/BookPicksBlock";
import { BooksBlock } from "@/blocks/BooksBlock";
import { EmployeeBlock } from "@/blocks/EmployeeBlock";
import { EventBlock } from "@/blocks/EventBlock";
import { HeroBlock } from "@/blocks/HeroBlock";
import type { GlobalConfig } from "payload";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  fields: [
    {
      name: "layout",
      type: "blocks",
      blocks: [HeroBlock, BooksBlock, BookPicksBlock, EmployeeBlock, EventBlock],
    },
  ],
};
