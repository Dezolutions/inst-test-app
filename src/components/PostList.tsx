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
      const accessToken = 'EAAR7V5wR3gYBAOh1r7vE6YZA6n0YZB8R6spNW1Ia2ZCpNaBaPpso92YAG9T6bweTxfEraZBm32AdlT0FvZCQF1yj1YliS6pKTZBDxjZBbk7w3u6Hie8yz8D85ucaalCyPYtvWhZAINs0xNYry8SF5HK8r4N6kuAsDL0s3ZBI2OHrnqZBobKmI6bR3wF2x182YMiNzkWghldq8jsEFPpGjE5tmv'
      const {data: {username,media: {data}}} = await axios.get(`https://graph.facebook.com/v11.0/${IdInst}?fields=username,followers_count,media_count,media{comments_count,like_count,media_url,caption}&access_token=${accessToken}`)   
      setName(username)
      setPosts(data)
      
    }
    fetchPosts()
  },[])
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
