import React, {Component} from 'react'
import {  FormGroup, Form, FormControl , Modal} from "react-bootstrap";
import Button from 'react-bootstrap-button-loader';

class ModalInput extends Component {
	constructor() {
		super(...arguments);

		this.state = {editing: false};
	}

	edit = () => {
		this.setState({editing: true});
	}

	stopEdit = () => {
		this.setState({editing: false});
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
							this.props.postEdit(input.value, this.props.id);
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

	render() {
		const editing = this.state.editing;
		const text = this.props.text;
		return (
			<div>
				{editing ? this.renderModalInput(text) : null}
				<Button loading={this.props.loading} bsStyle="warning"  onClick={this.edit}>Edit</Button>
			</div>
		);
	}
}

export default ModalInput;