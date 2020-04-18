import { ThunkAction } from 'redux-thunk';
import axios, { AxiosError, CancelTokenSource } from 'axios';
import { RootState } from 'combineReducers';
import { RootActions } from 'combineActions';
import * as actionTypes from '../actionTypes';
import { IWData } from 'src/interfaces/weatherData';
import { OPENWEATHER_API_KEY, DEFAULT_CITY } from 'react-native-dotenv';

const apiKey = OPENWEATHER_API_KEY;

const fetchDataSuccess = (data: IWData, name: string) => ({
	type: actionTypes.FETCH_WEATHER_SUCCESS,
	payload: { data, name },
});

const fetchDataRequest = (cancelToken: CancelTokenSource, name: string) => ({
	type: actionTypes.FETCH_WEATHER_REQUEST,
	payload: {
		cancelToken,
		name,
	},
});

const fetchDataFailure = (error: AxiosError, name: string) => ({
	type: actionTypes.FETCH_WEATHER_FAILURE,
	payload: { error, name },
});

export const fetchWeatherData = (
	cityName: string = DEFAULT_CITY,
): ThunkAction<Promise<IWData>, RootState, void, RootActions> => async (
	dispatch,
	_,
) => {
	try {
		const cancelToken = axios.CancelToken.source();
		dispatch(fetchDataRequest(cancelToken, cityName));
		const { data } = await axios.get<IWData>(
			'http://api.openweathermap.org/data/2.5/weather',
			{
				cancelToken: cancelToken.token,
				params: {
					q: cityName,
					appid: apiKey,
				},
			},
		);
		dispatch(fetchDataSuccess(data, cityName));
		return data;
	} catch (e) {
		dispatch(fetchDataFailure(e, cityName));
		return Promise.reject();
	}
};

export type Actions =
	| ReturnType<typeof fetchDataSuccess>
	| ReturnType<typeof fetchDataRequest>
	| ReturnType<typeof fetchDataFailure>;
