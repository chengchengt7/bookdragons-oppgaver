import { Block } from "payload";

export const BookPicksBlock: Block = {
  slug: "book-picks-block",
  interfaceName: "BookPicksBlockType",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Section title",
      defaultValue: "Hva de ansatte leser akkurat nå",
      required: true,
    },
    {
      name: "picks",
      type: "array",
      label: "Book picks",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "title",
          type: "text",
          label: "Recommendation title",
          required: true,
        },
        {
          name: "introduction",
          type: "richText",
          label: "Introduction",
          required: true,
        },
        {
          name: "quote",
          type: "textarea",
          label: "Quote",
          required: true,
        },
        {
          name: "review",
          type: "richText",
          label: "Review",
          required: true,
        },
        {
          name: "book",
          type: "relationship",
          relationTo: "books",
          required: true,
        },
      ],
    },
  ],
};
