import './App.css';
import Header from "./components/header/header";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Main from "./components/main/main";
import React from "react";
import {connect} from "react-redux";
import {addPost, requestPosts} from "./redux/reducers/postsReducer";
import Register from "./components/auth/register";
import {isUserAuth, login, logout, registration} from "./redux/reducers/authReducer";
import Login from "./components/auth/login";

class App extends React.Component {
    componentDidMount() {
        this.props.isUserAuth()

    }

    render() {
        console.log(this.props.authPage)
        return (
            <BrowserRouter>
                <div className="App">
                    <Header isAuth={this.props.authPage.isAuth} email={this.props.authPage.email} logout={this.props.logout}/>
                    <Routes>
                        <Route path={'/'} element={<Main posts={this.props.postsPage.posts}
                                                         requestPosts={this.props.requestPosts}
                                                         addPost={this.props.addPost}
                                                         isAdmin={this.props.authPage.isAdmin}
                                                         isAuth={this.props.authPage.isAuth}
                                                         email={this.props.authPage.email}
                        />} />
                        <Route path={'/register'} element={<Register authPage={this.props.authPage}
                                                                     registration={this.props.registration}
                                                                     isAuth={this.props.authPage.isAuth}
                        />}/>
                        <Route path={'/login'} element={<Login authPage={this.props.authPage}
                                                               login={this.props.login}
                                                               isAuth={this.props.authPage.isAuth}
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

export default connect(mapStateToProps, {requestPosts, registration, addPost, login, isUserAuth,logout})(App)
