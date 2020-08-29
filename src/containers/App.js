import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
	return {
		// aka state.searchField if only one reducer was in the store.
		// Comes from the reducer, which is from the store that is passed via Provider component.
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.pending,
		error: state.requestRobots.error
	}
}

// Used to send actions. Flux pattern.
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
		// Equivalent to requestRobots(dispatch) where requestRobots is expecting the dispatch function.
	}
}

// Syntax to be able to use state.
class App extends Component {
	// Constructor no longer needed now that state isn't stored in App component.
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return isPending ?
			<h1>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);