import React from 'react';
import {
  Route
} from 'react-router-dom';

import Manager from '../../lib/manager.js';
import Question from './question.js';
import ProgressBar from '../../components/progress-bar.js';

export default class Survey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            survey: Manager.getSurveyById(this.props.match.params.id),
            currentNode: 1,
            answers: []
        };

        this.updateAnswer = this.updateAnswer.bind(this);
        this.nextAnswer = this.nextAnswer.bind(this);
    }

    componentDidMount() {
        // Check for past answers in case users come back from results
        // If no results, go to first question and leave this.state.answers as an empty array
        // Else instantiate the answers array with saved answers
        if (true) {
            this.props.history.push(`${this.props.location.pathname}/1`);
        } else {
            // Load survey data
        }
        
    }

    updateAnswer(newState) {
        this.setState(newState);
    }

    nextAnswer() {
        // Go to next answer
        this.setState({currentNode: this.state.currentNode++});
        this.props.history.push(`/surveys/${survey.id}/${this.state.currentNode}`);
    }

    render() {
        return (
            <div>
                <div className="progress-container">
                    <h2>Progress Bar</h2>
                    {this.state.survey.questions.length && <ProgressBar nodes={this.state.survey.questions} currentNode={this.state.currentNode} />}
                </div>
                <div className="options-container">
                    <Route path="/survey/:id/:questionId" component={() => {
                        return (
                            <Question updateAnswer={this.updateAnswer} question={this.state.survey.questions[this.state.currentNode - 1]} />
                        );
                    }}/>
                </div>
                <div>
                    <button type="submit" onClick={this.nextAnswer}></button>
                </div>
            </div>
        );
    }
}