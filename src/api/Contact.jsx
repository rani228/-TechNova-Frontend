
import { client } from "../sanity/client";

const contactPageQuery = `*[_type == "contactPage"][0]{heading, intro}`;

export async function getContactPage() {
  return client.fetch(contactPageQuery);
}
