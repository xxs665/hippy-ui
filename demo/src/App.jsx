import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Platform,
} from '@hippy/react';
import {
	MemoryRouter,
	HashRouter,
	Route,
} from "react-router-dom";

import Index from './pages/home';
import IconPage from './pages/Icon';
import AvatarPage from './pages/Avatar';
import DividerPage from './pages/Divider';

const pages = [
	{ path: 'icon', component: IconPage },
	{ path: 'avatar', component: AvatarPage },
	{ path: 'divider', component: DividerPage },
]
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		paddingTop: 120,
	}
});

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = ({
			pageIndex: 0,
		});
	}

	render() {
		const Router = Platform.OS === 'web' ? HashRouter : MemoryRouter;
		return (
			<View style={styles.container}>
				<Router>
					<Route exact path="/">
						<Index />
					</Route>
					{
						pages.map(Item => <Route key={Item.path} path={`/${Item.path}`}><Item.component /></Route>)
					}
				</Router>
			</View>
		);
	}
}
