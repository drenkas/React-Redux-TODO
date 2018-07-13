import React, {Component} from 'react'
import {  FormGroup, Form, FormControl , Modal} from "react-bootstrap";
import Button from 'react-bootstrap-button-loader';

class ModalInput extends Component {


	render() {
		let input;
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
						onSubmit={e => {
							e.preventDefault()
							if (!input.value.trim()) {
								return
							}
							this.props.modalChange();
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
						<Button bsStyle="danger" onClick={this.props.modalChange}>Close</Button>
					</Modal.Footer>
				</Modal.Dialog>
			</div>
		);
	}
}

export default ModalInput;