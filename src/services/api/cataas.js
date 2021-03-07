export async function fetchImages(num) {
  const response = await fetch(
    `https://cataas.com/api/cats?tags=cute&limit=${num}`
  );
  const data = await response.json();
  return data;
}

export async function fetchTags() {
  const response = await fetch(
    `https://cataas.com/api/tags`
  );
  const data = await response.json();
  return data;
}
