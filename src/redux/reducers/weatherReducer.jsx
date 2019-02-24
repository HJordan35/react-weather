import { combineReducers } from 'redux';
import * as AC from '../ActionConstants';

function currentWeather(state = {}, action) {
    switch (action.type) {
        case AC.GET_CURRENT_WEATHER_SUCCESS:
            return action.data
        default:
            return state
    }
}


function forecastWeather(state = {}, action) {
    switch (action.type) {
        case AC.GET_FORECAST_WEATHER_SUCCESS:
            return action.data
        default:
            return state
    }
}

// SELECTOR
export const getCurrentForecastDay = (state, tileNum) => {
    if(state.forecastWeather.forecastDates) {
        let currentTileDate = state.forecastWeather.forecastDates[tileNum - 1]
        let item = state.forecastWeather.weatherByDate[currentTileDate];
        return item;
    }
}

const weatherApp = combineReducers({
    currentWeather,
    forecastWeather
})

export default weatherApp;