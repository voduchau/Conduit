import axios from '../api/axios';

export const isLogin = (status) => {
    return {
        type: 'LOGIN',
        payload: status
    }
}
export const handleTitle = (data) =>{
    return {
        type: 'TITLE',
        payload:data
    }
}
export const handleAbout = (data) =>{
    return {
        type: 'ABOUT',
        payload:data
    }
}
export const handleDiscribe = (data) =>{
    return {
        type: 'DISCRIBE',
        payload:data
    }
}
export const handleTag = (data) =>{
    return {
        type: 'TAG',
        payload:data
    }
}

export const User = (data) => {
    return {
        type: 'USER',
        payload: data.getName()
    }
}

export const getAllArtical = () => {
    return async (dispatch) => {
        const res = await axios.get('/listItems')
        dispatch({ 
            type: "ALL",
            payload: res.data
        })
    }
}

export const handleSubmit = (data) =>{
    var today = new Date();
    console.log(today,'asd')
    return async (dispatch)=>{
        const res = await axios.post('/listItems',{...data,date:today})
        console.log(res.data,'res')
        dispatch({
            type: "ADD",
            payload:res.data
        })
    }  
}