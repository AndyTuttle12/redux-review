import { combineReducers } from 'redux';
import StudentReducer from './StudentReducer';
import WeatherReducer from './WeatherReducer';
import MovieReducer from './MovieReducer';

const rootReducer = combineReducers({
	students: StudentReducer,
	weather: WeatherReducer,
	movie: MovieReducer
});

export default rootReducer;