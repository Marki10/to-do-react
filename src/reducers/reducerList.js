const listReducer = (state = {
    contentStatus: 'empty',
    user: '',
    currentItem: {
        id: 0,
        title: '',
        description: '',
        author: '',
        createDate: '',
        deadLine: '',
        status: ''
    },
    list: [
        {
            id: 1,
            title: 'First',
            description: 'This is the first task!',
            author: 'Admin',
            createDate: '2018-01-01',
            deadLine: '2019-01-01',
            status: 'active'
        },
        {
            id: 2,
            title: 'Secound',
            description: 'This is the first task!',
            author: 'Me',
            createDate: '2018-01-01',
            deadLine: '2019-01-01',
            status: 'active'
        }
    ]
}, action) => {
    switch(action.type) {
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
        case "FETCH_LIST_FULFILLED": {
            state = {...state, title: action.payload};
            break;
        }
        case "DELETE_ITEM": {
            let position = state.list.findIndex(x => x.id === action.payload);
            state = {...state, list: [
                ...state.list.slice(0, position),
                ...state.list.slice(position + 1)],
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