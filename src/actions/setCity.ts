import * as actionTypes from '../actionTypes';
import { ThunkAction } from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { RootState } from 'combineReducers';
import { RootActions } from 'combineActions';

export const setCity = (city: string[]) => ({
	type: actionTypes.SET_CITIES,
	payload: city,
});

export const addCity = (
	city: string,
): ThunkAction<void, RootState, void, RootActions> => async (
	dispatch,
	getState,
) => {
	const {
		cities: { list },
	} = getState();
	const newList = [...new Set([city, ...list])];
	if (newList.length > 5) {
		newList.pop();
	}
	try {
		await AsyncStorage.setItem('CITY_LIST', JSON.stringify(newList));
		dispatch(setCity(newList));
	} catch (e) {
		throw e;
	}
};

export type Actions = ReturnType<typeof setCity>;
