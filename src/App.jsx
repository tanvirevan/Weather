import './App.css'
import { FavouriteProvider,  LocationProvider,  WeatherProvider } from './provider';
import Pages from './components/Pages';


function App() 
  {
    return (
      <LocationProvider>
        <WeatherProvider>
          <FavouriteProvider>
            <Pages/>
          </FavouriteProvider>
        </WeatherProvider>
      </LocationProvider>
    )
  }

export default App
