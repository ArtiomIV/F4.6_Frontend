const initialState = [[{id:'', name:'', price:'', category:''}]]

function recipes(state = initialState, action) {
    switch (action.type) {
        case 'ADD_RECIPES':
            return [action.payload]
            break;
        case 'DELETE_RECIPES':
            return [...state]
            break;
        default: state
    }
}

export default recipes;