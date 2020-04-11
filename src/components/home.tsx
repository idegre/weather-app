import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../combineReducers';
import { fetchWeatherData } from '../actions/fetchWeatherData';
// import MapView from 'react-native-maps';
import { Data } from './data';

export const Home = () => {
	const currentCity = useSelector(({ cities: { list } }: RootState) => list[0]);
	const { data, isFetching } = useSelector(
		({ weatherData: { data, isFetching } }: RootState) => ({
			data,
			isFetching,
		}),
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchWeatherData(currentCity));
	}, [currentCity]);
	return isFetching ? (
		<Text>loading...</Text>
	) : (
		<View>
			<Text>{currentCity}</Text>
			{/* <MapView /> */}
			{!!data && <Data data={data.main} />}
		</View>
	);
};
