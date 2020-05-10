export const isLogin = (status) => {
    return {
        type: 'LOGIN',
        payload: status
    }
}