import React from 'react'
import axios from 'axios'
import Post from './components/Post'
import {TPost} from './types'

const App :React.FC = () => {
  const [name,setName] = React.useState<string>('')
  const [posts, setPosts] = React.useState<TPost[]>([])

  React.useEffect(():void => {
    const fetchPosts = async () => {
      const IdInst = '17841405670639911'
      const accessToken = 'EAAR7V5wR3gYBAIbvomx4Sf7TpEnhSWWZAltnxUV6n6bm4CCpRx0jKs2EUCGUewPlMo4zqDhNZArv1sdoQZA41EtZBM5L4d1X4zqZCVjNkwtNqmuZAScW8B7WdjYESnsnwOx2GZCBIVgT70tf0f30ANXREBVHHbjZBZBnyuCyWQxaZCdZBszXwtPtt79n7LUzZA5OPqxDnpZCR5XrXZAV5a7Fipau07'
      const {data: {username,media: {data}}} = await axios.get(`https://graph.facebook.com/v11.0/${IdInst}?fields=username,followers_count,media_count,media{comments_count,like_count,media_url,caption}&access_token=${accessToken}`)   
      setName(username)
      setPosts(data)
      
    }
    fetchPosts()
  },[])

  console.log(posts)
  return (
    <div>
      <h3>{name}</h3>
      <div>
        {posts?.map((item:TPost) => <Post key={item.id} {...item}/>)}
      </div>
      <p></p>
    </div>
  )
}

export default App

