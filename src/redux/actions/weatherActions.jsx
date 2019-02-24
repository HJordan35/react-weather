import * as AC from '../ActionConstants';

import axios from 'axios';
import moment from 'moment';

export function currentWeatherSuccess(data) {
    return {
        type: AC.GET_CURRENT_WEATHER_SUCCESS,
        data: data
    }
}

export function forecastWeatherSuccess(data) {
    return {
        type: AC.GET_FORECAST_WEATHER_SUCCESS,
        data: data
    }
}

export function getCurrentWeather(lat, lon) {
    return dispatch => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=75063&appid=a8e063c9811869e8c8135ef9d1da3c75`)
            .then(res => {
                if (res.status === 200) {
                    let weatherModel = {
                        ...res.data.main,
                        ...res.data.weather[0],
                        ...res.data.wind,
                        tempCelsius: calcCelsius(res.data.main.temp),
                        tempFahrenheit: calcFahrenheit(res.data.main.temp)
                    }
                    dispatch(currentWeatherSuccess(weatherModel))
                }
            })
    }
}

export function getForecastWeather(lat, lon) {
    return dispatch => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=75063&appid=a8e063c9811869e8c8135ef9d1da3c75`)
            .then(res => {
                if (res.status === 200) {
                    let dayOne = moment().hour(12).add(1, 'days');
                    let dayTwo = moment().hour(12).add(2, 'days');
                    let dayThree = moment().hour(12).add(3, 'days');
                    let dayFour = moment().hour(12).add(4, 'days');
                    let forecastModel = {
                        weatherByDate: {},
                        forecastDates: []
                    };
                    for (let item of res.data.list) {
                        let checkDate = moment.unix(item.dt);

                        if (checkDate.isSame(dayOne, 'hour')) {
                            forecastModel.forecastDates.push(item.dt);
                        } else if (checkDate.isSame(dayTwo, 'hour')) {
                            forecastModel.forecastDates.push(item.dt);
                        } else if (checkDate.isSame(dayThree, 'hour')) {
                            forecastModel.forecastDates.push(item.dt);
                        } else if (checkDate.isSame(dayFour, 'hour')) {
                            forecastModel.forecastDates.push(item.dt);
                        }

                        forecastModel.weatherByDate[item.dt] = {
                            ...item.main,
                            ...item.weather[0],
                            ...item.wind,
                            tempCelsius: calcCelsius(item.main.temp),
                            tempFahrenheit: calcFahrenheit(item.main.temp)
                        };
                    }
                    forecastModel.forecastDates.push(res.data.list[res.data.list.length - 1].dt);
                    dispatch(forecastWeatherSuccess(forecastModel));
                }
            })
    }
}

function calcFahrenheit(kelvinTemp){
    return Math.round(kelvinTemp * (9/5) - 459.67);
}

function calcCelsius(kelvinTemp) {
    return Math.round(kelvinTemp - 273.15);
}
