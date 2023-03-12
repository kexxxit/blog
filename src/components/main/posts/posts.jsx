import React from "react";
import styles from './posts.module.css'

let Posts = (props) => {
    return (
        <div className={styles.posts}>
            {props.posts.map(post => {
                return <div key={post.postId} className={styles.post}>
                    <div>{post.postText}</div>
                    {post.postImg ?
                        <div className={styles.post__image}>
                            <img src={post.postImg} alt={'post image'}/>
                        </div>: ''}
                </div>
            })}
        </div>
    )
}

export default Posts