/**
 * Created by phamtrantri on 8/28/2016.
 */
import {createStore, compose, applyMiddleware} from 'redux';
import {tasks} from './data/data';
import rootReducer from './reducer/index';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';
const defaultState = {
    tasks: []
};
const enchancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, defaultState ,enchancers);
export const history = syncHistoryWithStore(browserHistory, store);


export default store;