import React from "react";
import styles from './addPostArea.module.css'

let AddPostArea = (props) => {
    let postContent = React.createRef()
    let addNewPost = () => {
        props.addPost(postContent.current.value)
        postContent.current.value = ''
    }
    return (
        <div className={styles.wrapper}>
            <div>
                <img className={styles.avatar} src={'https://cdn-icons-png.flaticon.com/128/236/236831.png'}/>
                <div>Вы редактор</div>
            </div>
            <div className={styles.post__controllers}>
                <textarea ref={postContent} className={styles.post__text} placeholder={'Текст поста'}></textarea>
                <button onClick={addNewPost}>Опубликовать</button>
            </div>
        </div>
    )
}

export default AddPostArea