import { client } from "../sanity/client";

export async function getServicesPage() {
  const query = `*[_type == "servicesPage"][0]{
    heading,
    subHeading,
    services[] { title, description, icon }
  }`;
  return await client.fetch(query);
}