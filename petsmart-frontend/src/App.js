import React from 'react'
import Form from 'react-bootstrap/Form'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const App = () => (
  <Router>
    <div>
      <Route path="/section1" component={Section1}/>
      <Route path="/section2" component={Section2}/>
      </div>
  </Router>
  
)
export default App