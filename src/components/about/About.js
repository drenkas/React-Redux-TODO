import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types';

class About extends Component {

	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				r: PropTypes.string.isRequired,
				g: PropTypes.string.isRequired,
				b: PropTypes.string.isRequired
			})
		}),
	}

	componentDidMount() {
		let root = document.getElementById("useless-btn");
		root.style.marginLeft = '20px';
		root.style.background = `rgb(${this.props.match.params.r}, ${this.props.match.params.g}, ${this.props.match.params.b})`;
	}
	render() {
		return (
			<div>
				<div>This is cool todo app. Color BG in RGB: {this.props.match.params.r}, {this.props.match.params.g}, {this.props.match.params.b}.</div>
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