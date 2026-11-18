import { client } from "../sanity/client";

export async function getAboutPage() {
  const query = `*[_type == "aboutPage"][0]{
    heading,
    description,
    cards[] { title, description }
  }`;
  return await client.fetch(query);
}