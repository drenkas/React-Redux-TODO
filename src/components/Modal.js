import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { ListGroup } from "react-bootstrap";

class Modal extends React.Component {
	
	render() {
		const { posts, postDelete, postEdit } = this.props;
		console.error('POSTLIST PROOPS', this.props);
		return (
			<ListGroup>
				{posts.map(post => 
					<Post
						key={post.id}
						{...post}
						postEdit={postEdit}
						postDelete={() => postDelete(post.id)}
					/>
				)}
			</ListGroup>
		)
	}
}

export default Modal;