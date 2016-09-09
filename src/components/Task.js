/**
 * Created by phamtrantri on 8/28/2016.
 */
import React from 'react';
import Item from './Item';
import {Link} from 'react-router';
class Task extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        const input = this.refs.inputItem.value;
        this.props.addItem(input,this.props.id);
        this.refs.taskForm.reset();

    }
    handleClick(e) {
        e.preventDefault();
        this.props.removeTask(this.props.id);
    }
    render() {
        const items = (this.props.items) ? this.props.items.map(item => (
            <Item key = {item.id}
                  item = {item}
                  status = {this.props.status}
                  task_id = {this.props.id}
                  removeItem = {this.props.removeItem}
            />)) : [];

        return (
            <div className="task-space w3-card-2 w3-light-grey w3-hover-shadow w3-animate-opacity">
                <header className="w3-container">
                    <strong className="TaskName">{this.props.name}</strong>
                    <i className="fa fa-close w3-large w3-hover-red remove-task"  onClick={this.handleClick.bind(this)}/>
                    <Link to={`edit/${this.props.id}`}>
                        <i className="fa fa-pencil-square-o w3-large w3-hover-teal edit-task"/>
                    </Link>
                </header>
                {items}
                <form ref="taskForm" onSubmit={this.onSubmit.bind(this)}>
                    <footer className="item-space w3-light-grey task-footer">
                        <input className="w3-input w3-animate-input w3-light-grey"
                               type="text"
                               placeholder="Things you do"
                               ref = "inputItem"
                               required="true"
                        />
                        <input type="submit" hidden={true}/>
                    </footer>
                </form>
            </div>
        )
    }
}

export default Task