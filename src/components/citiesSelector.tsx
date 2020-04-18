import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'combineReducers';
import { addCity } from '../actions/setCity';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { DrawerActions, NavigationHelpers } from '@react-navigation/native';
import { DrawerNavigationEventMap } from '@react-navigation/drawer/lib/typescript/src/types';

type OwnProps = {
	navigation: NavigationHelpers<
		Record<string, object | undefined>,
		DrawerNavigationEventMap
	>;
};

export const CitiesSelector = ({ navigation }: OwnProps) => {
	const [value, onChange] = React.useState('');
	const citiesList = useSelector(({ cities: { list } }: RootState) => list);
	const dispatch = useDispatch();
	const handleSetCity = (city: string) => () => {
		!!city && dispatch(addCity(city));
		onChange('');
		navigation.dispatch(DrawerActions.closeDrawer());
	};
	return (
		<View>
			<TextInput
				onChangeText={onChange}
				value={value}
				onSubmitEditing={handleSetCity(value)}
				style={styles.input}
				placeholder="Find your city"
			/>
			<View>
				<Text style={styles.listHeader}>Previously searched cities:</Text>
				{citiesList.map((city: string) => (
					<TouchableHighlight key={city} onPress={handleSetCity(city)}>
						<Text style={styles.listItem}>{city}</Text>
					</TouchableHighlight>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 6,
		margin: 5,
	},
	listItem: {
		padding: 10,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		borderTopColor: '#ccc',
		borderTopWidth: 1,
	},
	listHeader: {
		padding: 10,
		fontSize: 15,
		fontWeight: '600',
	},
});
