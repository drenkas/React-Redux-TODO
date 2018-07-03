import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { ListGroupItem, Button, FormGroup, Form, FormControl , Row, Modal} from "react-bootstrap";

class Post extends Component {
	constructor() {
		super(...arguments);

		this.state = {editing: false};

		this.edit = this.edit.bind(this);
		this.stopEdit = this.stopEdit.bind(this);
		this.delete = this.delete.bind(this);
	}

	edit() {
		this.setState({editing: true});
	}

	stopEdit() {
		this.setState({editing: false});
	}

	delete() {
		this.props.postDelete(this.props.id);
	}

	renderModalInput(text) {
		let input;

		return (
			<div className="static-modal">
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>Modal title</Modal.Title>
					</Modal.Header>
					<Modal.Body>
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
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="danger" onClick={this.stopEdit}>Close</Button>
					</Modal.Footer>
				</Modal.Dialog>
			</div>
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
					{editing ? this.renderModalInput(text) : null}
						{this.renderLable(text)}
					<Button bsStyle="warning"  onClick={this.edit}>Edit</Button>
					<Button bsStyle="danger"  onClick={this.delete}>Delete</Button>
				</Row>
			</ListGroupItem>
		)
	}
}

export default Post;
