import React from 'react';

export default class Results extends React.Component {

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

    render() {
        return (
            <div className="results-container">
                {this.props.survey.questions.map((question, nodeIndex) => {
                    return (
                        <div key={nodeIndex}>
                            <h3>{question.text} </h3>
                            {this.getAnswers(question)}
                        </div>
                    );
                })}
            </div>
        );
    }
}