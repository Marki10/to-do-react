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
            state = {...state, list: [...state.list, action.payload] };
            break;
        }
        case "EDIT_LIST_ITEM": {
            let position = state.list.findIndex(x => x.id === action.payload.id);
            state.list[position] = action.payload;
            break;
        }
        case "SET_CURRENT_ITEM": {
            state = {...state, currentItem: state.list[action.payload-1] };
            state = {...state, contentStatus: 'display' };
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
                ...state.list.slice(position + 1)
            ]};
            state = {...state, contentStatus: 'empty' };
            break;
        }
        case "ARCHIVE_ITEM": {
            let position = state.list.findIndex(x => x.id === action.payload);
            state.list[position].status = 'archive';
            break;
        }
        case "CHANGE_TO_ADD": {
            state = {...state, contentStatus: 'add' };
            break;
        }
        case "CHANGE_TO_EDIT": {
            state = {...state, contentStatus: 'edit' };
            break;
        }
        default:
    }

    return state;  	
};

export default listReducer;