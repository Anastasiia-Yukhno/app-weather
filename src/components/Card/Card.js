import {
    CityName,
    WeatherImg,
    WeatherDescription,
    Card,
    CardItem,
    Temp,
    Weather,
    UpdateButton,
    CardFooter,
    CardHeader,
    RemoveButton,
} from './Card.styled'
import { Link } from 'react-router-dom'
import { FaTemperatureHigh } from 'react-icons/fa'
import { GrUpdate } from 'react-icons/gr'
import { TiDeleteOutline } from 'react-icons/ti'

export const CardCity = ({ data, cityInfoUpdate, removeCard }) => {
    const weatherImg =
        `http://openweathermap.org/img/wn/` +
        data?.weather?.[0].icon +
        `@2x.png`

    return (
        <CardItem>
            <Card>
                <Link
                    to="detailed"
                    state={{ cityName: data?.name }}
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <CardHeader>
                        <CityName>{data?.name}</CityName>
                        <RemoveButton onClick={(e) => removeCard(e, data.name)}>
                            <TiDeleteOutline />
                        </RemoveButton>
                    </CardHeader>

                    <Weather>
                        <WeatherImg src={weatherImg} />
                        <WeatherDescription>
                            {data?.weather?.[0].description}
                        </WeatherDescription>
                    </Weather>
                    <CardFooter>
                        <Temp>
                            <FaTemperatureHigh />
                            {Math.round(data?.main?.temp)}&#176;
                        </Temp>
                        <UpdateButton
                            onClick={(e) => cityInfoUpdate(e, data.name)}
                        >
                            <GrUpdate />
                        </UpdateButton>
                    </CardFooter>
                </Link>
            </Card>
        </CardItem>
    )
}
