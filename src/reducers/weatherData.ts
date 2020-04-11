import * as actionTypes from '../actionTypes';
import { RootActions } from 'combineActions';
import { AxiosError, CancelTokenSource } from 'axios';
import { IWData } from '../interfaces/weatherData';

export type State = {
	data: IWData | null;
	isFetching: boolean;
	error: AxiosError | null;
	cancelToken: CancelTokenSource | null;
	city: string | null;
};

const initialState: State = {
	data: null,
	isFetching: false,
	error: null,
	cancelToken: null,
	city: null,
};

export const reducer = (state = initialState, action: RootActions) => {
	switch (action.type) {
		case actionTypes.FETCH_WEATHER_REQUEST:
			return {
				...state,
				data: null,
				error: null,
				cancelToken: action.payload.cancelToken,
				isFetching: true,
				city: action.payload.name,
			};
		case actionTypes.FETCH_WEATHER_SUCCESS:
			return {
				...state,
				data: action.payload.data,
				error: null,
				cancelToken: null,
				isFetching: false,
				city: action.payload.name,
			};
		case actionTypes.FETCH_WEATHER_FAILURE:
			return {
				...state,
				data: null,
				error: action.payload.error,
				cancelToken: null,
				isFetching: false,
				city: action.payload.name,
			};
		default:
			return { ...state };
	}
};
