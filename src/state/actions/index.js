import {
    ADD_CITY_NAME_TO_CITY_NAME_LIST,
    ADD_CITY_TO_CITY_LIST,
    ADD_CURRENT_CITY,
    CLEAR_CITY_DATA_LIST,
} from '../actionTypes'
import { apiRequest } from '../../mock'

export const addCurrentCity = (cityData) => ({
    type: ADD_CURRENT_CITY,
    value: cityData,
})

export const getCurrentCity = (cityName) => {
    return (dispatch) => {
        fetch(apiRequest(cityName))
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                dispatch(addCurrentCity(data))
            })
    }
}
export const getCityAndAddToCityList = (cityName) => {
    return (dispatch) => {
        fetch(apiRequest(cityName))
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                dispatch(addToCityList(data))
            })
    }
}
export const addToCityList = (city) => ({
    type: ADD_CITY_TO_CITY_LIST,
    value: city,
})

export const clearCityDataList = { type: CLEAR_CITY_DATA_LIST }

export const addCityNameToCityNameList = (cityName) => ({
    type: ADD_CITY_NAME_TO_CITY_NAME_LIST,
    value: cityName,
})
