import React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { IMainData } from 'src/interfaces/weatherData';
import { DataPoint } from './dataPoint';
import { cToK } from '../helpers/tempConversion';

type OwnProps = {
	data: IMainData;
	style?: StyleProp<ViewStyle>;
};

export const Data = ({
	data: { temp, humidity, temp_max, temp_min, pressure },
	style,
}: OwnProps) => {
	return (
		<>
			<View style={{ ...styles.container, ...style }}>
				<Text style={styles.mainTemp}>{cToK(temp)}C*</Text>
				<View>
					<DataPoint data={`${cToK(temp_max, 1)}C*`} label="Max Texperature" />
					<DataPoint data={`${cToK(temp_min, 1)}C*`} label="Min Texperature" />
				</View>
			</View>
			<View style={styles.subContainer}>
				<DataPoint data={`${humidity}%`} label="Humidity" />
				<DataPoint data={`${pressure}hP`} label="Pessure" />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		display: 'flex',
		justifyContent: 'space-between',
	},
	subContainer: {
		flexDirection: 'row',
		display: 'flex',
		justifyContent: 'space-around',
		marginTop: 10,
		marginBottom: 10,
	},
	mainTemp: {
		fontSize: 70,
	},
});
