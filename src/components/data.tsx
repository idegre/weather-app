import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IMainData } from 'src/interfaces/weatherData';
import { DataPoint } from './dataPoint';

type OwnProps = {
	data: IMainData;
};

export const Data = ({
	data: { temp, humidity, temp_max, temp_min, pressure },
}: OwnProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.mainTemp}>{(temp - 273.15).toFixed(2)}C*</Text>
			<View>
				<DataPoint data={`${humidity}%`} label="Humidity" />
				<DataPoint
					data={`${(temp_max - 273.15).toFixed(1)}C*`}
					label="Max Texperature"
				/>
				<DataPoint
					data={`${(temp_min - 273.15).toFixed(1)}C*`}
					label="Min Texperature"
				/>
				<DataPoint data={`${pressure}hP`} label="Pessure" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		display: 'flex',
		justifyContent: 'space-between',
	},
	mainTemp: {
		fontSize: 70,
	},
});
