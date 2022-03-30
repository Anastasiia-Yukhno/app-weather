import { initialState } from '../index'
import {
    ADD_CITY_NAME_TO_CITY_NAME_LIST,
    ADD_CITY_TO_CITY_LIST,
    ADD_CURRENT_CITY,
    CLEAR_CITY_DATA_LIST,
} from '../actionTypes'

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY_TO_CITY_LIST:
            return {
                ...state,
                cityDataList: [...state.cityDataList, action.value],
            }
        case ADD_CURRENT_CITY:
            return { ...state, currentCity: action.value }
        case CLEAR_CITY_DATA_LIST:
            return { ...state, cityDataList: [] }
        case ADD_CITY_NAME_TO_CITY_NAME_LIST:
            return {
                ...state,
                cityNameList: [...state.cityNameList, action.value],
            }
        default:
            return { ...state }
    }
}
