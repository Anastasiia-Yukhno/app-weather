import { useEffect, useState } from 'react'
import { CardCity } from '../../components/Card/Card'
import {
    AddButton,
    AddNewCity,
    CardContainer,
    InputCityName,
    Wrapper,
} from './weatherPage.styled'
import { Header } from '../../components/Header/Header'
import { CityList } from '../../cityList'
import { apiRequest } from '../../mock'
import { Input } from '@mui/material'
export const WeatherPage = () => {
    const [cardList, setCardList] = useState([])
    const [cityName, setCityName] = useState('')
    window.cardList = cardList
    let newCardList = []
    useEffect(() => {
        CityList.map(async (city) => {
            await fetch(apiRequest(city))
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log('data', data)
                    newCardList.push(data)
                    window.data = data
                })
                .then(() => setCardList([...newCardList]))
        })
    }, [])

    const checkAndAdd = async () => {
        let newCardList = cardList
        if (newCardList.find((el) => el.name === cityName)) return false
        await fetch(apiRequest(cityName))
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                if (data.cod === '404') {
                    console.log(data.message)
                }
                console.log('data', data)
                newCardList.push(data)
                window.data = data
            })
            .then(() => setCardList([...newCardList]))
            .catch((e) => {
                console.log('Error', e)
            })
    }

    return (
        <Wrapper>
            <Header />
            <AddNewCity>
                <InputCityName onChange={(e) => setCityName(e.target.value)} />
                <AddButton onClick={checkAndAdd} />
            </AddNewCity>
            <CardContainer>
                {cardList &&
                    cardList.map((city) => (
                        <CardCity data={city} key={city.name} />
                    ))}
            </CardContainer>
        </Wrapper>
    )
}

