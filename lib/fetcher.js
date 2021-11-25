// fetch data via ajax from server with http GET method
export default async function fetcher(url) {
  // await for response from fetch
  const res = await fetch(url);

  // throw error if status code is not 200
  if (!res.ok && res.status !== 200) {
    const error = new Error('An error occurred while fetching the data.');

    // attach error status code and text to error
    error.status = res.status;
    error.statusText = res.statusText;

    // throw error
    throw error;
  }

  // return response as json
  return await res.json();
}
