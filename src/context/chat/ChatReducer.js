

export const ChatReducer = (state, action) => {
    switch (action.type) {
        case 'getUsers':
            return {
                ...state,
                users: [...action.payload]
            }
        case 'setActive':

            if (state.chatActivo === action.payload) {
                return state;
            }

            return {
                ...state,
                chatActivo: action.payload,
            }

            
        default:
            return state;
    }
}