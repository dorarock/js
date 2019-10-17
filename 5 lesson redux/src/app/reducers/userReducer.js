export default function reducer(state={
    userData: [],
    fetching: false,
    fetched: false,
    error: null,
},action) {

    switch (action.type) {
        case 'FETCH_USERS': {
            return {...state, fetching: true}
        }
        case 'FETCH_USERLIST_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }
        case 'FETCH_USERLIST_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                userData: action.payload.data,
            }
        }
    }

    return state;
}