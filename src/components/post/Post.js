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
		return (
			<ListGroupItem>
				<Row className="justify-content-between">
					{this.renderLable(this.props.text)}
					<Button loading={this.props.loading} bsStyle="warning" disabled={this.props.isFetching} onClick={this.onSavePost}>Edit</Button>
					<Button bsStyle="danger"  onClick={this.delete} disabled={this.props.isFetching}>Delete</Button>
				</Row>
			</ListGroupItem>
		)
	}
}

export default Post;
