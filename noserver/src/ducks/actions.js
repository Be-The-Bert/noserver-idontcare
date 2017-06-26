const NEW_LIST = 'NEW_LIST';
const DELETE_LIST = 'DELETE_LIST';
const UPDATE_LIST = 'UPDATE_LIST';
const UPDATE_LIST_TITLE = 'UPDATE_LIST_TITLE';
const CHANGE_CURRENT = 'CHANGE_CURRENT';

export function newList(title, restaurants) {
    return {
        type: NEW_LIST,
        payload: {
            title: title,
            restaurants: restaurants
        }
    }
}
export function deleteList(index) {
    return {
        type: DELETE_LIST,
        payload: index
    }
}
export function updateList(updatedArray, index) {
    
    return {
        type: UPDATE_LIST,
        payload: {
            updatedArray: updatedArray,
            index: index
        }
    }
}
export function updateListTitle(updatedTitle, index) {
    
    return {
        type: UPDATE_LIST_TITLE,
        payload: {
            updatedTitle, 
            index
        }
    }
}
export function changeCurrent(index) {
    console.log('action');
    return {
        type: CHANGE_CURRENT,
        payload: index
    }
}