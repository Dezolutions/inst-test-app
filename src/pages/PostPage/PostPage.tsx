import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { IComments, IPostPage, IComment, IPostPageData,  } from '../../types'
import {accessToken} from '../../tokens'
import styles from './postpage.module.css'

const PostPage :React.FC = () => {
  const [post, setPost] = React.useState<IPostPage>()
  const [comments, setComments] = React.useState<IComment[]>([])
  let {postId}:any = useParams()
  const history = useHistory()
  
  const fetchPost = async () => {
    try {
      const {data}:IPostPageData = await axios.get(`https://graph.facebook.com/v11.0/${postId}?fields=media_url,caption&access_token=${accessToken}`)
      const {data:{data:comments}}:IComments = await axios.get(`https://graph.facebook.com/${postId}/comments?access_token=${accessToken}`)
      setComments(comments)
      setPost(data)
      
    } catch (error) {
      alert(error)
    }
    
  }
  React.useEffect(():void => {
    fetchPost()
  },[postId])

  return (
    <div>
      <div className={styles.post}>
        <div>
          <button onClick={() => history.push('/inst-test-app')} className={styles.button}>Back to feed</button>
          <img src={post?.media_url} alt="img" className={styles.img} />
          <div className={styles.title}>{post?.caption}</div>
        </div>
        <div>
          <strong>Comments:</strong>
          <ul>
            {
              comments.map((comment:IComment) => <li className={styles.comment} key={comment.id}><p><strong>user:</strong>{comment.id}</p><p>{comment.text}</p></li>)
            }
          </ul>
        </div>
        
      </div>
      
    </div>
  )
}

export default PostPage
