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
                            <img height="42" width="42" src="https://pbs.twimg.com/profile_images/494561251737874432/xNY6Xwpe_400x400.png" />
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