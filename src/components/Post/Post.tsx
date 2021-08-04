import React from 'react'
import { TPost } from '../../types'
import styles from './post.module.css'
const Post = ({like_count,media_url,comments_count,caption,id}:TPost) => {
  return (
    <a className={styles.post}  href={`/pages/${id}`}>
      <img src={media_url} alt="img" className={styles.postImg} />
      <div>
        <div className={styles.postText}>{caption}</div>
        <div className="likes">Likes:<strong>{like_count}</strong></div>
        <div className="comments">Comments:<strong>{comments_count}</strong></div>
      </div>
    </a>
  )
}

export default Post
