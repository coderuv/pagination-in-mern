const initialState = 5;

const changeTheLimit = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_LIMIT": return state = action.payload;
        default: return state;
    }
}

export default changeTheLimit;