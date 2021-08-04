import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const PostPage :React.FC = () => {
  const [post, setPost] = React.useState({media_url: ''})
  const [comments, setComments] = React.useState([])
  let {postId}:any = useParams()

  React.useEffect(():void => {
    const fetchPost = async () => {
      const accessToken = 'EAAR7V5wR3gYBAHE2NHcXOpzZAhYZB1M1AANeGYa3wcJ9dS51jKdpnYH0KdBbMmesJGEfB5g0O2H52bRVc6XDioAwmimX93CvuicoOum3UsMukl8zXQ4uTGsN2ZApZAkNG5SnyOlaE47ia7MVoxacL4YBoIYlIE7QeycZBFJcDf1ZAewRSSZAkZBdi8SQEbXRoDZBtpw3YhnCiHf7LkOlrfClH'
      const {data} = await axios.get(`https://graph.facebook.com/v11.0/${postId}?fields=media_url,caption&access_token=${accessToken}`)
      const {data:{data:comments}} = await axios.get(`https://graph.facebook.com/${postId}/comments?access_token=${accessToken}`)
      setComments(comments)
      setPost(data)
      
    }
    fetchPost()
  },[])
  console.log(comments)
  return (
    <div>
      postId: {postId}
      <img src={post.media_url} alt="" />
      <p>
        {
          comments.map((comment:any) => <li>{comment.text}</li>)
        }
      </p>
    </div>
  )
}

export default PostPage
