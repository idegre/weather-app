import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
import { routes } from './src/routes';
import { Router } from './src/components/router';

declare var global: { HermesInternal: null | {} };

const App = () => {
	return (
		<Provider store={store}>
			<StatusBar barStyle="dark-content" />
			<NavigationContainer>
				<Router routes={routes} />
			</NavigationContainer>
		</Provider>
	);
};

export default App;
