import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from "react-bootstrap";

class About extends Component {
	constructor() {
		super(...arguments);
		this.state = {params: this.props.match.params};
	}

	componentDidMount() {
		let root = document.getElementById("useless-btn");
		root.style.marginLeft = '20px';
		root.style.background = `rgb(${this.state.params.r}, ${this.state.params.g}, ${this.state.params.b})`;
	}
	render() {
		return (
			<div>
				<div>This is cool todo app. Color BG in RGB: {this.state.params.r}, {this.state.params.g}, {this.state.params.b}.</div>
				<Row>
					<Col xs={2} md={2} sm={2} >
						<Link to="/about/128/0/0"><Button bsStyle="default"> Maroon </Button></Link>
					</Col>
					<Col xs={2} md={2} sm={2} >
						<Link to="/about/0/0/128"><Button bsStyle="default">Navy</Button></Link>
					</Col>
					<Col xs={2} md={2} sm={2} >
						<Link to="/about/107/142/35"><Button bsStyle="default">Olive drab</Button></Link>
					</Col>
					<Col xs={2} md={2} sm={2} >
						<Button bsStyle="default" id="useless-btn">Useless Button</Button>
					</Col>
				</Row>
			</div>
		);
	}
}

export default About;