import * as React from 'react';
import Child from './child';

export default class Parent extends React.Component<any, any> {
	state = {
		foo: 'bar'
	}

	logFoo() {
		console.log(this.state.foo);
	}

	render() {
		return (
			<Child
				logFoo={this.logFoo}
				logFooAnon={() => this.logFoo()} />
		);
	}
}

