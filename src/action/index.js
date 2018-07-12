import axios from "axios";

export const POST_ADD = 'POST_ADD';
export const POST_DELETE = 'POST_DELETE';
export const POST_EDIT = 'POST_EDIT';
export const POST_PREEDIT = 'POST_PREEDIT';
export const POST_PRELOAD = 'POST_PRELOAD';
export const POST_POSTLOAD = 'POST_POSTLOAD';
export const ERROR = 'ERROR';


export const loadPost = () => {
	return dispatch => {
		dispatch({type: POST_PRELOAD});
		axios.get("http://localhost:4000/posts/")
		.then(function (response) {
			setTimeout(() =>dispatch({type: POST_POSTLOAD}), 1000);
			setTimeout(() =>
			dispatch({
				type: POST_ADD,
				payload: response.data
			}), 1000);
		})
		.catch(function (error) {
			dispatch({
				type: ERROR,
				payload: error
			});
		});
	}
}

export const postAdd = (text) => {
	return (dispatch) => {
		const post = {
			text,
			loading: false
		};
		axios.post("http://localhost:4000/posts/", post)
		.then(function (response) {
			dispatch({
				type: POST_ADD,
				payload: response.data
			});
		})
		.catch(function (error) {
			dispatch({
				type: ERROR,
				payload: error
			})
		});
	}
};

export const postDelete = (id) => {
	return (dispatch) => {
		axios.delete('http://localhost:4000/posts/'+id)
		.then(function (response) {
			dispatch({
				type: POST_DELETE,
				payload: id
			});
		})
		.catch(function (error) {
			dispatch({
				type: ERROR,
				payload: error
			});
		});
	}
}

export const postEdit = (text, id) => {
	return (dispatch) => {
		dispatch({type: POST_PREEDIT,
					payload: id});
		const postEd = {text: text};
		axios.patch('http://localhost:4000/posts/'+id, postEd)
		.then(function (response) {
			setTimeout(() =>
			dispatch({
				type: POST_EDIT,
				payload: id,
				text: text
			}), 2000);
		})
		.catch(function (error) {
			dispatch({
				type: ERROR,
				payload: error
			});
		});
	}
}