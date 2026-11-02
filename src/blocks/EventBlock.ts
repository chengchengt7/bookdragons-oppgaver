import { Block } from "payload";

export const EventBlock: Block = {
  slug: "event-block",
  interfaceName: "EventBlockType",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "image",
      type: "text",
      label: "Image URL",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      label: "Description",
      required: true,
    },
    {
      name: "ctaLabel",
      type: "text",
      label: "Button label",
      defaultValue: "Send oss en mail",
      required: true,
    },
    {
      name: "eventsTitle",
      type: "text",
      label: "Events heading",
      defaultValue: "Kommende arrangementer",
      required: true,
    },
    {
      name: "events",
      type: "relationship",
      relationTo: "events",
      hasMany: true,
      required: true,
    },
  ],
};
