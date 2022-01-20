import { CityName, Temp, Humidity, Wrapper, Card} from "./detailedWeather.styled";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {HeaderContainer} from "../../components/Header/Header.styled";
import {Header} from "../../components/Header/Header";
import {WeatherDescription, WeatherImg} from "../../components/Card/Card.styled";

export  const  DetailedWeather = (props) => {
    const location = useLocation()
    const {cityName} = location.state
    let weatherImg;

    const [data, setData] = useState('');
    useEffect(async () => {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=f6c56099f6f579964efe2d6dd54694d7`).then(function (response) {
            return response.json()
        })
            .then(function (data) {
                console.log('data', data);
                setData(data)
                window.data = data
            })
        weatherImg = `http://openweathermap.org/img/wn/` + data?.weather?.[0].icon + `@2x.png`
    }, []);
    return(
        <>
            <Header/>
            <Wrapper>
                <Card>
                    <CityName>{data?.name}</CityName>
                    <Temp>{Math.round(data?.main?.temp)}&#176;</Temp>
                    <Temp>Feels like {Math.round(data?.main?.feels_like)}&#176;</Temp>
                    <Humidity>{data?.main?.humidity}</Humidity>
                    <WeatherImg src={weatherImg}/>
                    <WeatherDescription>{data?.weather?.[0].description}</WeatherDescription>
                </Card>
            </Wrapper>
        </>
    )
}