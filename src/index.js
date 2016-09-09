import React from 'react';
import ReactDOM from 'react-dom';
import App_Container from './components/App_Container'
import './style/index.css';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import store, {history} from './store';
import NewTaskForm from './components/NewTaskForm';
import App from './components/App';
import EditTask from './components/EditTask';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App_Container}>
                <IndexRoute component={App}> </IndexRoute>
                <Route path="new" component={NewTaskForm}> </Route>
                <Route path="edit/:task_id" component={EditTask}> </Route>
            </Route>
        </Router>
    </Provider>
);


ReactDOM.render(
  router,
  document.getElementById('root')
);
