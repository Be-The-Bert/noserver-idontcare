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
            price: '$$',
            type: 'american'
            },
            {name: 'chubby\'s',
            price: '$$',
            type: 'american'
            },
            {name: 'Tommy\'s',
            price: '$',
            type: 'american'
            },
            {name: 'Red Robin',
            price: '$$$',
            type: 'american'
            },
            {name: 'Smashburger',
            price: '$$',
            type: 'american'
            },
            {name: 'In-and-Out',
            price: '$',
            type: 'american'
            },
            {name: 'Burger Supreme',
            price: '$',
            type: 'american'
            }
         ]    
        },
        {title: 'Date Night',
        restaurants: [
            {name: 'India Palace',
            price: '$$$',
            type: 'indian'
            },
            {name: 'Olive garden',
            price: '$$$',
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
            console.log(action.payload);
            let tempDelete = state.lists.slice();
            tempDelete.splice(action.payload, 1);
            console.log(tempDelete);
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