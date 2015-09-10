import * as React from 'react';
import Parent from './components/home/parent';

class Main extends React.Component<any, any> {
	render() {
		return (
			<Parent />
		);
	}
}

React.render(React.createElement(Main), document.body);
