// Core imports
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Component/View imports
import SurveyList from './views/surveyList/surveyList.js';
import Survey from './views/Survey/survey.js';
import Question from './views/Survey/question.js';
import Results from './views/results/results.js';

// CSS
import '../assets/style/main.css';

// Root component
class Root extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={SurveyList} />
                    <Route path="/survey/:id" component={Survey} />
                    <Route exact path="/results" component={Results} />
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// SurveyList -> Click on Survey
// 