import React from 'react'

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import PostList from './components/PostList'
import PostPage from './pages/PostPage'

const App :React.FC = () => {
  

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/inst-test-app' component={() => <PostList/>} />
          <Route exact path='/pages/:postId' component={PostPage} />
        </Switch>

      </Router>
     
    </div>
  )
}

export default App

