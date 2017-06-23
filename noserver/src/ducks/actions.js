const NEW_LIST = 'NEW_LIST';
const DELETE_LIST = 'DELETE_LIST';
const EDIT_ITEM = 'EDIT_ITEM';

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
export function editItem() {
    return {
        type: EDIT_ITEM
    }
}