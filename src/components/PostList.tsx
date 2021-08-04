import React from 'react'
import Post from './Post'
import axios from 'axios'
import {TPost} from '../types'
const PostList :React.FC = () => {
  const [name,setName] = React.useState<string>('')
  const [posts, setPosts] = React.useState<TPost[]>([])

  React.useEffect(():void => {
    const fetchPosts = async () => {
      const IdInst = '17841405670639911'
      const accessToken = 'EAAR7V5wR3gYBAHE2NHcXOpzZAhYZB1M1AANeGYa3wcJ9dS51jKdpnYH0KdBbMmesJGEfB5g0O2H52bRVc6XDioAwmimX93CvuicoOum3UsMukl8zXQ4uTGsN2ZApZAkNG5SnyOlaE47ia7MVoxacL4YBoIYlIE7QeycZBFJcDf1ZAewRSSZAkZBdi8SQEbXRoDZBtpw3YhnCiHf7LkOlrfClH'
      const {data: {username,media: {data}}} = await axios.get(`https://graph.facebook.com/v11.0/${IdInst}?fields=username,followers_count,media_count,media{comments_count,like_count,media_url,caption,comments}&access_token=${accessToken}`)   
      setName(username)
      setPosts(data)
      
    }
    fetchPosts()
  },[])
  console.log(posts)
  return (
    <>
    <h1>{name}</h1>
      <div>
          {posts?.map((item:TPost) => <Post key={item.id} {...item}/>)}
      </div>
    </>
  )
}

export default PostList
