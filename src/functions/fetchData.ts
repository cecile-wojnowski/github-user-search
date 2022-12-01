/**
 *
 * @param url URL used for API call
 * @param method Define the request method as GET, POST or PUT
 * @returns Returns array of data that can be rendered
 */
export default async function fetchData(url: string, method: string) {
  const response = await fetch(url, { method: method });

  const json = await response.json();

  return json;
}
