const initialState = {
    loading: false
}

export default function reducer(state = initialState, action) {
    if (action.type === 'LOADING_ON') {
        return {...state, loading: true}
    }
    else if (action.type === 'LOADING_OFF') {
        return {...state, loading: false}
    }
    return state
}