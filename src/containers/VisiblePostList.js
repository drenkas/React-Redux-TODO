import React from 'react';
import { connect } from "react-redux";
import { loadPost, postEdit, postDelete} from "../action";
import Post from '../components/post/Post';
import { BarLoader } from 'react-css-loaders';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Delay from '../components/Delay'

class GetVisiblePost extends React.Component {
	componentWillMount() {
		this.props.loadPost();
	}

	render() {
		const { posts, postDelete, postEdit } = this.props;
		const timeDelay = 300;
		if (this.props.error.value)
		{
			return <h3> {this.props.error.payload} </h3>
		}
		else if (this.props.loading){
			return (
				<Delay wait={timeDelay} >
					<BarLoader />
				</Delay> 
			)
		}
		else return (
			<ReactCSSTransitionGroup
				transitionName="fade"
				transitionEnterTimeout = {300}
				transitionLeaveTimeout = {300}
			>
				{posts.map(post =>
					<Post
						key={post.id}
						{...post}
						postEdit={postEdit}
						postDelete={postDelete}
					/>
				)}
			</ReactCSSTransitionGroup>
		)
	}
}


const mapStateToProps = (state) => ({
	posts: state.todos.toJS().posts,
	loading: state.todos.toJS().loading.value,
	error: state.todos.toJS().error.value
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