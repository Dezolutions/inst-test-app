import React from 'react'
import Post from './Post'
import axios from 'axios'
import {IPosts, TPost} from '../types'
const PostList :React.FC = () => {
  const [name,setName] = React.useState<string>('')
  const [posts, setPosts] = React.useState<TPost[]>([])

  React.useEffect(():void => {
    const fetchPosts = async () => {
      const IdInst:string = '17841405670639911'
      const accessToken:string = 'EAAR7V5wR3gYBAEXWrUnSpJi80nyARqoRrjSy4IsxjlGqWZAy0EpQNI9OM6edTdcQ2C5p2GwI5UKMv0bacDn0plncijoQnWtjnm4ZCTPkYUOlcMNhbmSZC2F9FvheOIIoCSZCMmToZBpUI58S1fWsn0VGi7obsLOTJ7sdbGX4OPHsBVpZAnUc9TyEHuN4UBoruF8nTL1Iq2AV25dKBYZBt2w'
      const {data: {username,media: {data}}}:IPosts = await axios.get(`https://graph.facebook.com/v11.0/${IdInst}?fields=username,followers_count,media_count,media{comments_count,like_count,media_url,caption}&access_token=${accessToken}`)   
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
