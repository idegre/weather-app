import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'combineReducers';

export const CitiesSelector = () => {
	const [value, onChange] = React.useState('');
	const citiesList = useSelector(({ cities: { list } }: RootState) => list);
	return (
		<View>
			<TextInput onChangeText={onChange} value={value} />
			<View>
				{citiesList.map((city: string) => (
					<Text key={city}>{city}</Text>
				))}
			</View>
		</View>
	);
};
