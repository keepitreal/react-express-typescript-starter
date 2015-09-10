import * as React from 'react';

export default class Child extends React.Component<any, any> {
	state = {
		foo: 'bar'
	}

	render() {
		this.props.logFoo();

		return (
			<div>Child</div>
		);
	}
}

