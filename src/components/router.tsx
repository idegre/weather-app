import React, { ComponentType, FunctionComponent } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

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

export const Router = ({ routes }: OwnProps) => (
	<Drawer.Navigator initialRouteName={routes[0].name}>
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
