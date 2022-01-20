import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import { WeatherPage } from './pages/weather/WeatherPage';
import {DetailedWeather} from "./pages/detailedWeather/detailedWeather";

function App() {
  return (
      <Router>
          <Routes>
              <Route
                  path="/"
                  element={<WeatherPage/>}
              />
              <Route
                  path="/detailed"
                  element={<DetailedWeather/>}
              />
          </Routes>

      </Router>

  );
}

export default App;
