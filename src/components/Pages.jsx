import Header from "./Header";
import WeatherBord from "./weather/WeatherBord";

export default function Pages()
 {
   return (
      <div className="bg-body font-[Roboto] text-light bg-[url('/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
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
   );
 };
