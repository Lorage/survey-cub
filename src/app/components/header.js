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
                        <div>
                            <img height="43" width="43" src="https://avatars3.githubusercontent.com/u/7266806?v=3&s=460" />
                        </div>
                    </Link>
                    <div>
                        Survey Cub
                    </div>
                </div>
                <div className="user-section">
                    <div></div>
                </div>
            </div>
        );
    }
}