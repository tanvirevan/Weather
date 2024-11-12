import { useEffect, useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: ""
  });
  const [loading, setLoading] = useState({
    state: false,
    message: ""
  });
  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    
    if (!apiKey) {
      setError(new Error("API key is missing."));
      return;
    }

    try {
      setLoading({ state: true, message: "Fetching weather data..." });
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`Fetching weather data failed: ${response.status}`);
      }

      const data = await response.json();

      setWeatherData({
        // ...weatherData,
        location: data?.name || "Unknown location",
        climate: data?.weather[0]?.main || "Unknown",
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude,
        latitude
      });
    } 
    catch (err) {
      console.error("Error fetching weather data:", err);
      setError(err);
    } 
    finally {
        setLoading({
            // ...loading,
            state: false,
            message: "",
        });
    }
  };

  
  useEffect(() => {
    setLoading({
      // ...loading,
      state: true,
      message: "Finding location...",
    });

    navigator.geolocation.getCurrentPosition(function(position){
      fetchWeatherData(position.coords.latitude, position.coords.longitude);

    })

  }, []);
  
  console.log(weatherData);
  return { weatherData, error, loading };
};

export default useWeather;
