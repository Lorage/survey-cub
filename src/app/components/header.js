import React from 'react';
import {
  Link
} from 'react-router';

// Takes nodes (int), currentNode (int)
export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="title-section">
                    <Link to="/surveys">
                        <div></div>
                    </Link>
                    <div>Survey Cub</div>
                </div>
                <div className="user-section">
                    <div></div>
                </div>
            </div>
        );
    }
}