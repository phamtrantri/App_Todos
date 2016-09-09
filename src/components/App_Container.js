/**
 * Created by phamtrantri on 8/28/2016.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};
const App_Container = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App_Container