

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

        case 'newMessage':
            if ((state.chatActivo === action.payload.de) ||
                (state.chatActivo === action.payload.para)
            ) {
                return {
                    ...state,
                    mensajes: [...state.mensajes, action.payload]
                }
            } else {
                return state;
            }

        case 'updateMessage':
            return{
                ...state,
                mensajes:[...action.payload]
            }

        case 'logout':
            return {
                uid:'',
                chatActivo:null,
                mensajes:[],
                users:[],
            }


        default:
            return state;
    }
}