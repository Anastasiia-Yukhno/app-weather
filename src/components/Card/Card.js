import {useEffect, useState} from "react";
import {CityName, WeatherImg, WeatherDescription, Card, CardItem, Pressure, Temp, Humidity, Weather} from "./Card.styled";
import {Link} from "react-router-dom";
import {DetailedWeather} from "../../pages/detailedWeather/detailedWeather";
export const CardCity = ({data}) => {
    const weatherImg = `http://openweathermap.org/img/wn/` + data?.weather?.[0].icon + `@2x.png`

    return (
        <CardItem>
            <Card>
                <Link to='detailed'
                      state={{cityName:data?.name}}
                      style={{textDecoration: 'none', color: "black"}} >
                    <CityName>{data?.name}</CityName>
                    <Temp>{Math.round(data?.main?.temp)}&#176;</Temp>
                    <Weather>
                        <WeatherImg src={weatherImg}/>
                        <WeatherDescription>{data?.weather?.[0].description}</WeatherDescription>
                    </Weather>
                </Link>
            </Card>
        </CardItem>
    );
};
