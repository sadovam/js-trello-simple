const initialState = {
    boards: []
}

export const homeReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return { ...state };
    };
};