import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DEFAULT_CITY } from 'react-native-dotenv';
import { Icon } from 'react-native-elements';
import { NavigationHelpers, DrawerActions } from '@react-navigation/native';
import { DrawerNavigationEventMap } from '@react-navigation/drawer/lib/typescript/src/types';

type OwnProps = {
	navigation: NavigationHelpers<
		Record<string, object | undefined>,
		DrawerNavigationEventMap
	>;
	title: string;
};

export const Header = ({ title = DEFAULT_CITY, navigation }: OwnProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.icon}>
				<Icon
					name="menu"
					onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
				/>
			</View>
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
		position: 'relative',
	},
	title: {
		fontSize: 25,
		margin: 10,
	},
	icon: {
		position: 'absolute',
		top: 15,
		left: 10,
	},
});
