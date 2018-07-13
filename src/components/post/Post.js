import React, {Component} from 'react'
import { ListGroupItem,   Row} from "react-bootstrap";
import Button from 'react-bootstrap-button-loader';


class Post extends Component {
	delete = () => {
		this.props.postDelete(this.props.id);
	}

	onSavePost = (index) => {
		this.props.onSavePost(this.props.index);
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
		console.log("props", this.props);
		return (
			<ListGroupItem>
				<Row className="justify-content-between">
					{this.renderLable(text)}
					<Button loading={this.props.loading} bsStyle="warning"  onClick={this.onSavePost}>Edit</Button>
					<Button bsStyle="danger"  onClick={this.delete}>Delete</Button>
				</Row>
			</ListGroupItem>
		)
	}
}

export default Post;
