import * as React from 'react';

export default class Child extends React.Component<any, any> {
	render() {
		this.props.logFooAnon();
		this.props.logFoo();

		return (
			<div>Child</div>
		);
	}
}
