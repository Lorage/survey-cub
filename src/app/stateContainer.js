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

    updateStateContainer() {
        this.setState(newState);
    }

    renderChildren(props) {
		return React.Children.map(props.children, child =>
		{
			return React.cloneElement(child, {
				toggleSidebar: this.toggleSidebar,
				showBackButton: this.showBackButton,
				hideBackButton: this.hideBackButton,
				changeTransitionClass: this.changeTransitionClass,
				key: child.type.name,
				startOrderProcess: this.startOrderProcess
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
