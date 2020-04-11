import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
import { routes } from './src/routes';
import { DrawerComponent } from './src/components/drawer';
import { ThemeProvider } from 'react-native-elements';

declare var global: { HermesInternal: null | {} };

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<StatusBar barStyle="dark-content" />
				<NavigationContainer>
					<DrawerComponent routes={routes} />
				</NavigationContainer>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
