import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { IComments, IPostPage, TComment, TPostPage } from '../types'

const PostPage :React.FC = () => {
  const [post, setPost] = React.useState<TPostPage>()
  const [comments, setComments] = React.useState<TComment[]>([])
  let {postId}:any = useParams()

  React.useEffect(():void => {
    const fetchPost = async () => {
      const accessToken: string = 'EAAR7V5wR3gYBAEXWrUnSpJi80nyARqoRrjSy4IsxjlGqWZAy0EpQNI9OM6edTdcQ2C5p2GwI5UKMv0bacDn0plncijoQnWtjnm4ZCTPkYUOlcMNhbmSZC2F9FvheOIIoCSZCMmToZBpUI58S1fWsn0VGi7obsLOTJ7sdbGX4OPHsBVpZAnUc9TyEHuN4UBoruF8nTL1Iq2AV25dKBYZBt2w'
      const {data}:IPostPage = await axios.get(`https://graph.facebook.com/v11.0/${postId}?fields=media_url,caption&access_token=${accessToken}`)
      const {data:{data:comments}}:IComments = await axios.get(`https://graph.facebook.com/${postId}/comments?access_token=${accessToken}`)
      setComments(comments)
      setPost(data)
    }
    fetchPost()
  },[])

  console.log(comments)
  return (
    <div>
      <img src={post?.media_url} alt="" />
      <div>
        {
          comments.map((comment:TComment) => <li key={comment.id}><p>{comment.id}</p><p>{comment.text}</p></li>)
        }
      </div>
    </div>
  )
}

export default PostPage
