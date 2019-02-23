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

const weatherApp = combineReducers({
    currentWeather
})

export default weatherApp;