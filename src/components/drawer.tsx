import React, { ComponentType, FunctionComponent, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CitiesSelector } from './citiesSelector';
import { useDispatch } from 'react-redux';
import { recoverList } from '../actions/recoverList';

const Drawer = createDrawerNavigator();

export type IRoute = {
	name: string;
	component: ComponentType<any> | FunctionComponent<any>;
	options?: {
		title?: string;
		drawerLabel?: string;
	};
};

type OwnProps = {
	routes: IRoute[];
};

export const DrawerComponent = ({ routes }: OwnProps) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(recoverList());
	}, []);
	return (
		<Drawer.Navigator
			initialRouteName={routes[0].name}
			drawerContent={
				({ navigation }) => (
					<CitiesSelector navigation={navigation} />
				) /* this was necesary to allow the use of hooks within drawerContent*/
			}>
			{routes.map(({ name, component, options }: IRoute) => (
				<Drawer.Screen
					name={name}
					key={name}
					component={component}
					options={{
						drawerLabel: name,
						...options,
					}}
				/>
			))}
		</Drawer.Navigator>
	);
};
