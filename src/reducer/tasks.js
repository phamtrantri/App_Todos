/**
 * Created by phamtrantri on 8/29/2016.
 */
import items from './items';
import {task_guid}  from '../data/guid';
const tasks = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TASKS':
            return action.tasks;
        case 'ADD_ITEM':
            const i = state.findIndex((task) => task.id === action.taskid);
            return [
                ...state.slice(0,i),
                {...state[i], items: items(state[i].items, action)},
                ...state.slice(i).slice(1)
            ];
        case 'REMOVE_ITEM':
            const remove_index = state.findIndex((task) => task.id === action.task_id);
            console.log(remove_index);
            return [
                ...state.slice(0,remove_index),
                {...state[remove_index], items: items(state[remove_index].items, action)},
                ...state.slice(remove_index).slice(1)
            ];
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: task_guid(),
                    status: action.status,
                    name: action.name,
                    item: []
                }
            ];
        case 'REMOVE_TASK':
            const removeid = action.id;
            return (
                state.filter((task) => task.id !== removeid)
            );
        case 'EDIT_TASK':
            const editid = action.id;
            const index = state.findIndex((task) => task.id == editid);
            return [
                ...state.slice(0,index),
                {
                    ...state[index],
                    status: action.status,
                    name: action.name,
                    items: action.items

                },
                ...state.slice(index).slice(1)
            ];
    }
    return state;
};
export default tasks