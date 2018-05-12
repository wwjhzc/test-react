import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import Home from 'module/home/home'
import Music from 'module/music/music'
import Video from 'module/video/video'
const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/music" exact component={Music} />
            <Route path="/video" exact component={Video} /> 
        </Switch>
    </Router>
)
export default App