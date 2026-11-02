import { BookPicksBlock } from "@/blocks/BookPicksBlock";
import { BooksBlock } from "@/blocks/BooksBlock";
import { BookTokBlock } from "@/blocks/BookTokBlock";
import { EmployeeBlock } from "@/blocks/EmployeeBlock";
import { EventBlock } from "@/blocks/EventBlock";
import { HeroBlock } from "@/blocks/HeroBlock";
import { SalesBlock } from "@/blocks/SalesBlock";
import type { GlobalConfig } from "payload";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  fields: [
    {
      name: "layout",
      type: "blocks",
      blocks: [HeroBlock, BooksBlock, BookPicksBlock, BookTokBlock, SalesBlock, EmployeeBlock, EventBlock],
    },
  ],
};
