import React from 'react'
import {Link} from 'react-router-dom'
const Post : React.FC = ({like_count,media_url,comments_count,caption,id}:any) => {
  return (
    <a href={`/pages/${id}`}>
      <div>
        <img src={media_url} alt="" style={{width: 400}} />
        <div>
          <div className="post-text">{caption}</div>
          <div className="likes">{like_count}</div>
          <div className="comments">{comments_count}</div>
          
        </div>
      </div>
    </a>
  )
}

export default Post
