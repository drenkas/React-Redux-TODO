import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { ListGroupItem, Button, FormGroup, Form, FormControl , Row} from "react-bootstrap";

class Post extends Component {
	constructor() {
		super(...arguments);

		this.state = {editing: false};

		this.edit = this.edit.bind(this);
		this.stopEdit = this.stopEdit.bind(this);
	}

	edit() {
		this.setState({editing: true});
	}

	stopEdit() {
		this.setState({editing: false});
	}

	renderTitleInput(text) {
		let input;

		return (
			<Form inline 
			className="justify-content-between"
			onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				
				this.stopEdit();
				console.log("DAROVKI", this.props)
				this.props.postEdit(input.value, this.props);
				input.value = ''
			}}>
				<FormGroup controlId="formEditTodo">
					<FormControl defaultValue={text}
						maxLength="20"
						type="text"
						inputRef={node => {
						input = node
					}}/>
				</FormGroup>
				<Button bsStyle="success" type="submit">Done</Button>
			</Form>
		);
	  }

	renderLable(text) {
		return (
			<div style={{width: "60%"}}>
				{text}
			</div>
		);
	}

	render() {
		const editing = this.state.editing;
		const text = this.props.text;

		console.log('POST STATE', this.state.editing);
		console.log('POST PROPS', this.props);
		return (
			<ListGroupItem>
				<Row className="justify-content-between">
					{editing ? this.renderTitleInput(text) : this.renderLable(text)}
					<Button bsStyle="warning" style={{display: !editing ? 'inline' : 'none'}} onClick={this.edit}>Edit</Button>
					<Button bsStyle="danger" style={{display: !editing ? 'inline' : 'none'}} onClick={this.props.postDelete}>Delete</Button>
				</Row>
			</ListGroupItem>
		)
	}
}

export default Post;


/* import React from 'react';
import Post from './Post';
import "bootstrap/dist/css/bootstrap.css";
import { ListGroup } from "react-bootstrap";

class PostList extends React.Component {
	componentWillMount() {
		const posts = this.props.loadPost();
		console.log('PROMISE', posts)
	}
	render() {
		const { posts, postDelete, postEdit } = this.props;
		console.log('POSTLIST PROOPS', this.props);
		return (
			<ListGroup>
				{posts.map(post => 
					<Post
						key={post.id}
						{...post}
						postEdit={postEdit}
						postDelete={() => postDelete(post.id)}
					/>
				)}
			</ListGroup>
		)
	}
}

export default PostList; */

//Стабильная версия
/* 
import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { ListGroupItem, Button, FormGroup, Form, FormControl , Row} from "react-bootstrap";

class Post extends Component {
	constructor() {
		super(...arguments);

		this.state = {editing: false};

		this.edit = this.edit.bind(this);
		this.stopEdit = this.stopEdit.bind(this);
	}

	edit() {
		this.setState({editing: true});
	}

	stopEdit() {
		this.setState({editing: false});
	}

	renderTitleInput(text) {
		let input;

		return (
			<Form inline 
			className="justify-content-between"
			onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				
				this.stopEdit();
				console.log("DAROVKI", this.props)
				this.props.postEdit(input.value, this.props);
				input.value = ''
			}}>
				<FormGroup controlId="formEditTodo">
					<FormControl defaultValue={text}
						maxLength="20"
						type="text"
						inputRef={node => {
						input = node
					}}/>
				</FormGroup>
				<Button bsStyle="success" type="submit">Done</Button>
			</Form>
		);
	  }

	renderLable(text) {
		return (
			<div style={{width: "60%"}}>
				{text}
			</div>
		);
	}

	render() {
		const editing = this.state.editing;
		const text = this.props.text;

		console.log('POST STATE', this.state.editing);
		console.log('POST PROPS', this.props);
		return (
			<ListGroupItem >
				<Row className="justify-content-between">
					{editing ? this.renderTitleInput(text) : this.renderLable(text)}
					
					<Button bsStyle="warning" style={{display: !editing ? 'inline' : 'none'}} onClick={this.edit}>Edit</Button>
					<Button bsStyle="danger" style={{display: !editing ? 'inline' : 'none'}} onClick={this.props.postDelete}>Delete</Button>
				</Row>
			</ListGroupItem>
		)
	}
}

export default Post; */