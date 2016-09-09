import React, { Component } from 'react';
import '../style/App.css';
import ListTask from './ListTask';

import {Link} from 'react-router';
/*
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDo6yLtZlEV0WKTQXFxG5AP7qhCQvzK4UA",
    authDomain: "react-firebase-d6d77.firebaseapp.com",
    databaseURL: "https://react-firebase-d6d77.firebaseio.com",
    storageBucket: "react-firebase-d6d77.appspot.com",
  };
firebase.initializeApp(config);
*/
class App extends Component {
    render() {
        return (
            <div>
                <ListTask status = "To Do"
                          tasks = {this.props.tasks.filter( task => (task.status === "Will_Do"))}
                          addItem = {this.props.addItem}
                          removeTask = {this.props.removeTask}
                          removeItem = {this.props.removeItem}
                />
                <ListTask status = "In Progress"
                          tasks = {this.props.tasks.filter( task => (task.status === "In_Progress"))}
                          addItem = {this.props.addItem}
                          removeTask = {this.props.removeTask}
                          removeItem = {this.props.removeItem}
                />
                <ListTask status = "Done"
                          tasks = {this.props.tasks.filter( task => (task.status === "Done"))}
                          addItem = {this.props.addItem}
                          removeTask = {this.props.removeTask}
                          removeItem = {this.props.removeItem}
                />
            </div>
            );
    }
}

export default App;
