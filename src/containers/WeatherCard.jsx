import { connect } from 'react-redux'

//Actions
import {
    getCurrentWeather,
} from '../redux/actions/weatherActions';

//Components
import WeatherCard from '../components/WeatherCard';

//Selectors
import { getFahrenheit, getCelsius } from '../redux/reducers/weatherReducer';

const mapStateToProps = (state)=> {
    return {
        currentWeather: state.currentWeather,
        currentFahrenheit: getFahrenheit(state),
        currentCelsius: getCelsius(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrentWeather: (lat, lon) => dispatch(getCurrentWeather(lat, lon)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);