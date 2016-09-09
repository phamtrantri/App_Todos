/**
 * Created by phamtrantri on 9/3/2016.
 */
export const task_guid =() => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};

export const item_guid = () => {
    return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + '-' + s4() + '-' + s4();
};

const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};
