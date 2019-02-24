import { connect } from 'react-redux'

//Actions
import {
    getCurrentWeather, getForecastWeather,
} from '../redux/actions/weatherActions';

//Components
import WeatherCard from '../components/WeatherCard';

//Selectors
import { getForecastList } from '../redux/reducers/weatherReducer';

const mapStateToProps = (state)=> {
    return {
        currentWeather: state.currentWeather,
        forecastDates: state.forecastWeather.forecastDates,
        forecastData: getForecastList(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrentWeather: (lat, lon) => dispatch(getCurrentWeather(lat, lon)),
        getForecastWeather: (lat, lon) => dispatch(getForecastWeather(lat,lon))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);