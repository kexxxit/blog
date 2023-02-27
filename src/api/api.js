import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMDY2MmY2Njg3MWMxYTRjMGVhMDFlNmRjNTRkNmM2YWU4OTAzMGRiZjJmOTY1YTIxZjVlMWM1NmVkNjk2YzFmMzg3ODM5NWY0MzA2NDU2NWUiLCJpYXQiOjE2NzczMDQwMzEuOTc2OTE5LCJuYmYiOjE2NzczMDQwMzEuOTc2OTI0LCJleHAiOjE2OTI5NDI0MzEuOTYxMjQyLCJzdWIiOiIxNSIsInNjb3BlcyI6W119.cFch4Z8gp6I8sxo5KYyCgQUJvZyIHxr_E05lytvdmV4e1N6mprN6U62G-Y9TK7jRt4crfCQKYesQlL2LdfgZWn5NjGf58Sdp6zKQRRU4CtxevnsDdKvD_rXQdlFXqTSMaC_pBzz0uYMQr6pHvwtSir_ebgpGmEdtNparmyUhe3NK-2d1G3MMxx7g-zNemptHUMXLCKF_FtJuV3SE1ad0o8Fkf0OwUrRH9zGPWxU7RaJxwX0Y-LNewiT756D1BZs97uFZlZLkDEewoYS69zgNDyI47LQTJ9SfJeGbpPgdduVZqqdFYtZvvj0L07s8olvYLTNPfLMcDD3KBkbJETI87H8ECH97JgwkYnrfYl3qvVA5sVsEvSIs_KS_vefdxigx74Ahw_9b1jiG8CPNoKj0O2WtS_d7pJlLW_6L0XHn3uogf_cJtZSJwPDDe2mtxgLmjx9cdXUIBKxwy-CyCzLMnrPKy1DGvag1ZiE_TQpVRx9lG-6Q52tJ1h_F1nb8HRMz_sHFaHmNmNdzQI4DpNvL6yx9tA-Eeu_xNHpbKvGcm90UYJZvsT5SOmGz0_fH7GdB56Rxb_TNtNKKKm5s0FeZatMj1Ro0I5-IlJgANv5wCVYVerJS9h7fMGBk0Kx8nnwDYYFbWe8-4M6VaFG-gDNlFzK1IG8A73c3FmCa0n58oIk`
    }
})

export const postsAPI = {
    getPosts() {
        return instance.get(`posts`)
            .then(response => {
                return response.data
            })
    },
    addPosts(postText) {
        return instance.post(`posts`, {postText: postText})
    }
}

export const authAPI = {
    register(email, password) {
        return instance.post(`register`, {email: email, password: password})
    },
    login(email, password) {
        return instance.post(`login`, {email: email, password: password})
    }
}
