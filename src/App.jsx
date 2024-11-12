
import './App.css'
import { WeatherProvider } from './provider';
import Pages from './components/Pages';

function App() 
  {
    return (
      <WeatherProvider>
        <Pages/>
      </WeatherProvider>
    )
  }

export default App
