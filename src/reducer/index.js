/**
 * Created by phamtrantri on 8/28/2016.
 */
import {combineReducers} from 'redux';
import tasks from './tasks'
import  {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    tasks,
    routing: routerReducer
});
export default rootReducer