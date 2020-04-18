import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../combineReducers';
import { fetchWeatherData } from '../actions/fetchWeatherData';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
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
	const { wData, dataIsFetching, apiError } = useSelector(
		({ weatherData: { data, isFetching, error } }: RootState) => ({
			wData: data,
			dataIsFetching: isFetching,
			apiError: error,
		}),
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchWeatherData(currentCity));
	}, [currentCity]);
	return (
		<View style={styles.container}>
			<Header title={currentCity} navigation={navigation} />
			{!dataIsFetching && !!wData ? (
				!wData || apiError ? (
					<Text>There was an error, please try again</Text>
				) : (
					<View pointerEvents="none" style={styles.dataContainer}>
						<MapView
							style={styles.map}
							provider={PROVIDER_GOOGLE}
							region={{
								latitude: wData.coord.lat,
								longitude: wData.coord.lon,
								latitudeDelta: 0.0922,
								longitudeDelta: 0.0421,
							}}
						/>
						<Data data={wData.main} style={styles.data} />
					</View>
				)
			) : (
				<Text>loading...</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		display: 'flex',
		flexDirection: 'column',
	},
	dataContainer: {
		flexGrow: 1,
	},
	map: {
		flexGrow: 1,
	},
	data: {
		margin: 20,
		marginBottom: 20,
	},
});
