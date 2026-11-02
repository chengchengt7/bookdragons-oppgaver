import { Block } from "payload";

export const SalesBlock: Block = {
  slug: "sales-block",
  interfaceName: "SalesBlockType",
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
