// Core Imports
import React from 'react';

export default class Root extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            survey: {}
        };

        this.updateStateContainer = this.updateStateContainer.bind(this);
    }

    updateStateContainer(newState) {
        this.setState(newState);
    }

    renderChildren(props) {
		return React.Children.map(props.children, child =>
		{
			return React.cloneElement(child, {
                updateStateContainer: this.updateStateContainer,
				survey: this.state.survey
			});
		});
	}

	render()
	{
		return (
            <div>
                {this.renderChildren(this.props)}
            </div>
		);
	}
}
