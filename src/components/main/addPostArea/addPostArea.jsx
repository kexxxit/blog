import React from "react";
import styles from './addPostArea.module.css'

let AddPostArea = (props) => {
    let postContent = React.createRef()
    let addNewPost = () => {
        let image
        if (document.getElementById('image_file').files[0]) {
            image = document.getElementById('image_file').files[0]
        } else { image = null }
        props.addPost(postContent.current.value, image)
        postContent.current.value = ''
    }
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.post__controllers}>
                <textarea ref={postContent} className={styles.post__text} placeholder={'Текст поста'}></textarea>
                <button id={'submit_post'} onClick={addNewPost}>Опубликовать</button>
                <input id={'image_file'} type={'file'} name={'postImg'} />
            </div>
        </div>
    )
}

export default AddPostArea