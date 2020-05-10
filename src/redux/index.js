import {combineReducers} from 'redux';

const isLogin = (state = false, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.payload;
        default:
            return state;
    }
}
export default combineReducers({
    isLogin
})