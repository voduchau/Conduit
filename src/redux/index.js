import {combineReducers} from 'redux';
import _ from 'lodash';
const isLogin = (state = false, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.payload;
        default:
            return state;
    }
}
const article = (state ={},action) =>{
    switch (action.type){
        case "TITLE":
            return {...state, title: action.payload}
        case "ABOUT":
            return {...state, about: action.payload}
        case "DISCRIBE":
            return {...state,discribe: action.payload}
        case "TAG":
            return {...state, tag: action.payload}
        default:
            return state;
    }
}
const CreateArticle = (state = {}, action) =>{
    switch (action.type) {
        case "ALL":
            state = {}
            return {...state,..._.mapKeys(action.payload,'id')}
        case "ADD":
            return {...state,[action.payload.id]:action.payload}
        case "DELETE":
            return action.payload;
        case "FILTERTAG":
            return action.payload;
        case "FINDPOST":
            const item = action.getitem.filter(item =>{
                return item.title.toLowerCase().includes(`${action.payload}`)
            })
            return _.mapKeys(item,'id')
        default: 
            return state
    }
}
const GetTags = (state=[],action) => {
    switch (action.type) {
        case "GETTAG":
                return action.payload;
        case "DELETETAG":
            return action.payload
        default:
            return state;
    }
}
const User = (state=[], action) =>{
    switch(action.type){
        case "USER":
            return action.payload;
        default:
            return state;
    }
}
const SearchBar = (state = "",action ) => {
    switch(action.type){
        case "SEARCH":
            return action.payload;
        default:
            return state;
    }
}
export default combineReducers({
    isLogin,
    article,
    showArticle: CreateArticle,
    User,
    GetTags,
    SearchBar
})