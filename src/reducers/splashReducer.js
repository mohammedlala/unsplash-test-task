// import { SET_SELECTED_USER } from '../actions/actionTypes';

import {
	SET_DATA,
	SET_ERROR,
	SET_LOADING,
	SET_MORE_DATA,
	SET_PAGE,
} from '../actions/actionTypes';

const initialState = {
	loading: false,
	imageData: [],
	error: '',
	page: 1,
	totalImages: 0,
};

const splashReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING: {
			return {
				...state,
				loading: !state.loading,
			};
		}
		case SET_DATA: {
			return {
				...state,
				imageData: action.payload.results.length
					? [...action.payload.results]
					: false,
				loading: !state.loading,
				totalImages: action.payload.total,
			};
		}
		case SET_MORE_DATA: {
			return {
				...state,
				imageData: action.payload.results.length
					? [...state.imageData, ...action.payload.results]
					: false,
				loading: !state.loading,
				totalImages: action.payload.total,
			};
		}
		case SET_ERROR: {
			return {
				...state,
				error: action.payload,
				loading: !state.loading,
			};
		}
		case SET_PAGE: {
			return {
				...state,
				page: action.payload,
			};
		}
		default:
			return state;
	}
};
export default splashReducer;
