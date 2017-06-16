import React from 'react';
import {
  Link
} from 'react-router';

import Header from '../../components/header.js';

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        this.finish = this.finish.bind(this);
    }

    getAnswers(question) {
        if (question.type === "image" || question.type === "text-multiselect") {
            return question.options.map((option) => {
                if (option.hasOwnProperty('value') && option.value === true) {
                    return (question.type === "image" ? <img key={option.content} src={option.content}/> : <p key={option.content}>{option.content}</p>);
                } 
            });
        } else {
            return <p>{question.value}</p>
        }
    }

    finish() {
        this.props.router.push(`/surveys`);
    }

    render() {
        return (
            <div className="results-container page">
                <Header />
                <div className="results-body">
                    <div className="underline">
                        <h2>We asked you...</h2>
                    </div>
                    <div className="results">
                        {this.props.survey.questions.map((question, nodeIndex) => {
                            return (
                                <div key={nodeIndex}>
                                    <h3>{question.text} </h3>
                                    {this.getAnswers(question)}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="button-container">
                    <button className="submit-button" type="submit" onClick={this.finish}>Finish</button>
                </div>
            </div>
        );
    }
}