import {postsAPI} from "../../api/api";

const SET_POSTS = 'SET-POSTS'

let initialState = {
    posts: [
        {
            "postId": 1,
            "postText": "post 1",
            "postImg": "https://tipik.ru/wp-content/uploads/2021/03/%D0%92%D0%B5%D1%81%D0%BD%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-2.jpeg"
        },
        {
            "postId": 2,
            "postText": "post 2",
            "postImg": "https://tipik.ru/wp-content/uploads/2021/03/%D0%92%D0%B5%D1%81%D0%BD%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-2.jpeg"
        },
        {
            "postId": 3,
            "postText": "post 3 ",
            "postImg": "https://tipik.ru/wp-content/uploads/2021/03/%D0%92%D0%B5%D1%81%D0%BD%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-2.jpeg"
        },
        {
            "postId": 4,
            "postText": "post 4",
            "postImg": "https://tipik.ru/wp-content/uploads/2021/03/%D0%92%D0%B5%D1%81%D0%BD%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-2.jpeg"
        }
    ]
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.posts.reverse()}
        default:
            return state
    }
}

const setPosts = (posts) => ({type: SET_POSTS, posts: posts})

export const requestPosts = () => {
    return async (dispatch) => {
        let response = await postsAPI.getPosts()
        dispatch(setPosts(response))
    }
}

export const addPost = (postText, postImg) => {
    return async (dispatch) => {
        await postsAPI.addPosts(postText, postImg)
        let response = await postsAPI.getPosts()
        dispatch(setPosts(response))
    }
}

export default postsReducer