/**
 * Created by phamtrantri on 8/28/2016.
 */
import React from 'react';
class Item extends React.Component {
    onClick(e) {
        e.preventDefault();
        this.props.removeItem(this.props.task_id, this.props.item.id);
    }
    render() {
        return (
            <div className="w3-animate-bottom item-space hover-remove">
                <input className="w3-check " type="checkbox"
                       value={this.props.item.id}
                       defaultChecked={this.props.status ==="Done" || this.props.item.checked === "true"}
                />
                <label className="w3-validate "><strong>{this.props.item.name}</strong></label>
                <i className="fa fa-close w3-hover-red remove-item"
                   onClick = {this.onClick.bind(this)}/>
            </div>

        )
    }
}
export default Item

