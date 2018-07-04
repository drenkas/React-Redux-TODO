import React, { Component } from 'react';
import NewTask from '../containers/NewTask'
import VisiblePostList from '../containers/VisiblePostList'
import "bootstrap/dist/css/bootstrap.css";
import { Grid, Row, Col } from "react-bootstrap";

class WebPage extends Component {

	render () {
		return (
		<div>
			<Grid>
				<Row>
					<Col xs={6} md={6} sm={6} className='offset-3'>
						<NewTask />
					</Col>
				</Row>
				<br/>
				<Row>
					<Col xs={6} md={6} sm={6} className='offset-3'>
						<VisiblePostList />
					</Col>
				</Row>
			</Grid>
		</div>)
	}
};

export default WebPage;