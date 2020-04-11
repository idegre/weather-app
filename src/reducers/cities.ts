import * as actionTypes from '../actionTypes';
import { RootActions } from 'combineActions';

export type State = {
	list: string[];
};

const initialState: State = {
	list: [],
};

export const reducer = (state = initialState, action: RootActions) => {
	switch (action.type) {
		case actionTypes.SET_CITIES:
			return {
				...state,
				list: action.payload,
			};
		default:
			return { ...state };
	}
};
