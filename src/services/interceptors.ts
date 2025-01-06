const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
  const response = await originalFetch(...args);

  return response;
};

export const interceptResponse = (callback: (response: Response) => unknown) => {
  const { fetch: originalFetch } = window;

  window.fetch = async (...args) => {
    const response = await originalFetch(...args);

    callback(response)

    return response;
  };
}
