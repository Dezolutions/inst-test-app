import React from 'react'
import axios from 'axios'

const App = () => {
  React.useEffect(() => {
    const fetchPosts = async () => {
      const data = await axios.get('https://graph.instagram.com/{user-id}?fields=id,username&access_token={access-token}')
    }
  })

  return (
    <div>
      
    </div>
  )
}

export default App

