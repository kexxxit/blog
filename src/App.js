import './App.css';
import Header from "./components/header/header";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Main from "./components/main/main";
import React from "react";
import {connect} from "react-redux";
import {addPost, requestPosts} from "./redux/reducers/postsReducer";
import Register from "./components/auth/register/register";
import {login, registration} from "./redux/reducers/authReducer";
import Login from "./components/auth/login/login";

class App extends React.Component {

    render() {
        console.log(this.props)
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path={'/'} element={<Main posts={this.props.postsPage.posts}
                                                         requestPosts={this.props.requestPosts}
                                                         addPost={this.props.addPost}
                        />} />
                        <Route path={'/register'} element={<Register authPage={this.props.authPage}
                                                                     registration={this.props.registration}
                        />}/>
                        <Route path={'/login'} element={<Login authPage={this.props.authPage}
                                                               login={this.props.login}
                        />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps =(state) => {
    return {
        postsPage: state.postsPage,
        authPage: state.authPage
    }
}

export default connect(mapStateToProps, {requestPosts, registration, addPost, login})(App)
