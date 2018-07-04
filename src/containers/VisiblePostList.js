import React from 'react';
import { connect } from "react-redux";
import { loadPost, postEdit, postDelete} from "../action";
import Post from '../components/Post';
import { BarLoader } from 'react-css-loaders';

class GetVisiblePost extends React.Component {
	componentWillMount() {
		this.props.loadPost();
	}

	render() {
		
		const { posts, postDelete, postEdit } = this.props;
		console.log('PROPSES SUKAAAA', this.props);
		if (this.props.loading){
			return (
				<BarLoader />
			)
		}
		else return (
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
	return state.posts;
}

const mapStateToProps = (state) => ({
	posts: visiblePost(state.toJS()),
	loading: state.toJS().loading
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
)(GetVisiblePost);