import React, {Component} from 'react'
import { ListGroupItem,   Row} from "react-bootstrap";
import Button from 'react-bootstrap-button-loader';
import PropTypes from 'prop-types';

class Post extends Component {

	static propTypes = {
		postDelete: PropTypes.func.isRequired,
		onSavePost: PropTypes.func.isRequired,
		text: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		index: PropTypes.number.isRequired,
		isFetching: PropTypes.bool.isRequired,
		loading: PropTypes.bool.isRequired
	}

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
