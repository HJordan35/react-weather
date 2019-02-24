import { connect } from 'react-redux'

//Actions
import {
    getCurrentWeather, getForecastWeather,
} from '../redux/actions/weatherActions';

//Components
import WeatherCard from '../components/WeatherCard';

//Selectors
import { getFahrenheit, getCelsius, getCurrentFahrenheitByForecastDay } from '../redux/reducers/weatherReducer';

const mapStateToProps = (state)=> {
    return {
        currentWeather: state.currentWeather,
        currentFahrenheit: getFahrenheit(state),
        currentCelsius: getCelsius(state),
        tileOne: getCurrentFahrenheitByForecastDay(state, 1),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrentWeather: (lat, lon) => dispatch(getCurrentWeather(lat, lon)),
        getForecastWeather: (lat, lon) => dispatch(getForecastWeather(lat,lon))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);