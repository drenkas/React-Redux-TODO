import React from 'react';
import { postAdd } from '../action';
import { connect } from 'react-redux'
import "bootstrap/dist/css/bootstrap.css";
import { Button, FormGroup, Form, FormControl} from "react-bootstrap";


let NewTask = ({dispatch}) => {{
	let addInput;

	return (
		<div>
			<Form inline 
			className="justify-content-between"
			onSubmit={e => {
				e.preventDefault()
				if (!addInput.value.trim()) {
					return
				}
				dispatch(postAdd(addInput.value))
				addInput.value = ''
			}}>
				<FormGroup>
					<FormControl
					maxLength="20"
					type="text"
					placeholder="Enter a task" inputRef={node => {
						addInput = node
					}}/>
				</FormGroup>
				<Button type="submit">
						Add Post
				</Button>
			</Form>
		</div>
	)
}}

NewTask = connect()(NewTask);

export default NewTask;