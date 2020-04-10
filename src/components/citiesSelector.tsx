import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'combineReducers';
import { setCity } from '../actions/setCity';

export const CitiesSelector = () => {
	const [value, onChange] = React.useState('');
	const citiesList = useSelector(({ cities: { list } }: RootState) => list);
	const dispatch = useDispatch();
	const handleSetCity = () => {
		dispatch(setCity(value));
		onChange('');
	};
	return (
		<View>
			<TextInput
				onChangeText={onChange}
				value={value}
				onSubmitEditing={handleSetCity}
			/>
			<View>
				{citiesList.map((city: string) => (
					<Text key={city}>{city}</Text>
				))}
			</View>
		</View>
	);
};
