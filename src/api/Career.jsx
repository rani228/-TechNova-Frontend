import { client } from "../sanity/client";

export async function getJobs() {
  const query = `*[_type == "career"] {
    _id,
    title,
    type,
    location
  }`;
  return await client.fetch(query);
}