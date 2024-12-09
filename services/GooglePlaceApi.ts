export const GetPhotoRef = async (location: string) => {
  const resp = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY}`
  );

  const result = await resp.json();
  return result?.results[0]?.photos[0]?.photo_reference;
};
