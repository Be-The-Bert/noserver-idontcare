const NEW_LIST = 'NEW_LIST';
const DELETE_LIST = 'DELETE_LIST';
const UPDATE_LIST = 'UPDATE_LIST';
const UPDATE_LIST_TITLE = 'UPDATE_LIST_TITLE';
const CHANGE_CURRENT = 'CHANGE_CURRENT';

const initialState = {
    lists: [
        {title: 'Burger places',
         restaurants: [
            {name: 'Five Guys',
            price: 2,
            type: 'american'
            },
            {name: 'chubby\'s',
            price: 2,
            type: 'american'
            }
         ]    
        },
        {title: 'Date Night',
        restaurants: [
            {name: 'India Palace',
            price: 3,
            type: 'indian'
            },
            {name: 'Olive garden',
            price: 3,
            type: 'italian'
            }
         ]
        }        
    ],
    currentList: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NEW_LIST:
            let tempNew = state.lists.concat(action.payload);
            let tempCurrentIndex = tempNew.indexOf(action.payload);
            return Object.assign({}, state, {lists: tempNew, currentList: tempCurrentIndex});
        case DELETE_LIST:
            let tempDelete = [...state.lists];
            tempDelete.splice(action.payload, 1);
            return Object.assign({}, state, {lists: tempDelete, currentList: 0})
        case UPDATE_LIST:
            let listCopy = [...state.lists];
            listCopy[action.payload.index].restaurants = action.payload.updatedArray;
            return Object.assign({}, state, {lists: listCopy});
        case UPDATE_LIST_TITLE:
            let listCopy2 = [...state.lists];
            listCopy2[action.payload.index].title = action.payload.updatedTitle;
            console.log(listCopy2[action.payload.index]);
            return Object.assign({}, state, {lists: listCopy2});
        case CHANGE_CURRENT:
            return Object.assign({}, state, {currentList: action.payload})
        default: 
            return state;
    }
}