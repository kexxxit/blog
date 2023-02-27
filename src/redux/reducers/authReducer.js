import {authAPI} from "../../api/api";

const REGISTER_USER = 'REGISTER-USER'
const IS_USER_AUTH = 'IS-USER-AUTH'
const LOGIN_USER = 'LOGIN-USER'

let initialState = {
    userId: null,
    email: null,
    isAuth: false,
    token: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {...state}
        case IS_USER_AUTH:
            return {...state, userId: action.id, email: action.email, isAuth: true, token: action.token}
        case LOGIN_USER:
            return {...state, userId: action.id, email: action.email, isAuth: true, token: action.token}
        default:
            return state
    }
}

const registerUserAC = (response) => ({type: REGISTER_USER, id: response.data.data[1].id, email: response.data.data[1].email, token: response.data.data[0].token})
const loginAC = (response) => ({type: LOGIN_USER, id: response.data.data[1].id, email: response.data.data[1].email, token: response.data.data[0].token})

export const registration = (email, password) => {
    return async (dispatch) => {
        let response = await authAPI.register(email, password)
        dispatch(registerUserAC(response))
    }
}

export const login = (email, password) => {
    return async (dispatch) => {
        let response = await authAPI.login(email,password)
        dispatch(loginAC(response))
    }
}


export default authReducer