import React from 'react';

export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, option) {
        event.persist();
        this.props.updateAnswer(option, event, this.props.question.id);
    }

    renderInputs(option) {
        if (option.type === "text") {
            return <p>{option.content}</p>
        } else {
            return <img src={option.content} />
        }
    }

    renderQuestion() {
        return this.props.question.type != 'free-response' ? this.props.question.options.map((option) => {
            return (
                <div key={option.id} className={"option-container toggle " + (option.value ? "active" : null)}>
                    <a onClick={(event) => this.handleChange(event, option)}> 
                        {this.renderInputs(option)}
                    </a>
                </div>
            );
        }) : <textarea value={this.props.question.value || ""} onChange={this.handleChange} />;
    }

    render() {
        return (
            <div>
                <h2>{this.props.question.text}</h2>
                <div>
                    {this.renderQuestion()}
                </div>
            </div>
        );
    }
}