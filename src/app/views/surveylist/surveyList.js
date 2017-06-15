import React from 'react';
import {
  Link
} from 'react-router';

import Manager from '../../lib/manager.js';

export default class SurveyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        // Init Surveys
        this.state.surveys = Manager.getSurveys();
    }

    render() {
        return (
            <div className="surveys-list-container">
                <div className="header-bar"></div>
                {this.state.surveys.map((survey)=> {
                    var surveyPath = `/survey/${survey.id}`;
                    return (
                        <Link to={surveyPath} key={survey.name}> 
                            <div className="survey-item">{survey.name}</div>
                        </Link>
                    );
                })}
            </div>
        );
    }
}