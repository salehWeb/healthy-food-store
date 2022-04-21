const reducer = (state = null, action) => {
    switch (action.type) {
        case 'first':
            return  action.payload;
        case 'second':
            return state ;
        default:
            return state
    }
}

export default reducer