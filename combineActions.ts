import { Actions as SetCityActions } from './src/actions/setCity';
import { Actions as FetchDataActions } from './src/actions/fetchWeatherData';

export type RootActions = SetCityActions | FetchDataActions;
