import React, {Component} from 'react'
import { ListGroupItem,   Row} from "react-bootstrap";
import Button from 'react-bootstrap-button-loader';
import ModalInput from './Modal'

class Post extends Component {
	/* constructor() {
		super(...arguments);

		this.state = {editing: false};
	}

	edit = () => {
		this.setState({editing: true});
	}

	stopEdit = () => {
		this.setState({editing: false});
	} */

	delete = () => {
		this.props.postDelete(this.props.id);
	}

	/* renderModalInput(text) {
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
							this.props.postEdit(input.value, this.props.id);
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
	  } */

	renderLable(text) {
		return (
			<div style={{width: "60%"}}>
				{text}
			</div>
		);
	}

	render() {
		const text = this.props.text;

		return (
			<ListGroupItem>
				<Row className="justify-content-between">
					{this.renderLable(text)}
					<ModalInput {...this.props}/>
					<Button bsStyle="danger"  onClick={this.delete}>Delete</Button>
				</Row>
			</ListGroupItem>
		)
	}
}

export default Post;
