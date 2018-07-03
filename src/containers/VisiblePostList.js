/* import { connect } from "react-redux";
import { loadPost, postEdit, postDelete} from "../action";
import PostList from "../components/PostList";

const getVisiblePost = (state) => {
	console.log('POSTS:', state);
	return state.posts;
}

const mapStateToProps = (state) => ({
	posts: getVisiblePost(state)
});

const mapDispatchToProps = (dispatch) => ({
	postDelete: (id) => {
		dispatch(postDelete(id));
	},
	postEdit: (text, post) => {
		dispatch(postEdit(text, post));
	},
	loadPost: () => dispatch(loadPost())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostList); */
import React from 'react';
import { connect } from "react-redux";
import { loadPost, postEdit, postDelete} from "../action";
import Post from '../components/Post';

class getVisiblePost extends React.Component {
	componentWillMount() {
		this.props.loadPost();
	}

	render() {
		
		const { posts, postDelete, postEdit } = this.props;
		console.log('PROPSES SUKAAAA', this.props);
		return (
			posts.map(post =>
				<Post
					key={post.id}
					{...post}
					postEdit={postEdit}
					postDelete={postDelete}
				/>
			)
		)
	}
}

const visiblePost = (state) => {
	console.log('POSTS:', state);
	return state.posts.toJS();
}

const mapStateToProps = (state) => ({
	posts: visiblePost(state)
});

const mapDispatchToProps = (dispatch) => ({
	postDelete: (id) => {
		dispatch(postDelete(id));
	},
	postEdit: (text, id) => {
		dispatch(postEdit(text, id));
	},
	loadPost: () => dispatch(loadPost())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(getVisiblePost);