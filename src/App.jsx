
import './App.css'
import Pages from './components/pages';
import { WeatherProvider } from './provider';

function App() 
  {
    return (
      <WeatherProvider>
        <Pages/>
      </WeatherProvider>
    )
  }

export default App
