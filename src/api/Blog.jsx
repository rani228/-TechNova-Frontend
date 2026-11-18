import { client } from "../sanity/client";

export async function getBlogs() {
  const query = `*[_type == "blog"] | order(date desc) {
    _id,
    title,
    description,
    date
  }`;
  return await client.fetch(query);
}