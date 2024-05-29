export const initialState = {
    name: '',
    text: '',
    rating: 1
}

export const feedbackFormSlice = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'setName':
            return {...state, name: payload};
        case 'setText':
            return {...state, text: payload};
        case 'setRating':
            return {...state, rating: payload};
        case 'resetForm':
            return {...initialState};
        default:
            return state;
    }
}
