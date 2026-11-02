import { Block } from "payload";

export const BookTokBlock: Block = {
  slug: "book-tok-block",
  interfaceName: "BookTokBlockType",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      unique: true,
    },
    {
      name: "books",
      type: "relationship",
      relationTo: "books",
      hasMany: true,
      required: true,
    },
  ],
};
