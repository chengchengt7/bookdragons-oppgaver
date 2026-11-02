import { Block } from "payload";

export const BooksBlock: Block = {
  slug: "books-block",
  interfaceName: "BooksBlockType",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
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
