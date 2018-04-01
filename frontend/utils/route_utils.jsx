import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
	loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, path, component: Component }) => (
	// path === '/chirps' ? (
	// 	<Route
	// 		path={path}
	// 		render={(props) =>
	// 			loggedIn ? <Component {...props} /> : <Redirect to="/login" />
	// 		}
	// 	/>
	// ) :
	<Route
		path={path}
		render={(props) =>
			loggedIn ? <Redirect to="/" /> : <Component {...props} />
		}
	/>
);

const Protected = ({ loggedIn, path, component: Component }) => (
	<Route
		path={path}
		render={(props) =>
			loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
		}
	/>
);

// <AuthRoute path="" component={} />

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
