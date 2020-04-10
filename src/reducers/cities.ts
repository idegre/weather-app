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
			const newList = [...new Set([action.payload, ...state.list])];
			if (newList.length > 5) {
				newList.pop();
			}
			return {
				...state,
				list: newList,
			};
		default:
			return { ...state };
	}
};
