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
export const getFahrenheit = state => {
    if(state.currentWeather.main) {
        return Math.round(state.currentWeather.main.temp * (9/5) - 459.67);
    }
} 
export const getCelsius = state => {
    if(state.currentWeather.main) {
        return Math.round(state.currentWeather.main.temp - 273.15);
    }
}

export const getCurrentFahrenheitByForecastDay = (state, tileNum) => {
    if(state.forecastWeather.forecastDates) {
        let currentTileDate = state.forecastWeather.forecastDates[tileNum - 1]
        let item = state.forecastWeather.weatherByDate[currentTileDate];
        return Math.round(item.temp * (9/5) - 459.67);
    }
}

export const getCurrentCelsiusByForecastDay = (state, tileNum) => {
    if(state.forecastWeather.forecastDates) {
        let currentTileDate = state.forecastWeather.forecastDates[tileNum - 1]
        let item = state.forecastWeather.weatherByDate[currentTileDate];
        return Math.round(item.temp - 273.15);
    }
}

const weatherApp = combineReducers({
    currentWeather,
    forecastWeather
})

export default weatherApp;