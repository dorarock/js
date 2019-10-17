import axios from 'axios';

export function fetchUsers() {
    return function(dispatch) {
        dispatch({type: 'FETCH_USERS'});

        axios.get("http://jsonplaceholder.typicode.com/users")
        .then((response) => {
            const data = response.data;
            dispatch({
            type: 'FETCH_USERLIST_FULFILLED', 
            payload: {
                data
            },
        })
    })
        .catch((err) => {
            dispatch({type: 'FETCH_USERLIST_REJECTED', payload: err})
        })  

    }
}    

    