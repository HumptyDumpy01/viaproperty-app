import axios from 'axios';

export async function getGeocode(lat: number, lng: number) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
  const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
    params: {
      latlng: `${lat},${lng}`,
      key: apiKey
    }
  });

  if (response.data.status === 'OK') {
    const results = response.data.results[0];
    const address = response.data.results[1].formatted_address;
    const addressComponents = results.address_components;

    const country = addressComponents.find((component: any) =>
      component.types.includes('country')
    )?.long_name;

    const city = addressComponents.find((component: any) =>
      component.types.includes('locality')
    )?.long_name;

    return { country, city, address };
  } else {
    throw new Error('Geocoding API error');
  }
}