import React from 'react';
import Post from './Post';
import "bootstrap/dist/css/bootstrap.css";
import { ListGroup } from "react-bootstrap";

class PostList extends React.Component {
	componentWillMount() {
		const posts = this.props.loadPost();
		console.log('PROMISE', posts)
	}
	render() {
		const { posts, postDelete, postEdit } = this.props;
		console.log('POSTLIST PROOPS', this.props);
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

export default PostList;