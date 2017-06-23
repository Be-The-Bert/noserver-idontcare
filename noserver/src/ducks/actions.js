const NEW_LIST = 'NEW_LIST';
const DELETE_LIST = 'DELETE_LIST';
const UPDATE_LIST = 'UPDATE_LIST';
const UPDATE_LIST_TITLE = 'UPDATE_LIST_TITLE';

export function newList(title, restaurants) {
    return {
        type: NEW_LIST,
        payload: {
            title: title,
            restaurants: restaurants
        }
    }
}
export function deleteList(id) {
    return {
        type: DELETE_LIST,
        payload: id
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
    console.log('action');
    return {
        type: UPDATE_LIST_TITLE,
        payload: {
            updatedTitle, 
            index
        }
    }
}