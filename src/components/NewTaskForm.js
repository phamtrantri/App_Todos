/**
 * Created by phamtrantri on 8/31/2016.
 */
import React from 'react';

class NewTaskForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        const name = this.refs.taskName.value;
        const status = this.refs.taskStatus.value;
        this.props.addTask(name,status);
        this.props.history.push('/');
        //this.context.router.push('/');
    }
    render() {
        return (
            <div className="newTaskForm">
                <form className="newform w3-card-2 w3-light-grey w3-animate-opacity" ref = "newTask" onSubmit={this.onSubmit.bind(this)}>
                    <label className="w3-myfont">
                        <strong>Task Name:</strong> <br/>
                    </label>
                    <input className="w3-input w3-animate-input w3-light-grey"
                           type="text"
                           placeholder="Your new task"
                           ref="taskName"
                           required="true"/> <br/>
                    <label className="w3-myfont">
                        <strong>Status: </strong>
                    </label>
                    <select className="w3-select w3-input" ref="taskStatus" required="true">
                        <option value ="" selected="true" disabled="true">Your option</option>
                        <option value="Will_Do">To do</option>
                        <option value="In_Progress">In progress</option>
                        <option value="Done">Done</option>
                    </select> <br/>
                    <input className="w3-btn w3-round w3-hover-khaki newtask-button-text" type="submit" value="Add task"/>
                </form>
            </div>
        )
    }
}
export default NewTaskForm