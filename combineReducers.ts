import { combineReducers } from 'redux';
import {
	reducer as citiesReducer,
	State as CitiesState,
} from './src/reducers/cities';
import {
	reducer as dataReducer,
	State as DataState,
} from './src/reducers/weatherData';

export type RootState = {
	cities: CitiesState;
	weatherData: DataState;
};

export const rootReducer = combineReducers({
	cities: citiesReducer,
	weatherData: dataReducer,
});
