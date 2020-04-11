import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../combineReducers';
import { fetchWeatherData } from '../actions/fetchWeatherData';
// import MapView from 'react-native-maps';
import { Data } from './data';
import { Header } from './header';

type OwnProps = {
	navigation: any;
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
					{/* <MapView /> */}
					{!!wData && <Data data={wData.main} />}
				</View>
			)}
		</>
	);
};
