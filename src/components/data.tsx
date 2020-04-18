import React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { IMainData } from 'src/interfaces/weatherData';
import { DataPoint } from './dataPoint';

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
				<Text style={styles.mainTemp}>{(temp - 273.15).toFixed(2)}C*</Text>
				<View>
					<DataPoint
						data={`${(temp_max - 273.15).toFixed(1)}C*`}
						label="Max Texperature"
					/>
					<DataPoint
						data={`${(temp_min - 273.15).toFixed(1)}C*`}
						label="Min Texperature"
					/>
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
