import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
})

export const postsAPI = {
    getPosts() {
        return instance.get(`posts`)
            .then(response => {
                return response.data
            })
    },
    addPosts(postText, postImg) {
        let formData = new FormData()
        formData.append('postText', postText)
        if (postImg) {
            formData.append('postImg', postImg)
        }
        return instance.post(`posts`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
}

export const authAPI = {
    register(email, password) {
        return instance.post(`register`, {email: email, password: password}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    },
    login(email, password) {
        return instance.post(`login`, {email: email, password: password}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    },
    logout() {
        return instance.post(`logout`, {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    },
    getUser() {
        return instance.get(`user`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
}
