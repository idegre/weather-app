import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../combineReducers';

export const Home = () => {
	const currentCity = useSelector(({ cities: { list } }: RootState) => list[0]);
	useEffect(() => console.log('changed city', currentCity), [currentCity]);
	return (
		<View>
			<Text>{currentCity}</Text>
		</View>
	);
};
