import { SET_USER, REMOVE_USER, ALTER_USER } from '../actions/types';

const INITIAL_USER = {
    userDetail : '',
    userToken : '',
};

const userReducer = (state = INITIAL_USER, action) => {
    //console.log('in user reducer');
    switch (action.type) {
    case SET_USER:
        console.log('userData Token :', action.payload.token);
        state = Object.assign({}, state, { userDetail: action.payload.user, userToken: action.payload.token, loading:false });
        //return { ...INITIAL_USER, ...action.payload };
        return state;
    case REMOVE_USER:
        return { ...INITIAL_USER };
    case ALTER_USER:
        // console.log("updated Data : ", action.payload);
        state = Object.assign({}, state, { userDetail: action.payload, loading:false });
        //return { ...INITIAL_USER, ...action.payload };
        return state;

    default:
        return state;
    }
};

export default userReducer;
