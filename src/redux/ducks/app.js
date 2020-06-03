const types = {
	FETCH: 'geo/app32/fetch',
};

const defaultState = {
	loaded: false,
	maps: null,
};

export default function reducer(state = defaultState, action = {}) {
	const { type, payload } = action;

	switch (type) {
		case types.FETCH:
			return {
				loaded: payload.loaded,
				maps: payload.maps,
			};
		default:
			return state;
	}
}

/**
 * actions
 */

export function set(maps) {
	return {
		type: types.FETCH,
		payload: { loaded: true, maps },
	};
}
