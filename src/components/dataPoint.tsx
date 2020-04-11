import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type OwnProps = {
	data: string;
	label: string;
};

export const DataPoint = ({ data, label }: OwnProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.data}>{data}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		display: 'flex',
	},
	data: {
		fontSize: 30,
	},
	label: {
		fontSize: 10,
	},
});
