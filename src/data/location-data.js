
async function getLocationByName(locationName) 
{
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&appid=${apiKey}`);
  const data = await res.json();
  if (!location) return null;

  try {
      if (data.length > 0) 
        {
          return data;
        } 
      else 
        {
            return {
                location: "",
                latitude: 0,
                longitude: 0,
            };
        }
  } 
  catch (error) {
      console.error("Error fetching location data:", error);
      return {
          location: "",
          latitude: 0,
          longitude: 0,
      };
  }
}

export { getLocationByName };
