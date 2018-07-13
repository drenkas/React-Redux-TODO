import React, {Component} from 'react'
import { ListGroupItem,   Row} from "react-bootstrap";
import Button from 'react-bootstrap-button-loader';
import ModalInput from './Modal'

class Post extends Component {
	delete = () => {
		this.props.postDelete(this.props.id);
	}

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
