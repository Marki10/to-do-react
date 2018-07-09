const initialState = {
    contentStatus: 'empty',
    currentItem: {
        id: 0,
        title: '',
        description: '',
        author: '',
        createDate: '',
        deadLine: '',
        status: ''
    },
    list: [ ]
}

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_TODOS_START": {
            console.log("Start featching!");
            break;
        }
        case "RECEIVE_TODOS": {
            state = {...state,
                list: action.payload
            };
            break;
        }
        case "FETCH_TODOS_ERROR": {
            console.log("Error: " + action.payload);
            break;
        }
        case "ADD_LIST_ITEM": {
            state = {...state, 
                list: [...state.list, action.payload],
                currentItem: action.payload,
                contentStatus: 'display'
            };
            break;
        }
        case "EDIT_LIST_ITEM": {
            let position = state.list.findIndex(x => x.id === action.payload.id);
            state = {...state,
                ...state.list[position] = action.payload,
                list: [...state.list],
                currentItem: action.payload,
                contentStatus: 'display'
            };
            break;
        }
        case "SET_CURRENT_ITEM": {
            state = {...state, 
                currentItem: state.list[action.payload],
                contentStatus: 'display' 
            };
            break;
        }
        case "DELETE_ITEM": {
            state = {...state, list: [
                ...state.list.slice(0, action.payload),
                ...state.list.slice(action.payload + 1)],
                contentStatus: 'empty'
            };
            break;
        }
        case "ARCHIVE_ITEM": {
            let status = (state.list[action.payload].status === 'archive') ? 'active' : 'archive';

            state = {...state,
                ...state.list[action.payload].status = status,
                currentItem: state.list[action.payload],
                list: [...state.list],
                contentStatus: 'display'
            };
            break;
        }
        case "CHANGE_TO_ADD": {
            state = {...state,
                contentStatus: 'add'
            };
            break;
        }
        case "CHANGE_TO_EDIT": {
            state = {...state, 
                currentItem: state.list[action.payload],
                contentStatus: 'edit' 
            };
            break;
        }
        default:
    }

    return state;  	
};

export default listReducer;