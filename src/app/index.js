// Core Imports
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRedirect, IndexRoute } from 'react-router';

// Component/View imports
import SurveyList from './views/surveyList/surveyList.js';
import Survey from './views/Survey/survey.js';
import Question from './views/Survey/question.js';
import Results from './views/results/results.js';
import StateContainer from './stateContainer.js';

// CSS
import '../assets/style/main.css';

let testingCheck = process.env.NODE_ENV === 'testing';
let historyType = testingCheck ? hashHistory : browserHistory;

class Root extends React.Component 
{
	render()
	{
		return (
			<Router history={historyType}>
				<Route path="/" component={StateContainer}>
					<IndexRedirect to="/surveys" />
					<Route path="/surveys" component={SurveyList} />
                    <Route path="/survey/:id" component={Survey}>
                        <Route exact path="/survey/:id/:questionId" component={Question} />
                    </Route>
                    <Route exact path="/results" component={Results} />
				</Route>
			</Router>
		);
	}
}

if (!testingCheck) render(<Root />, document.getElementById('root'));