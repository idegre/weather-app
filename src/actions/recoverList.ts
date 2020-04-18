import { ThunkAction } from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { RootState } from 'combineReducers';
import { RootActions } from 'combineActions';
import { setCity } from './setCity';

export const recoverList = (): ThunkAction<
	void,
	RootState,
	void,
	RootActions
> => async (dispatch, _) => {
	try {
		const unparsed = await AsyncStorage.getItem('CITY_LIST');
		dispatch(setCity(JSON.parse(unparsed || '')));
	} catch (e) {
		return Promise.reject();
	}
};

export type Actions = ReturnType<typeof setCity>;
