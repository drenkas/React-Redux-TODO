import React, {Component} from 'react'
import {  FormGroup, Form, FormControl , Modal} from "react-bootstrap";
import Button from 'react-bootstrap-button-loader';

class ModalInput extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.inputNode.value.trim()) {
			return
		}
		this.props.modalChange();
		this.props.postEdit(this.inputNode.value, this.props.id);
	}

	render() {
		const text = this.props.text;
		return (
			<div className="static-modal">
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>Modal title</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form inline 
						className="justify-content-between"
						onSubmit={this.handleSubmit}>
							<FormGroup controlId="formEditTodo">
								<FormControl defaultValue={text}
									maxLength="20"
									type="text"
									inputRef={node => {
										this.inputNode = node
								}}/>
							</FormGroup>
							<Button bsStyle="success" type="submit">Done</Button>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="danger" onClick={this.props.modalChange}>Close</Button>
					</Modal.Footer>
				</Modal.Dialog>
			</div>
		);
	}
}

export default ModalInput;