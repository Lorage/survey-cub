import React from 'react';

// Takes nodes (int), currentNode (int)
export default class ProgressBar extends React.Component {
    render() {
        return (
            <div className="progress-bar">
                {this.props.nodes.map((node, nodeIndex)=> {
                    return (
                        <div key={nodeIndex} className={"progress-bar-node " + ((this.props.currentNode >= (nodeIndex + 1)) ? "filled" : null) }></div>
                    );
                })}
            </div>
        );
    }
}