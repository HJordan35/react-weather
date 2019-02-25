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

function weatherLoadStates(state = {}, action) {
    switch (action.type) {
        case AC.GET_CURRENT_WEATHER_LOADING:
            return { ...state, isLoadingCurrent: action.isLoading }
        case AC.GET_FORECAST_WEATHER_LOADING:
            return { ...state, isLoadingForecast: action.isLoading }
        default:
            return state
    }
}

// SELECTOR
export const getForecastList = (state) => {
    if (state.forecastWeather.forecastDates) {
        let weatherData = [];
        for (let date of state.forecastWeather.forecastDates) {
            weatherData.push(state.forecastWeather.weatherByDate[date]);
        }
        return weatherData;
    }
}

const weatherApp = combineReducers({
    currentWeather,
    forecastWeather,
    weatherLoadStates
})

export default weatherApp;