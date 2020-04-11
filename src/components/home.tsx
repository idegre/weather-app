import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../combineReducers';
import { fetchWeatherData } from '../actions/fetchWeatherData';
import MapView from 'react-native-maps';
import { Data } from './data';
import { Header } from './header';
import { NavigationHelpers } from '@react-navigation/native';
import { DrawerNavigationEventMap } from '@react-navigation/drawer/lib/typescript/src/types';

type OwnProps = {
	navigation: NavigationHelpers<
		Record<string, object | undefined>,
		DrawerNavigationEventMap
	>;
};

export const Home = ({ navigation }: OwnProps) => {
	const currentCity = useSelector(({ cities: { list } }: RootState) => list[0]);
	const { wData, dataIsFetching } = useSelector(
		({ weatherData: { data, isFetching } }: RootState) => ({
			wData: data,
			dataIsFetching: isFetching,
		}),
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchWeatherData(currentCity));
	}, [currentCity]);
	return (
		<>
			<Header title={currentCity} navigation={navigation} />
			{dataIsFetching ? (
				<Text>loading...</Text>
			) : (
				<View>
					<MapView />
					{!!wData && <Data data={wData.main} />}
				</View>
			)}
		</>
	);
};
