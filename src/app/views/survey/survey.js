import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Manager from '../../lib/manager.js';
import Question from './question.js';
import Results from '../results/results.js';
import ProgressBar from '../../components/progress-bar.js';

export default class Survey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            survey: Manager.getSurveyById(this.props.match.params.id),
            currentNode: 0,
            answers: []
        };

        this.updateAnswer = this.updateAnswer.bind(this);
        this.nextAnswer = this.nextAnswer.bind(this);
    }

    componentDidMount() {
        // Load first question
        this.props.history.push(`/survey/1/0`);

        this.props.history.listen((location, action) => {
            if (action === "POP" ) {
                var questionNumber = location.pathname.slice(10, 11);
                var newState = {
                    currentNode: questionNumber
                };
                if (window.localStorage.getItem("surveyData") !== null) {
                    var newSurvey = JSON.parse(window.localStorage.getItem("surveyData"));
                    newState.survey = newSurvey;
                }
                
                this.setState(newState);
            }
        });
    }

    managePastData() {
        var pastData = window.localStorage.getItem("lastSurvey");
    }

    updateAnswer(modifiedOption, event, questionId) {
        var newState = {};

        this.setState((prevState) => {
            if (prevState.survey == null) return;
            var newSurvey = prevState.survey;
            var currentQuestion = questionId - 1;

            if (newSurvey.questions[currentQuestion].options.length != 0) {
                newSurvey.questions[currentQuestion].options.forEach((option) => {
                    if (option.id === modifiedOption.id) {
                        option.value = !option.value;
                    }
                });
            } else {
                newSurvey.questions.forEach((question) => {
                    if (questionId === question.id) {
                        newSurvey.questions[currentQuestion].value = event.target.value;
                    }
                });
            }

            return {survey: newSurvey};
        });
    }

    nextAnswer() {
        // Go to next answer or results
        if ((this.state.currentNode + 1) < this.state.survey.questions.length) {
            this.setState({currentNode: this.state.currentNode + 1});
            this.props.history.push(`/survey/${this.state.survey.id}/${Number(this.state.currentNode) + 1}`);
        } else if ((this.state.currentNode + 1) >= this.state.survey.questions.length) {
            window.localStorage.setItem("surveyData", JSON.stringify(this.state.survey));
            this.props.history.push(`/survey/${this.state.survey.id}/results`);
        }
    }

    render() {
        return (
            <div>
                <div className="progress-container">
                    <h2>Progress Bar</h2>
                    <ProgressBar nodes={this.state.survey.questions} currentNode={this.state.currentNode + 1} />
                </div>
                <div className="options-container">
                    <Route exact path="/survey/:id/:questionId" component={() => {
                        return (
                            <Question updateAnswer={this.updateAnswer} 
                                question={this.state.survey.questions[this.state.currentNode]}
                                questionIndex={this.state.currentNode} />
                        );
                    }}/>

                    <Route exact path="/survey/:id/results" component={() => {
                        return (
                            <Results survey={this.state.survey} />
                        );
                    }} />
                
                </div>
                
                <div className="button-container">
                    <button className="submit-button" type="submit" onClick={this.nextAnswer}>Next Question</button>
                </div>
            </div>
        );
    }
}