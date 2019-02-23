import * as AC from '../ActionConstants';

import axios from 'axios';

export function currentWeatherSuccess(data) {
    return {
        type: AC.GET_CURRENT_WEATHER_SUCCESS,
        data: data
    }
}

export function getCurrentWeather(lat,lon) {
    return dispatch => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=75063&appid=a8e063c9811869e8c8135ef9d1da3c75`)
        .then(res => {
            if(res.status === 200) {
                dispatch(currentWeatherSuccess(res.data))
            }
        })
    }
}