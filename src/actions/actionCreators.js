/**
 * Created by phamtrantri on 8/29/2016.
 */
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDo6yLtZlEV0WKTQXFxG5AP7qhCQvzK4UA",
    authDomain: "react-firebase-d6d77.firebaseapp.com",
    databaseURL: "https://react-firebase-d6d77.firebaseio.com",
    storageBucket: "react-firebase-d6d77.appspot.com",
};
firebase.initializeApp(config);
const Tasks = firebase.database().ref().child('tasks');
export const fetchInitialData = () => {
    return (dispatch) => {
        Tasks.on('value', snap => {
            dispatch({
                type: 'FETCH_TASKS',
                tasks: snap.val()
            })
        })
    }
};
export const addItem = (item, taskid) => {
    return {
        type: 'ADD_ITEM',
        taskid,
        item
    }
};
export const removeItem = (task_id, id) => {
    return {
        type: 'REMOVE_ITEM',
        task_id,
        id
    }
};
export const addTask = (name, status) => {
    return {
        type: 'ADD_TASK',
        name,
        status
    }
};
export const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        id
    }
};
export const editTask = (id, name, status,items) => {
    return {
        type: 'EDIT_TASK',
        id,
        name,
        status,
        items
    }
};