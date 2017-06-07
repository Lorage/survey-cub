// Core imports
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// Component/View imports
import Intro from './views/intro/intro.js';
import Question from './views/question/question.js';
import Results from './views/results/results.js';

// CSS
import '../assets/style/main.css';

// Root component
class Root extends React.Component {

    render() {
        const routes = [
            { 
                path: '/',
                component: Intro,
            },
            { 
                path: '/question/:questionid',
                component: Question,
            },
            { 
                path: '/results/:resultid',
                component: Results,
            },
        ];

        return (
            <BrowserRouter>
                <div>
                    {routes.map((route, i) => (
                        <Route exact path={route.path} component={route.component}/>
                    ))}
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));