import './App.css'
import { FavouriteProvider,  WeatherProvider } from './provider';
import Pages from './components/Pages';


function App() 
  {
    return (
      <WeatherProvider>
        <FavouriteProvider>
            <Pages/>
        </FavouriteProvider>
      </WeatherProvider>
    )
  }

export default App
