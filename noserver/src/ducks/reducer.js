


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
            
    ]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default: 
            return state
    }
}