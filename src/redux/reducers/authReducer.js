import {authAPI} from "../../api/api";

const REGISTER_USER = 'REGISTER-USER'
const IS_USER_AUTH = 'IS-USER-AUTH'
const LOGIN_USER = 'LOGIN-USER'
const LOGOUT_USER = 'LOGOUT-USER'

let initialState = {
    userId: null,
    email: null,
    isAuth: false,
    isAdmin: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {...state, userId: action.id, email: action.email, isAdmin: action.isAdmin, isAuth: true}
        case IS_USER_AUTH:
            return {...state, userId: action.id, email: action.email, isAdmin: action.isAdmin, isAuth: true}
        case LOGIN_USER:
            return {...state, userId: action.id, email: action.email, isAdmin: action.isAdmin, isAuth: true}
        case LOGOUT_USER:
            return {...state, userId: null, email: null, isAuth: false, isAdmin: false}
        default:
            return state
    }
}

const registerUserAC = (response) => ({type: REGISTER_USER, id: response.data.data[1].id,
    email: response.data.data[1].email, token: response.data.data[0].token, isAdmin: response.data.data[1].isAdmin})
const loginAC = (response) => ({type: LOGIN_USER, id: response.data.data[1].id, email: response.data.data[1].email,
    token: response.data.data[0].token, isAdmin: response.data.data[1].isAdmin})
const isUserAuthAC = (response) => ({type: IS_USER_AUTH, id: response.data.user.id, email: response.data.user.email,
    isAdmin: response.data.user.isAdmin})
const logoutAC = () => ({type: LOGOUT_USER})

export const registration = (email, password) => {
    return async (dispatch) => {
        let response = await authAPI.register(email, password)
        if (!response.data.success) {
            return response.data
        }
        localStorage.setItem(`token`, `${response.data.data[0].token}`)
        dispatch(registerUserAC(response))
    }
}

export const login = (email, password) => {
    return async (dispatch) => {
        let response = await authAPI.login(email,password)
        if (!response.data.success) {
            return response.data
        }
        localStorage.setItem(`token`, `${response.data.data[0].token}`)
        dispatch(loginAC(response))
    }
}

export const isUserAuth = () => {
    return async (dispatch) => {
        let response = await authAPI.getUser()
        console.log(response)
        dispatch(isUserAuthAC(response))
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        localStorage.removeItem('token')
        dispatch(logoutAC())
    }
}


export default authReducer