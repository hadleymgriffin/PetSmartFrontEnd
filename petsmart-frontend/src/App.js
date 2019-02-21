import React from 'react'
import Form from 'react-bootstrap/Form'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/section1">Section1</Link></li>
        <li><Link to="/section2">Section2</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/section1" component={Section1}/>
      <Route path="/section2" component={Section2}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
  
)
export default BasicExample