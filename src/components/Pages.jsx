import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import WeatherBord from "./weather/WeatherBord";
import { WeatherContext } from "../context";

export default function Pages()
 {
   const {weatherData, loading} = useContext(WeatherContext);
   const [climateImage, setClimateImage] = useState("");

   function getBackgrouondImage(climate) 
   {
     switch (climate) {
       case "Rain":
         return "/backgrounds/rainy-day.jpg";
       case "Clouds":
         return "/backgrounds/scattered-clouds.jpg";
       case "Clear":
         return "/backgrounds/clear-sky.jpg";
       case "Snow":
         return "/backgrounds/snow.jpg";
       case "Thunder":
         return "/backgrounds/thunderstorm.jpg";
       case "Fog":
         return "/backgrounds/winter.jpg"
       case "Haze":
         return "/backgrounds/few-clouds.jpg"
       case "Mist":
         return "/backgrounds/mist.jpg";
       default:
         return "/backgrounds/clear-sky.jpg";
     }
   }

   useEffect(() => 
    {
      const bgImage = getBackgrouondImage(weatherData.climate);
      setClimateImage(bgImage);
    },[weatherData.climate])
   return (
    <>
      {
        loading.state ? (
          <div>
              <p>
                {loading.message}
              </p>
          </div>
        ):(
        <div style={{backgroundImage: `url('${climateImage}')`}}
         className="bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid place-items-center">
          {/* Begin header */}
            <Header/>
          {/* End Header */}

          {/* Begin Main  */}
            <main>

              {/* Begin Wheather */}
                <WeatherBord/>
              {/* End Wheather */}

            </main>
          {/* End Main */}
        </div>
        )
      }
    </>
   );
 };
