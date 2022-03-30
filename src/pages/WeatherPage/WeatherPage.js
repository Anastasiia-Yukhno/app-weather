import { useEffect, useMemo, useState } from 'react'
import { CardCity } from '../../components/Card/Card'
import {
    AddButton,
    AddNewCity,
    CardContainer,
    Container,
    InputCityName,
    Wrapper,
} from './WeatherPage.styled'
import { Header } from '../../components/Header/Header'
import { GoSearch } from 'react-icons/go'
import { apiRequest } from '../../mock'
import {
    addCityNameToCityNameList,
    clearCityDataList,
    getCityAndAddToCityList,
} from '../../state/actions'
import { useDispatch, useSelector } from 'react-redux'

export const WeatherPage = () => {
    const dispatch = useDispatch()
    const cardList = useSelector((state) => state.cityDataList)
    const [cityName, setCityName] = useState('')
    const cityNameList = useSelector((state) => state.cityNameList)
    useEffect(() => {
        dispatch(clearCityDataList)
        cityNameList.map(async (city) => {
            dispatch(getCityAndAddToCityList(city))
        })
    }, [])

    const cityInfoUpdate = async (e, cityName) => {
        e.preventDefault()
        let index = cardList.findIndex((card) => card.name === cityName)
        let newCardList = [...cardList]
        await fetch(apiRequest(cityName))
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                if (data.cod === '404') {
                    console.log(data.message)
                }
                console.log('update', data)

                newCardList[index] = data
                window.data = data
            })
            //.then(() => setCardList(newCardList))
            .catch((e) => {
                console.log('Error', e)
            })
    }

    const removeCard = (e, cityName) => {
        e.preventDefault()
        let index = cardList.findIndex((card) => card.name === cityName)
        let newCardList = [...cardList]
        newCardList.splice(index, 1)
    }

    const addNewCity = () => {
        let newCardList = [...cardList]
        if (
            newCardList.find(
                (el) => el.name.toLowerCase() === cityName.toLowerCase()
            )
        )
            return false
        dispatch(addCityNameToCityNameList(cityName))
    }

    return (
        <Wrapper>
            <Header />
            <Container>
                <AddNewCity>
                    <InputCityName
                        onChange={(e) => setCityName(e.target.value)}
                    />
                    <AddButton onClick={addNewCity}>
                        <GoSearch />
                    </AddButton>
                </AddNewCity>
                <CardContainer>
                    {cardList &&
                        cardList.map((city) => (
                            <CardCity
                                data={city}
                                removeCard={removeCard}
                                cityInfoUpdate={cityInfoUpdate}
                                key={city.name}
                            />
                        ))}
                </CardContainer>
            </Container>
        </Wrapper>
    )
}
