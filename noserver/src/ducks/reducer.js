const NEW_LIST = 'NEW_LIST';
const DELETE_LIST = 'DELETE_LIST';
const EDIT_ITEM = 'EDIT_ITEM';

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
    editItem: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NEW_LIST:
            let tempNew = state.lists.concat(action.payload);
            return Object.assign({}, state, {lists: tempNew});
        case DELETE_LIST:
            let tempDelete = [...state.lists];
            tempDelete.splice(action.payload, 1);
            return Object.assign({}, state, {lists: tempDelete})
        case EDIT_ITEM:
            return Object.assign({}, state, {editItem: !state.editItem})
        default: 
            return state;
    }
}