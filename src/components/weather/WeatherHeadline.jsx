import { useContext } from "react";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/dateFormet";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const { climate, location, temperature, time } = weatherData;

  function getWeatherIcon(climate) 
  {
    switch (climate) {
      case "Rain":
        return "icons/rainy.svg";
      case "Clouds":
        return "/icons/cloud.svg";
      case "Clear":
        return "/icons/sunny.svg";
      case "Snow":
        return "/icons/snow.svg";
      case "Thunder":
        return "/icons/thunder.svg";
      case "Fog":
      case "Haze":
      case "Mist":
        return "/icons/haze.svg";
      default:
        return "/icons/sunny.svg";
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="weather icon" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {temperature}°c
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src="/pin.svg" alt="location pin" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} - {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
}
