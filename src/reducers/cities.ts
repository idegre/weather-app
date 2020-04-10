export type State = {};

const initialState: State = {};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return { ...state };
	}
};
