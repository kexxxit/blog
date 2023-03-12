import React from "react";
import styles from './main.module.css'
import AddPostArea from "./addPostArea/addPostArea";
import Posts from "./posts/posts";
import Avatar from "./avatar.svg"

class Main extends React.Component {
    componentDidMount() {
        this.props.requestPosts()
    }

    render() {

        return (
            <main className={styles.main}>
                <div className='container'>
                    <div className={styles.wrapper}>
                        <div>
                            <div className={styles.user}>
                                <img className={styles.avatar} src={Avatar}/>
                                <div>{this.props.isAuth ? this.props.email : 'Вы не авторизованы'}</div>
                            </div>
                        </div>
                        <div>
                            {this.props.isAdmin ? <AddPostArea addPost={this.props.addPost}/> : null}
                            <Posts posts={this.props.posts} />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main