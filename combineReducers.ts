import { combineReducers } from 'redux';
import {
	reducer as citiesReducer,
	State as CitiesState,
} from './src/reducers/cities';

export type RootState = {
	cities: CitiesState;
};

export const rootReducer = combineReducers({
	cities: citiesReducer,
});
