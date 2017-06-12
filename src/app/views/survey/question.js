import React from 'react';

export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

/*    componentDidMount() {
        if (this.props.question.type === 'free-response') {
            focus()
        }
    }*/

    shouldComponentUpdate() {
        return false;
    }

    handleChange(event, option) {
        event.target.focus();
        console.log(event.target, event.name, event.type, this.props);
        event.persist();
        this.props.updateAnswer(option, event, this.props.question.id);
        event.target.focus();
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
                {console.log(this.props)}
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