import * as actionTypes from '../actionTypes';

export const setCity = (city: string) => ({
	type: actionTypes.SET_CITIES,
	payload: city,
});

export type Actions = ReturnType<typeof setCity>;
