import { client } from "../sanity/client";

export async function getHomePage() {
  const query = `*[_type == "homePage"][0]{
    heroHeading,
    heroSubHeading,
    heroDescription,
    heroButtonText,
    whyChooseHeading,
    features[] { title, description }
  }`;
  return await client.fetch(query);
}