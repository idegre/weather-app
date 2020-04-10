export type State = {
	list: string[];
};

const initialState: State = {
	list: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return { ...state };
	}
};
