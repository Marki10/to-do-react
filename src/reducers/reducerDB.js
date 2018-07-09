const initialState = { }

const dbReducer = (state = initialState, action) => {
    switch(action.type) {
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
        default:
            break;
    }

    return state;  	
};

export default dbReducer;