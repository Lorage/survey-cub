import React from 'react';
import {
  Link
} from 'react-router-dom';

import Manager from '../../lib/manager.js';

export default class Intro extends React.Component {
    constructor(props){
        super(props);
        this.state = {};

        // Init Surveys
        this.state.surveys = Manager.getSurveys();
    }

    render(){
        return (
            <div className="surveys-list-container">
                <div className="header-bar"></div>
                {this.state.surveys.map((survey)=> {
                    <Link to="/survey"> 
                        <div className="survey-item">{survey.name}</div>
                    </Link>
                })}
            </div>
        );
    }
}