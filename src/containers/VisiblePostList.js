import React from 'react';
import { connect } from "react-redux";
import { loadPost, postEdit, postDelete} from "../action";
import Post from '../components/post/Post';
import { BarLoader } from 'react-css-loaders';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Delay from '../components/Delay'
import ModalInput from '../components/post/Modal'

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

	modalChange = () => {
		this.setState({ showModal: !this.state.showModal})
	}

	onSavePost = (index) => {
		this.modalChange();
		this.setState({ editableIndex: index})
	}

	render() {
		const { posts, postDelete, postEdit } = this.props;
		const timeDelay = 300;
		if (this.props.error.value)
		{
			return <h3> {`Error: ${this.props.error.message.message}. 
			Method: ${this.props.error.message.config.method}. Url: ${this.props.error.message.config.url}`}</h3>
		}
		else if (this.props.loading){
			return (
				<Delay wait={timeDelay} >
					<BarLoader />
				</Delay> 
			)
		}
		else return (
			<div>
				{this.state.showModal ?
				<ModalInput 
					modalChange={this.modalChange}
					postEdit={postEdit}
					text={posts[this.state.editableIndex].text}
					id={posts[this.state.editableIndex].id}
				/> : null}
				<ReactCSSTransitionGroup
					transitionName="fade"
					transitionEnterTimeout = {300}
					transitionLeaveTimeout = {300}
				>
					{posts.map((post, index) =>
						<Post
							key={post.id}
							{...post}
							index={index}
							postDelete={postDelete}
							onSavePost={this.onSavePost}
						/>
					)}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
	posts: state.todos.toJS().posts,
	loading: state.todos.toJS().loading.value,
	error: state.todos.toJS().error
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