import { CollectionConfig, slugField } from "payload";

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Name",
      required: true,
    },
    slugField(),
    {
      name: "date",
      type: "date",
      label: "Event date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
      required: true,
    },
    {
      name: "detail",
      type: "textarea",
      label: "Event Detail",
      required: true,
    },
    {
      name: "period",
      type: "text",
      label: "Period",
      required: true,
    },
    {
      name: "price",
      type: "number",
      label: "Price",
      required: true,
    },
  ],
};
