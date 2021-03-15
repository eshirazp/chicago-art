/** Elush- getArtwork takes in a url to ensure it can support other endpoints such as `/artists` and `/places` */
async function getArtwork(url: string) {
  try {
    /** Elush- all configurations are default except for the cache. Reason in the README */
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "force-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
}

export default getArtwork;
