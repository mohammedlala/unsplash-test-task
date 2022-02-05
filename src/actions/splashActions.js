import axios from 'axios';
import { SET_DATA, SET_ERROR, SET_LOADING, SET_MORE_DATA } from './actionTypes';
import { clientId } from '../services';

export const getImages = (query, page) => (dispatch) => {
	dispatch({
		type: SET_LOADING,
	});
	axios
		.get(
			`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${clientId}&per_page=8`,
		)
		.then((res) => {
			dispatch({
				type: page === 1 ? SET_DATA : SET_MORE_DATA,
				payload: res.data,
			});
		})
		.catch((err) => {
			if (err) {
				if (err?.response?.data?.errors.length) {
					dispatch({
						type: SET_ERROR,
						payload: err.response.data.errors[0],
					});
				}
			}
		});
};
