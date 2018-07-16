import React from 'react';
import { postAdd } from '../action';
import { connect } from 'react-redux'
import { Button, FormGroup, Form, FormControl} from "react-bootstrap";

class NewTask extends React.Component{

	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.input.value.trim()) {
			return
		}
		this.props.dispatch(postAdd(this.input.value))
		this.input.value = ''
	}

	render() {
		return (
			<div>
				<Form inline 
				className="justify-content-between"
				onSubmit={this.handleSubmit}>
					<FormGroup>
						<FormControl
						maxLength="20"
						type="text"
						placeholder="Enter a task" inputRef={node => {
							this.input = node
						}}/>
					</FormGroup>
					<Button type="submit">
							Add Post
					</Button>
				</Form>
			</div>
		)
	}
}

export default connect()(NewTask);
