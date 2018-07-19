import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import VisiblePostList from '../../containers/VisiblePostList'
import About from '../about/About'

function Routes({ location }) {
	return (
		<TransitionGroup className="transition-group">
			<CSSTransition
				key={location.key}
				timeout={{ enter: 300, exit: 300 }}
				classNames="fade"
			>
				<section className="route-section">
					<Switch location={location}>
						<Route exact path='/' component={VisiblePostList}/>
						<Route path='/about/:r/:g/:b' component={About}/>
						<Route render={() => <div>Not Found</div>} />
					</Switch>
				</section>
			</CSSTransition>
		</TransitionGroup>
	);
}


export default withRouter(Routes);