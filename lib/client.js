import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  apiVersion: "2023-01-17",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_KEY,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source).url();
