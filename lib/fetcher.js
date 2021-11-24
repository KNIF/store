const fetcher = async (url) => {
  const res = await fetch(url);

  // Throw error if status code is not 200
  if (!res.ok && res.status !== 200) {
    const error = new Error('An error occurred while fetching the data.');
    error.status = res.status;
    error.statusText = res.statusText;
    throw error;
  }

  return await res.json();
};

export default fetcher;
