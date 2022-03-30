import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { WeatherPage } from './pages/WeatherPage/WeatherPage'
import { DetailedWeather } from './pages/DetailedWeather/DetailedWeather'
import { store } from './state/store'
window.store = store

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WeatherPage />} />
                <Route path="/detailed" element={<DetailedWeather />} />
            </Routes>
        </Router>
    )
}

export default App
