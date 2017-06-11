import React from 'react';

export default class Question extends React.Component {
    markOption(option) {
        this.props.updateAnswer();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(event);
        this.setState({
            [name]: value
        });
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
                <a key={option.id} className={"toggle " + (option.marked ? "active" : null)} onClick={this.handleChange}> 
                    {this.renderInputs(option)}
                </a>
            );
        }) : <textinput onChange={this.handleChange} />;
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

// On submit, run function, update parent container state, and then push to next question,
// If last question, push to results, pull question history