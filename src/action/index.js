import axios from "axios";
import { POST_FETCH, POST_ADD, POST_DELETE, POST_EDIT,  POST_PREEDIT, POST_PRELOAD, POST_POSTLOAD, ERROR} from "../utils/types";



export const loadPost = () => {
	return dispatch => {
		dispatch({type: POST_PRELOAD});
		axios.get("http://localhost:4000/posts/")
		.then( (response) => {
			setTimeout(() =>dispatch({type: POST_POSTLOAD}), 1000);
			setTimeout(() =>
			dispatch({
				type: POST_ADD,
				payload: response.data
			}), 1000);
		})
		.catch( (error) => {
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
			loading: false,
			isFetching: false
		};
		axios.post("http://localhost:4000/posts/", post)
		.then( (response) => {

			dispatch({
				type: POST_ADD,
				payload: response.data
			});
			dispatch({type: POST_POSTLOAD});
		})
		.catch( (error) => {
			dispatch({
				type: ERROR,
				payload: error
			})
		});
	}
};

export const postDelete = (id) => {
	return (dispatch) => {
		dispatch({type: POST_FETCH, id: id});
		axios.delete('http://localhost:4000/posts/'+id)
		.then( (response) => {
			
			dispatch({
				type: POST_DELETE,
				payload: id
			});
			dispatch({type: POST_POSTLOAD});
		})
		.catch( (error) => {
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
					id: id});
		const postEd = {text: text};
		axios.patch('http://localhost:4000/posts/'+id, postEd)
		.then( (response) => {
			setTimeout(() =>
			dispatch({
				type: POST_EDIT,
				payload: id,
				text: text
			}), 1000);
		})
		.catch( (error) => {
			dispatch({
				type: ERROR,
				payload: error
			});
		});
	}
}