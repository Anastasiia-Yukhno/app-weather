import {
    CityName,
    Temp,
    Humidity,
    Wrapper,
    Card,
} from './DetailedWeather.styled'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import {
    WeatherDescription,
    WeatherImg,
} from '../../components/Card/Card.styled'
import { getCurrentCity } from '../../state/actions'
import { useDispatch, useSelector } from 'react-redux'

export const DetailedWeather = (props) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { cityName } = location.state
    let data = useSelector((state) => state.currentCity)
    let weatherImg

    data
        ? (weatherImg =
              `http://openweathermap.org/img/wn/` +
              data?.weather?.[0].icon +
              `@2x.png`)
        : (weatherImg = undefined)
    useEffect(() => {
        dispatch(getCurrentCity(cityName))
    }, [])
    return (
        <>
            <Header />
            <Wrapper>
                <Card>
                    <CityName>{data?.name}</CityName>
                    <Temp>{Math.round(data?.main?.temp)}&#176;</Temp>
                    <Temp>
                        Feels like {Math.round(data?.main?.feels_like)}&#176;
                    </Temp>
                    <Humidity>{data?.main?.humidity}</Humidity>
                    <WeatherImg src={weatherImg} />
                    <WeatherDescription>
                        {data?.weather?.[0].description}
                    </WeatherDescription>
                </Card>
            </Wrapper>
        </>
    )
}
