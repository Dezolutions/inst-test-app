import React from 'react'
import Post from '../Post/Post'
import axios from 'axios'
import {IPosts, IPost} from '../../types'
import {accessToken,idInst} from '../../tokens'
import styles from './postlist.module.css'
const PostList :React.FC = () => {
  const [name,setName] = React.useState<string>('')
  const [posts, setPosts] = React.useState<IPost[]>([])

  const fetchPosts = async () => {
    try {
      const {data: {username,media: {data}}}:IPosts = await axios.get(`https://graph.facebook.com/v11.0/${idInst}?fields=username,media{comments_count,like_count,media_url,caption}&access_token=${accessToken}`)   
      setName(username)
      setPosts(data)  
    } catch (error) {
      alert(error)
    } 
  }

  React.useEffect(():void => {
    fetchPosts()
  },[])

  console.log(posts)
  return (
    <>
    <h1 className={styles.name}>{name}</h1>
      <div className={styles.postList}>
          {posts?.map((item:IPost) => <Post key={item.id} {...item}/>)}
      </div>
    </>
  )
}

export default PostList
