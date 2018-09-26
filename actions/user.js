import { SET_USER, ALTER_USER } from './types';

function setUser(user) {
    console.log('add new user ');
    return (dispatch) => {dispatch({type: SET_USER, payload:user})};
}

function alterUser(user) {
    console.log('alter user ');
    return (dispatch) => {dispatch({type: ALTER_USER, payload:user})};
}


export { setUser,alterUser, };
