import React from 'react';
import { connect } from "react-redux";
import { loadPost, postEdit, postDelete, clearPosts} from "../action";
import Post from '../components/post/Post';
import { BarLoader } from 'react-css-loaders';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Delay from '../components/Delay'
import ModalInput from '../components/post/Modal'

const TIME_DELAY = 300;

class GetVisiblePost extends React.Component {
	constructor() {
		super(...arguments);

		this.state = {
			showModal: false,
			editableIndex: null
		};
	}

	componentDidMount() {
		this.props.loadPost();
	}
	
	componentWillUnmount() {
		this.props.clearPosts();
	}

	modalChange = () => {
		this.setState({ showModal: !this.state.showModal})
	}

	onSavePost = (index) => {
		this.modalChange();
		this.setState({ editableIndex: index})
	}

	render() {
		if (this.props.error.value)
		{
			return <h3> {`Error: ${this.props.error.message.message}. 
			Method: ${this.props.error.message.config.method}. Url: ${this.props.error.message.config.url}`}</h3>
		}
		else if (this.props.loading.value){
			return (
				<Delay wait={TIME_DELAY} >
					<BarLoader />
				</Delay> 
			)
		}
		else return (
			<div>
				{this.state.showModal &&
				<ModalInput
					modalChange={this.modalChange}
					postEdit={this.props.postEdit}
					text={this.props.posts[this.state.editableIndex].text}
					id={this.props.posts[this.state.editableIndex].id}
				/> }
				<ReactCSSTransitionGroup
					transitionName="fade"
					transitionEnterTimeout = {300}
					transitionLeaveTimeout = {300}
				>
					{this.props.posts.map((post, index) =>
						<Post
							key={post.id}
							{...post}
							index={index}
							postDelete={this.props.postDelete}
							onSavePost={this.onSavePost}
						/>
					)}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
	posts: state.todos.get("posts").toJS(),
	loading: state.todos.get("loading").toJS(),
	error: state.todos.get("error").toJS()
});

const mapDispatchToProps = (dispatch) => ({
	postDelete: (id) => {
		dispatch(postDelete(id));
	},
	postEdit: (text, id) => {
		dispatch(postEdit(text, id));
	},
	loadPost: () => dispatch(loadPost()),
	clearPosts: () => dispatch(clearPosts())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GetVisiblePost);