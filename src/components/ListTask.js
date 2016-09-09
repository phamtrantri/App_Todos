/**
 * Created by phamtrantri on 8/28/2016.
 */
import React from 'react';
import Task from './Task';

class ListTask extends React.Component {
    render() {
        return (
            <div className="w3-card-2 ListTask">
                <strong className="w3-myfont">{this.props.status}</strong>
                {this.props.tasks.map(task => ( <Task key = {task.id}
                                                      id = {task.id}
                                                      items = {task.items}
                                                      name = {task.name}
                                                      status = {task.status}
                                                      addItem = {this.props.addItem}
                                                      removeTask = {this.props.removeTask}
                                                      removeItem = {this.props.removeItem}
                />) )}

            </div>
        )
    }
}
export default ListTask