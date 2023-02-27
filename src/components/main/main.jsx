import React from "react";
import styles from './main.module.css'
import AddPostArea from "./addPostArea/addPostArea";
import Posts from "./posts/posts";

class Main extends React.Component {
    componentDidMount() {
        this.props.requestPosts()
    }

    render() {

        return (
            <main className={styles.header}>
                <div className='container'>
                    <AddPostArea addPost={this.props.addPost}/>
                    <Posts posts={this.props.posts} />
                </div>
            </main>
        )
    }
}

export default Main