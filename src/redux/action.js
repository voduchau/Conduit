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

export const handleDelete = (id) => {
    return async (dispatch) => {
        const res = await axios.delete(`/listItems/${id}`)
        if(res.status === 200) {
            const res2 = await axios.get('/listItems')
            dispatch({
                type: "DELETE",
                payload: res2.data
            })
        }
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
    return async (dispatch)=>{
        const res = await axios.post('/listItems',{...data,date:today})
        dispatch({
            type: "ADD",
            payload:res.data
        })
    }  
}

export const getAllTags = () => {
    return async (dispatch) => {
        const res = await axios.get('/listItems')
        dispatch({
            type: "GETTAG",
            payload:res.data.map(item => {
                return item.tag
            })
        })
    }
}

export const deleteTag = () => {
    return async (dispatch) => {
        const res = await axios.get('/listItems')
        dispatch({
            type: "DELETETAG",
            payload: res.data.map(item =>{
                return item.tag
            })
        })
    }
    
}