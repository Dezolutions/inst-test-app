import React from 'react'
import { IPost } from '../../types'
import {useHistory} from 'react-router-dom'
import styles from './post.module.css'

const Post:React.FC<IPost> = ({like_count,media_url,comments_count,caption,id}) => {
  
  const history = useHistory()
  return (
    <button className={styles.post}  onClick={() => history.push(`pages/${id}`)}>
      <img src={media_url} alt="img" className={styles.postImg} />
      <div>
        <div className={styles.postText}>{caption}</div>
        <div className="likes">Likes:<strong>{like_count}</strong></div>
        <div className="comments">Comments:<strong>{comments_count}</strong></div>
      </div>
    </button>
  )
}

export default Post
