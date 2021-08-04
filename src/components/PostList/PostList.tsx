import React from 'react'
import Post from '../Post/Post'
import axios from 'axios'
import {IPosts, TPost} from '../../types'
import {accessToken,idInst} from '../../tokens'
import styles from './postlist.module.css'
const PostList :React.FC = () => {
  const [name,setName] = React.useState<string>('')
  const [posts, setPosts] = React.useState<TPost[]>([])

  React.useEffect(():void => {
    const fetchPosts = async () => {
      
      const {data: {username,media: {data}}}:IPosts = await axios.get(`https://graph.facebook.com/v11.0/${idInst}?fields=username,media{comments_count,like_count,media_url,caption}&access_token=${accessToken}`)   
      setName(username)
      setPosts(data)
      
    }
    fetchPosts()
  },[])

  console.log(posts)
  return (
    <>
    <h1 className={styles.name}>{name}</h1>
      <div className={styles.postList}>
          {posts?.map((item:TPost) => <Post key={item.id} {...item}/>)}
      </div>
    </>
  )
}

export default PostList
