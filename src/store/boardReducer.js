const initialState = {
    lists: []
}

export const boardReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return { ...state };
    };
};