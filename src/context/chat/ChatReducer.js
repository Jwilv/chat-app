

export const ChatReducer = (state, action) => {
    switch (action.type) {
        case 'getUsers':
            return{
                ...state,
                users:[...action.payload]
            }
        default:
            return state;
    }
}