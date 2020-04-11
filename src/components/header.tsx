import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DEFAULT_CITY } from 'react-native-dotenv';
import { Icon } from 'react-native-elements';

type OwnProps = {
	navigation: any;
	title: string;
};

export const Header = ({ title = DEFAULT_CITY, navigation }: OwnProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Icon
				style={styles.icon}
				name="bars"
				type="material"
				onPress={() => navigation.openDrawer()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		display: 'flex',
		justifyContent: 'center',
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
	},
	title: {
		fontSize: 25,
		margin: 10,
	},
	icon: {
		position: 'absolute',
		left: 10,
		top: 10,
	},
});
