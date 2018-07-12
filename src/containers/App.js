import React, { Component } from 'react';
import NewTask from './NewTask'
import Routes from '../components/routes/Routes'
import "bootstrap/dist/css/bootstrap.css";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

class App extends Component {

	render () {
		return (
		<div>
			<Grid>
				<Row>
					<Col xs={2} md={2} sm={2} className='offset-3 '>
						<Link to="/"><Button bsStyle="info"> Main Page </Button></Link>
					</Col>
					<Col xs={1} md={1} sm={1} className=' '>
						<Link to="/about/255/0/52"><Button bsStyle="info">About</Button></Link>
					</Col>
				</Row>
				<br/>
				<Row>
					<Col xs={6} md={6} sm={6} className='offset-3'>
						<NewTask />
					</Col>
				</Row>
				<br/>
				<Row>
					<Col xs={6} md={6} sm={6} className='offset-3'>
						<Routes />
					</Col>
				</Row>
			</Grid>
		</div>)
	}
};

export default App;