import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../combineReducers';
import { fetchWeatherData } from '../actions/fetchWeatherData';

export const Home = () => {
	const currentCity = useSelector(({ cities: { list } }: RootState) => list[0]);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchWeatherData(currentCity));
	}, [currentCity]);
	return (
		<View>
			<Text>{currentCity}</Text>
		</View>
	);
};
