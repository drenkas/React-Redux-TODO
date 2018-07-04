import axios from "axios";

export const POST_ADD = 'POST_ADD';
export const POST_DELETE = 'POST_DELETE';
export const POST_EDIT = 'POST_EDIT';
export const POST_PREEDIT = 'POST_PREEDIT';
export const POST_PRELOAD = 'POST_PRELOAD';
export const POST_POSTLOAD = 'POST_POSTLOAD';
/* export const POST_TOGGLE = 'POST_TOGGLE'; */
export const ERROR = 'ERROR';


export const loadPost = () => {
	console.log('DAROVA EBAT');
	
	return dispatch => {
		dispatch({type: POST_PRELOAD});
		axios.get("http://localhost:4000/posts/")
		.then(function (response) {
			console.log('DAROVA' ,response.data);
			setTimeout(() =>dispatch({type: POST_POSTLOAD}), 1000);
			setTimeout(() =>
			dispatch({
				type: POST_ADD,
				payload: response.data
			}), 1000);
		})
		.catch(function (error) {
			console.log('TUTA DAROVA')
			dispatch({
				type: ERROR,
				payload: error
			});
		});
	}
}

export const postAdd = (text) => {
	console.log('TEXT_ADD', text);
	
	return (dispatch) => {
		dispatch({type: POST_PRELOAD});
		const post = {
			text,
			loading: false
		};
		
		axios.post("http://localhost:4000/posts/", post)
		.then(function (response) {
			console.log('POSTAAADD', response.data);
			dispatch({
				type: POST_POSTLOAD
			});
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
		dispatch({type: POST_PRELOAD});
		axios.delete('http://localhost:4000/posts/'+id)
		.then(function (response) {
			console.log('DELETE_ID', id);
			console.log('RES_DELETE', response);
			console.log('RESDATA_DELETE', response.data);
			dispatch({
				type: POST_POSTLOAD
			});
			dispatch({
				type: POST_DELETE,
				payload: id
			});
		})
		.catch(function (error) {
			console.log('TUTA DAROVA', error)
			dispatch({
				type: ERROR,
				payload: error
			});
		});
	}
}

export const postEdit = (text, id) => {
	console.log(id)
	console.log('DOROVA EDIT')
	
	return (dispatch) => {
		dispatch({type: POST_PREEDIT,
					payload: id});
		const postEd = {text: text};
		axios.patch('http://localhost:4000/posts/'+id, postEd)
		.then(function (response) {
			console.log('EDIT_postED', postEd);
			console.log('EDIT_TEXT', text);
			console.log('RES_EDIT', response);
			console.log('RESDATA_EDIT', response.data);
			setTimeout(() =>
			dispatch({
				type: POST_EDIT,
				payload: id,
				text: text
			}), 2000);
		})
		.catch(function (error) {
			console.log('EDIT ERROR DAROVA', error)
			dispatch({
				type: ERROR,
				payload: error
			});
		});
	}
}
/* export const postToggle = (post) => {
	return (dispatch) => {
		const tod = {...post, completed: !post.completed};
		axios.put("http://localhost:4000/posts/" + id, tod)
		.then(function (response) {
			dispatch({
				type: POST_TOGGLE,
				id: id
			});
		})
		.catch(function (error) {
			dispatch({
				type: ERROR,
				payload: error
			})
		});
	}
}; */