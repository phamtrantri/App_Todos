    /**
 * Created by phamtrantri on 9/2/2016.
 */
import React from 'react';
//import EditItem from './EditItem';
class EditTask extends React.Component {
    onSubmit(task, e) {
        e.preventDefault();
        const name = this.refs.edit_taskName.value;
        const status = this.refs.edit_taskStatus.value;
        const items = task.items.map(item =>
            {
                return (
                    {
                        id: item.id,
                        name: this.refs[item.id].value
                    }
                )
            }
        );
        this.props.editTask(this.props.params.task_id,name,status,items);
        this.props.history.push('/');

    }
    render() {
        const id = this.props.params.task_id;
        const index = this.props.tasks.findIndex(task => task.id == id);
        const task = this.props.tasks[index];
        const items = (task.items) ? task.items.map(item => (
            <div className="w3-animate-bottom item-space ">
                <input className="w3-input w3-animate-input w3-light-grey "
                       type="text"
                       key = {item.id}
                       ref={item.id}
                       defaultValue={item.name}
                       required="true"/>
                <br/>
            </div>
        )) : [];

        return (
                <div className="newTaskForm">
                    <form className="newform w3-card-2 w3-light-grey w3-animate-opacity" ref = "editTask"
                          onSubmit={this.onSubmit.bind(this,task)}>
                        <label className="w3-myfont">
                            <strong>Task Name:</strong> <br/>
                        </label>
                        <input className="w3-input w3-animate-input w3-light-grey"
                               type="text"
                               ref="edit_taskName"
                               defaultValue={task.name !== undefined ? task.name : ''}
                               required="true"/> <br/>
                        <label className="w3-myfont">
                            <strong>Status: </strong>
                        </label>
                        <select className="w3-select w3-input" ref="edit_taskStatus" required="true" defaultValue={task.status}>
                            <option value="Will_Do">To do</option>
                            <option value="In_Progress">In progress</option>
                            <option value="Done">Done</option>
                        </select> <br/>
                        {items} <br/>
                        <input className="w3-btn w3-round w3-hover-khaki newtask-button-text" type="submit" value="Edit task"/>
                    </form>
                    <div className="push"></div>
                </div>
        )
    }
}
export default EditTask