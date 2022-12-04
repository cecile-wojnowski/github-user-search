/**
 *
 * @param url URL used for API call
 * @param method Define the request method as GET, POST or PUT
 * @returns Returns array of data that can be rendered
 */
export default async function fetchData(url: string, method: string) {
  let data;
  const response = await fetch(url, { method: method });
  if (!response.ok) {
    console.log("response", response);
    console.log(response.status, response.statusText);
    const error = await response.json();
    console.log("data", data);

    if (response.status === 403) {
      data = error;
    }
  } else {
    data = await response.json();
  }

  return data;
}
