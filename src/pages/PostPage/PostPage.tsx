import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { IComments, IPostPage, TComment, TPostPage } from '../../types'
import {accessToken} from '../../tokens'
import styles from './postpage.module.css'
const PostPage :React.FC = () => {
  const [post, setPost] = React.useState<TPostPage>()
  const [comments, setComments] = React.useState<TComment[]>([])
  let {postId}:any = useParams()

  React.useEffect(():void => {

    const fetchPost = async () => {
      const {data}:IPostPage = await axios.get(`https://graph.facebook.com/v11.0/${postId}?fields=media_url,caption&access_token=${accessToken}`)
      const {data:{data:comments}}:IComments = await axios.get(`https://graph.facebook.com/${postId}/comments?access_token=${accessToken}`)
      setComments(comments)
      setPost(data)
    }
    fetchPost()

  },[postId])

  console.log(comments)
  return (
    <>
      <div className={styles.post}>
        <div>
          <img src={post?.media_url} alt="img" className={styles.img} />
          <div className={styles.title}>{post?.caption}</div>
        </div>
        <div>
          <strong>Comments:</strong>
          <ul>
            {
              comments.map((comment:TComment) => <li className={styles.comment} key={comment.id}><p><strong>user:</strong>{comment.id}</p><p>{comment.text}</p></li>)
            }
          </ul>
        </div>
        
      </div>
      <a href="/inst-test-app">Back</a>
    </>
  )
}

export default PostPage
