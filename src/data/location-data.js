async function getLocationByName(locationName) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  
  try {
      const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&appid=${apiKey}`);
      const data = await res.json();

      // Return the location object if data is available
      if (data.length > 0) {
          return {
              location: data[0].name || "",
              latitude: data[0].lat || 0,
              longitude: data[0].lon || 0,
          };
      }
  } catch (error) {
      console.error("Error fetching location data:", error);
  }

  // Return a consistent object format when no data is fetched or an error occurs
  return {
      location: "",
      latitude: 0,
      longitude: 0,
  };
}

export { getLocationByName };
