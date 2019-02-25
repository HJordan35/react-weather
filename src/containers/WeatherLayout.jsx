import { connect } from 'react-redux'

//Actions
import {
    getCurrentWeather, getForecastWeather,
} from '../redux/actions/weatherActions';

//Components
import WeatherLayout from '../components/WeatherLayout';

//Selectors
import { getForecastList } from '../redux/reducers/weatherReducer';

const mapStateToProps = (state)=> {
    return {
        currentWeather: state.currentWeather,
        forecastDates: state.forecastWeather.forecastDates,
        forecastData: getForecastList(state),
        isLoadingCurrent: state.weatherLoadStates.isLoadingCurrent,
        isLoadingForecast: state.weatherLoadStates.isLoadingForecast,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrentWeather: (lat, lon) => dispatch(getCurrentWeather(lat, lon)),
        getForecastWeather: (lat, lon) => dispatch(getForecastWeather(lat,lon))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherLayout);